/*
 * TestKube API
 *
 * TestKube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: testkube@kubeshop.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

import (
	"time"
)

// test execution summary
type TestSuiteExecutionSummary struct {
	// execution id
	Id string `json:"id"`
	// execution name
	Name string `json:"name"`
	// name of the script
	TestName string                    `json:"testName"`
	Status   *TestSuiteExecutionStatus `json:"status"`
	// test execution start time
	StartTime time.Time `json:"startTime,omitempty"`
	// test execution end time
	EndTime time.Time `json:"endTime,omitempty"`
	// test execution duration
	Duration  string                          `json:"duration,omitempty"`
	Execution []TestSuiteStepExecutionSummary `json:"execution,omitempty"`
}
