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

type TestSuiteStep struct {
	StopTestOnFailure bool                        `json:"stopTestOnFailure"`
	Execute           *TestSuiteStepExecuteScript `json:"execute,omitempty"`
	Delay             *TestSuiteStepDelay         `json:"delay,omitempty"`
}
