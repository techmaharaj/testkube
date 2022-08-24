/*
 * Testkube API
 *
 * Testkube provides a Kubernetes-native framework for test definition, execution and results
 *
 * API version: 1.0.0
 * Contact: testkube@kubeshop.io
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */
package testkube

// Listener result after sending particular event
type TestkubeEventResult struct {
	// UUID of event
	Id string `json:"id,omitempty"`
	// error message if any
	Error_ string `json:"error,omitempty"`
	// result of event
	Result string `json:"result,omitempty"`
}
