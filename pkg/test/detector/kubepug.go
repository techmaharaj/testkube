package detector

import (
	apiClient "github.com/kubeshop/testkube/pkg/api/v1/client"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
)

// KubePugAdapter is a test adapter for kubepug
type KubePugAdapter struct{}

// Is detects based on upsert test options what kind of test it is
func (d KubePugAdapter) Is(options apiClient.UpsertTestOptions) (name string, ok bool) {
	if options.Content == nil {
		return
	}

	if options.Content.Data == "" {
		return
	}

	// TODO: implement kubepug detector

	return
}

// IsWithPath detects based on upsert test options what kind of test it is
func (d KubePugAdapter) IsWithPath(path string, options apiClient.UpsertTestOptions) (name string, ok bool) {
	// TODO: implement kubepug detector
	return "", false
}

// IsTestName detecs if filename has a conventional test name
func (d KubePugAdapter) IsTestName(filename string) (string, bool) {
	return "", false
}

// IsEnvName detecs if filename has a conventional env name
func (d KubePugAdapter) IsEnvName(filename string) (string, string, bool) {
	return "", "", false
}

// IsSecretEnvName detecs if filename has a conventional secret env name
func (d KubePugAdapter) IsSecretEnvName(filename string) (string, string, bool) {
	return "", "", false
}

// GetSecretVariables retuns secret variables
func (d KubePugAdapter) GetSecretVariables(data string) (map[string]testkube.Variable, error) {
	return nil, nil
}

// GetType returns test type
func (d KubePugAdapter) GetType() string {
	return "kubepug/yaml"
}
