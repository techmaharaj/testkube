// Copyright 2024 Testkube.
//
// Licensed as a Testkube Pro file under the Testkube Community
// License (the "License"); you may not use this file except in compliance with
// the License. You may obtain a copy of the License at
//
//	https://github.com/kubeshop/testkube/blob/main/licenses/TCL.txt

package spawn

import (
	"encoding/json"
	"errors"
	"fmt"
	"math"

	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/util/intstr"

	testworkflowsv1 "github.com/kubeshop/testkube-operator/api/testworkflows/v1"
	"github.com/kubeshop/testkube/internal/common"
	"github.com/kubeshop/testkube/pkg/tcl/expressionstcl"
)

func FromInstruction(name string, instruction testworkflowsv1.SpawnInstructionBase, machines ...expressionstcl.Machine) (Service, error) {
	// Validate the instruction
	if len(instruction.Pod.Spec.Containers) == 0 {
		return Service{}, errors.New("pod.spec.containers: no containers provided")
	}

	// Resolve the shards and matrix
	shards, err := readParams(instruction.Shards, machines...)
	if err != nil {
		return Service{}, fmt.Errorf("shards: %w", err)
	}
	matrix, err := readParams(instruction.Matrix, machines...)
	if err != nil {
		return Service{}, fmt.Errorf("matrix: %w", err)
	}
	minShards := int64(math.MaxInt64)
	for key := range shards {
		if int64(len(shards[key])) < minShards {
			minShards = int64(len(shards[key]))
		}
	}

	// Calculate number of matrix combinations
	combinations := CountCombinations(matrix)

	// Resolve the count
	var count, maxCount *int64
	if instruction.Count != nil {
		countVal, err := readCount(*instruction.Count, machines...)
		if err != nil {
			return Service{}, fmt.Errorf("count: %w", err)
		}
		count = &countVal
	}
	if instruction.MaxCount != nil {
		countVal, err := readCount(*instruction.MaxCount, machines...)
		if err != nil {
			return Service{}, fmt.Errorf("maxCount: %w", err)
		}
		maxCount = &countVal
	}
	if count == nil && maxCount == nil {
		count = common.Ptr(int64(1))
	}
	if count != nil && maxCount != nil && *maxCount < *count {
		count = maxCount
		maxCount = nil
	}
	if maxCount != nil && *maxCount > minShards {
		count = &minShards
		maxCount = nil
	} else if maxCount != nil {
		count = maxCount
		maxCount = nil
	}

	// Compute parallelism
	var parallelism *int64
	if instruction.Parallelism != nil {
		parallelismVal, err := readCount(*instruction.Parallelism, machines...)
		if err != nil {
			return Service{}, fmt.Errorf("parallelism: %w", err)
		}
		parallelism = &parallelismVal
	}
	if parallelism == nil {
		parallelism = common.Ptr(int64(math.MaxInt64))
	}
	if *parallelism > *count*combinations {
		parallelism = common.Ptr(*count * combinations)
	}

	// Build the service
	var pod corev1.PodTemplateSpec
	if instruction.Pod != nil {
		pod = *instruction.Pod
	}
	svc := Service{
		Name:        name,
		Description: instruction.Description,
		Strategy:    instruction.Strategy,
		Count:       *count,
		Parallelism: *parallelism,
		Logs:        common.ResolvePtr(instruction.Logs, false),
		Timeout:     instruction.Timeout,
		Matrix:      matrix,
		Shards:      shards,
		Ready:       instruction.Ready,
		Error:       instruction.Error,
		PodTemplate: pod,
		Files:       instruction.Files,
		Transfer:    instruction.Transfer,
	}

	// Define the default success/error clauses
	if svc.Ready == "" {
		svc.Ready = "success"
	}
	if svc.Error == "" {
		svc.Error = "deleted || failed"
	}

	// Save the service
	return svc, nil
}

func readCount(s intstr.IntOrString, machines ...expressionstcl.Machine) (int64, error) {
	countExpr, err := expressionstcl.CompileAndResolve(s.String(), machines...)
	if err != nil {
		return 0, fmt.Errorf("%s: invalid: %s", s.String(), err)
	}
	if countExpr.Static() == nil {
		return 0, fmt.Errorf("%s: could not resolve: %s", s.String(), err)
	}
	countVal, err := countExpr.Static().IntValue()
	if err != nil {
		return 0, fmt.Errorf("%s: could not convert to int: %s", s.String(), err)
	}
	if countVal < 0 {
		return 0, fmt.Errorf("%s: should not be lower than zero", s.String())
	}
	return countVal, nil
}

func readParams(base map[string]testworkflowsv1.StringSlice, machines ...expressionstcl.Machine) (map[string][]interface{}, error) {
	result := make(map[string][]interface{})
	for key, items := range base {
		exprStr := items.Expression
		if !items.Dynamic {
			b, err := json.Marshal(items.Static)
			if err != nil {
				return nil, fmt.Errorf("%s: could not parse list of values: %s\n", key, err)
			}
			exprStr = string(b)
		}
		expr, err := expressionstcl.CompileAndResolve(exprStr, machines...)
		if err != nil {
			return nil, fmt.Errorf("%s: %s: %s", key, exprStr, err)
		}
		if expr.Static() == nil {
			return nil, fmt.Errorf("%s: %s: could not resolve", key, exprStr)
		}
		list, err := expr.Static().SliceValue()
		if err != nil {
			return nil, fmt.Errorf("%s: %s: could not parse as list: %s", key, exprStr, err)
		}
		result[key] = list
	}
	for key := range result {
		if len(result[key]) == 0 {
			delete(result, key)
		}
	}
	return result, nil
}
