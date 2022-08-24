package v1

import (
	"context"
	"fmt"
	"net/http"
	"sort"
	"strconv"
	"strings"
	"sync"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/mongo"
	"k8s.io/apimachinery/pkg/api/errors"

	testsuitesv2 "github.com/kubeshop/testkube-operator/apis/testsuite/v2"
	"github.com/kubeshop/testkube/internal/pkg/api/datefilter"
	"github.com/kubeshop/testkube/internal/pkg/api/repository/testresult"
	"github.com/kubeshop/testkube/pkg/api/v1/testkube"
	"github.com/kubeshop/testkube/pkg/crd"
	testsmapper "github.com/kubeshop/testkube/pkg/mapper/tests"
	testsuitesmapper "github.com/kubeshop/testkube/pkg/mapper/testsuites"
	"github.com/kubeshop/testkube/pkg/types"
	"github.com/kubeshop/testkube/pkg/workerpool"
)

// GetTestSuiteHandler for getting test object
func (s TestkubeAPI) CreateTestSuiteHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		var request testkube.TestSuiteUpsertRequest
		err := c.BodyParser(&request)
		if err != nil {
			return s.Error(c, http.StatusBadRequest, err)
		}

		if c.Accepts(mediaTypeJSON, mediaTypeYAML) == mediaTypeYAML {
			if request.Description != "" {
				request.Description = fmt.Sprintf("%q", request.Description)
			}

			data, err := crd.GenerateYAML(crd.TemplateTestSuite, []testkube.TestSuiteUpsertRequest{request})
			return s.getCRDs(c, data, err)
		}

		testSuite := testsuitesmapper.MapTestSuiteUpsertRequestToTestCRD(request)
		testSuite.Namespace = s.Namespace

		s.Log.Infow("creating test suite", "testSuite", testSuite)

		created, err := s.TestsSuitesClient.Create(&testSuite)

		s.Metrics.IncCreateTestSuite(err)

		if err != nil {
			return s.Error(c, http.StatusBadRequest, err)
		}

		c.Status(http.StatusCreated)
		return c.JSON(created)
	}
}

// UpdateTestSuiteHandler updates an existing TestSuite CR based on TestSuite content
func (s TestkubeAPI) UpdateTestSuiteHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		var request testkube.TestSuiteUpsertRequest
		err := c.BodyParser(&request)
		if err != nil {
			return s.Error(c, http.StatusBadRequest, err)
		}

		// we need to get resource first and load its metadata.ResourceVersion
		testSuite, err := s.TestsSuitesClient.Get(request.Name)
		if err != nil {
			return s.Error(c, http.StatusBadGateway, err)
		}

		// map TestSuite but load spec only to not override metadata.ResourceVersion
		testSuiteSpec := testsuitesmapper.MapTestSuiteUpsertRequestToTestCRD(request)
		testSuite.Spec = testSuiteSpec.Spec
		testSuite.Labels = request.Labels
		testSuite, err = s.TestsSuitesClient.Update(testSuite)

		s.Metrics.IncUpdateTestSuite(err)

		if err != nil {
			return s.Error(c, http.StatusBadGateway, err)
		}

		return c.JSON(testSuite)
	}
}

// GetTestSuiteHandler for getting TestSuite object
func (s TestkubeAPI) GetTestSuiteHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		name := c.Params("id")
		crTestSuite, err := s.TestsSuitesClient.Get(name)
		if err != nil {
			if errors.IsNotFound(err) {
				return s.Warn(c, http.StatusNotFound, err)
			}

			return s.Error(c, http.StatusBadGateway, err)
		}

		testSuite := testsuitesmapper.MapCRToAPI(*crTestSuite)
		if c.Accepts(mediaTypeJSON, mediaTypeYAML) == mediaTypeYAML {
			if testSuite.Description != "" {
				testSuite.Description = fmt.Sprintf("%q", testSuite.Description)
			}

			data, err := crd.GenerateYAML(crd.TemplateTestSuite, []testkube.TestSuite{testSuite})
			return s.getCRDs(c, data, err)
		}

		return c.JSON(testSuite)
	}
}

// GetTestSuiteWithExecutionHandler for getting TestSuite object with execution
func (s TestkubeAPI) GetTestSuiteWithExecutionHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		name := c.Params("id")
		crTestSuite, err := s.TestsSuitesClient.Get(name)
		if err != nil {
			if errors.IsNotFound(err) {
				return s.Warn(c, http.StatusNotFound, err)
			}

			return s.Error(c, http.StatusBadGateway, err)
		}

		testSuite := testsuitesmapper.MapCRToAPI(*crTestSuite)
		if c.Accepts(mediaTypeJSON, mediaTypeYAML) == mediaTypeYAML {
			if testSuite.Description != "" {
				testSuite.Description = fmt.Sprintf("%q", testSuite.Description)
			}

			data, err := crd.GenerateYAML(crd.TemplateTestSuite, []testkube.TestSuite{testSuite})
			return s.getCRDs(c, data, err)
		}

		ctx := c.Context()
		startExecution, startErr := s.TestExecutionResults.GetLatestByTestSuite(ctx, name, "starttime")
		if startErr != nil && startErr != mongo.ErrNoDocuments {
			return s.Error(c, http.StatusInternalServerError, startErr)
		}

		endExecution, endErr := s.TestExecutionResults.GetLatestByTestSuite(ctx, name, "endtime")
		if endErr != nil && endErr != mongo.ErrNoDocuments {
			return s.Error(c, http.StatusInternalServerError, endErr)
		}

		testSuiteWithExecution := testkube.TestSuiteWithExecution{
			TestSuite: &testSuite,
		}
		if startErr == nil && endErr == nil {
			if startExecution.StartTime.After(endExecution.EndTime) {
				testSuiteWithExecution.LatestExecution = &startExecution
			} else {
				testSuiteWithExecution.LatestExecution = &endExecution
			}
		} else if startErr == nil {
			testSuiteWithExecution.LatestExecution = &startExecution
		} else if endErr == nil {
			testSuiteWithExecution.LatestExecution = &endExecution
		}

		return c.JSON(testSuiteWithExecution)
	}
}

// DeleteTestSuiteHandler for deleting a TestSuite with id
func (s TestkubeAPI) DeleteTestSuiteHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		name := c.Params("id")
		err := s.TestsSuitesClient.Delete(name)
		if err != nil {
			if errors.IsNotFound(err) {
				return s.Warn(c, http.StatusNotFound, err)
			}

			return s.Error(c, http.StatusBadGateway, err)
		}

		// delete executions for test
		if err = s.ExecutionResults.DeleteByTestSuite(c.Context(), name); err != nil {
			return s.Error(c, http.StatusBadGateway, err)
		}

		// delete executions for test suite
		if err = s.TestExecutionResults.DeleteByTestSuite(c.Context(), name); err != nil {
			return s.Error(c, http.StatusBadGateway, err)
		}

		return c.SendStatus(http.StatusNoContent)
	}
}

// DeleteTestSuitesHandler for deleting all TestSuites
func (s TestkubeAPI) DeleteTestSuitesHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		var err error
		var testSuiteNames []string
		selector := c.Query("selector")
		if selector == "" {
			err = s.TestsSuitesClient.DeleteAll()
		} else {
			testSuiteList, err := s.TestsSuitesClient.List(selector)
			if err != nil {
				if !errors.IsNotFound(err) {
					return s.Error(c, http.StatusBadGateway, err)
				}
			} else {
				for _, item := range testSuiteList.Items {
					testSuiteNames = append(testSuiteNames, item.Name)
				}
			}

			err = s.TestsSuitesClient.DeleteByLabels(selector)
		}

		if err != nil {
			if errors.IsNotFound(err) {
				return s.Warn(c, http.StatusNotFound, err)
			}

			return s.Error(c, http.StatusBadGateway, err)
		}

		// delete all executions for tests
		if selector == "" {
			err = s.ExecutionResults.DeleteForAllTestSuites(c.Context())
		} else {
			err = s.ExecutionResults.DeleteByTestSuites(c.Context(), testSuiteNames)
		}

		if err != nil {
			return s.Error(c, http.StatusBadGateway, err)
		}

		// delete all executions for test suites
		if selector == "" {
			err = s.TestExecutionResults.DeleteAll(c.Context())
		} else {
			err = s.TestExecutionResults.DeleteByTestSuites(c.Context(), testSuiteNames)
		}

		if err != nil {
			return s.Error(c, http.StatusBadGateway, err)
		}

		return c.SendStatus(http.StatusNoContent)
	}
}

func (s TestkubeAPI) getFilteredTestSuitesList(c *fiber.Ctx) (*testsuitesv2.TestSuiteList, error) {
	crTestSuites, err := s.TestsSuitesClient.List(c.Query("selector"))
	if err != nil {
		return nil, err
	}

	search := c.Query("textSearch")
	if search != "" {
		// filter items array
		for i := len(crTestSuites.Items) - 1; i >= 0; i-- {
			if !strings.Contains(crTestSuites.Items[i].Name, search) {
				crTestSuites.Items = append(crTestSuites.Items[:i], crTestSuites.Items[i+1:]...)
			}
		}
	}

	return crTestSuites, nil
}

// ListTestSuitesHandler for getting list of all available TestSuites
func (s TestkubeAPI) ListTestSuitesHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		crTestSuites, err := s.getFilteredTestSuitesList(c)
		if err != nil {
			return s.Error(c, http.StatusInternalServerError, err)
		}

		testSuites := testsuitesmapper.MapTestSuiteListKubeToAPI(*crTestSuites)
		if c.Accepts(mediaTypeJSON, mediaTypeYAML) == mediaTypeYAML {
			for i := range testSuites {
				if testSuites[i].Description != "" {
					testSuites[i].Description = fmt.Sprintf("%q", testSuites[i].Description)
				}
			}

			data, err := crd.GenerateYAML(crd.TemplateTestSuite, testSuites)
			return s.getCRDs(c, data, err)
		}

		return c.JSON(testSuites)
	}
}

// TestSuiteMetricsHandler returns basic metrics for given testsuite
func (s TestkubeAPI) TestSuiteMetricsHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		const (
			DefaultLastDays = 0
			DefaultLimit    = 0
		)

		testSuiteName := c.Params("id")

		limit, err := strconv.Atoi(c.Query("limit", strconv.Itoa(DefaultLimit)))
		if err != nil {
			limit = DefaultLimit
		}

		last, err := strconv.Atoi(c.Query("last", strconv.Itoa(DefaultLastDays)))
		if err != nil {
			last = DefaultLastDays
		}

		metrics, err := s.TestExecutionResults.GetTestSuiteMetrics(context.Background(), testSuiteName, limit, last)
		if err != nil {
			return s.Error(c, http.StatusBadGateway, err)
		}

		return c.JSON(metrics)
	}
}

// getLatestTestSuiteExecutions return latest test suite executions either by starttime or endtine for tests
func (s TestkubeAPI) getLatestTestSuiteExecutions(ctx context.Context, testSuiteNames []string) (map[string]testkube.TestSuiteExecution, error) {
	executions, err := s.TestExecutionResults.GetLatestByTestSuites(ctx, testSuiteNames, "starttime")
	if err != nil && err != mongo.ErrNoDocuments {
		return nil, err
	}

	startExecutionMap := make(map[string]testkube.TestSuiteExecution, len(executions))
	for i := range executions {
		if executions[i].TestSuite == nil {
			continue
		}

		startExecutionMap[executions[i].TestSuite.Name] = executions[i]
	}

	executions, err = s.TestExecutionResults.GetLatestByTestSuites(ctx, testSuiteNames, "endtime")
	if err != nil && err != mongo.ErrNoDocuments {
		return nil, err
	}

	endExecutionMap := make(map[string]testkube.TestSuiteExecution, len(executions))
	for i := range executions {
		if executions[i].TestSuite == nil {
			continue
		}

		endExecutionMap[executions[i].TestSuite.Name] = executions[i]
	}

	executionMap := make(map[string]testkube.TestSuiteExecution)
	for _, testSuiteName := range testSuiteNames {
		startExecution, okStart := startExecutionMap[testSuiteName]
		endExecution, okEnd := endExecutionMap[testSuiteName]
		if !okStart && !okEnd {
			continue
		}

		if okStart && !okEnd {
			executionMap[testSuiteName] = startExecution
			continue
		}

		if !okStart && okEnd {
			executionMap[testSuiteName] = endExecution
			continue
		}

		if startExecution.StartTime.After(endExecution.EndTime) {
			executionMap[testSuiteName] = startExecution
		} else {
			executionMap[testSuiteName] = endExecution
		}
	}

	return executionMap, nil
}

// ListTestSuiteWithExecutionsHandler for getting list of all available TestSuite with latest executions
func (s TestkubeAPI) ListTestSuiteWithExecutionsHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		crTestSuites, err := s.getFilteredTestSuitesList(c)
		if err != nil {
			return s.Error(c, http.StatusInternalServerError, err)
		}

		testSuites := testsuitesmapper.MapTestSuiteListKubeToAPI(*crTestSuites)
		if c.Accepts(mediaTypeJSON, mediaTypeYAML) == mediaTypeYAML {
			for i := range testSuites {
				if testSuites[i].Description != "" {
					testSuites[i].Description = fmt.Sprintf("%q", testSuites[i].Description)
				}
			}

			data, err := crd.GenerateYAML(crd.TemplateTestSuite, testSuites)
			return s.getCRDs(c, data, err)
		}

		ctx := c.Context()
		testSuiteWithExecutions := make([]testkube.TestSuiteWithExecution, 0, len(testSuites))
		results := make([]testkube.TestSuiteWithExecution, 0, len(testSuites))
		testSuiteNames := make([]string, len(testSuites))
		for i := range testSuites {
			testSuiteNames[i] = testSuites[i].Name
		}

		executionMap, err := s.getLatestTestSuiteExecutions(ctx, testSuiteNames)
		if err != nil {
			return s.Error(c, http.StatusInternalServerError, err)
		}

		for i := range testSuites {
			if execution, ok := executionMap[testSuites[i].Name]; ok {
				results = append(results, testkube.TestSuiteWithExecution{
					TestSuite:       &testSuites[i],
					LatestExecution: &execution,
				})
			} else {
				testSuiteWithExecutions = append(testSuiteWithExecutions, testkube.TestSuiteWithExecution{
					TestSuite: &testSuites[i],
				})
			}
		}

		sort.Slice(testSuiteWithExecutions, func(i, j int) bool {
			return testSuiteWithExecutions[i].TestSuite.Created.After(testSuiteWithExecutions[j].TestSuite.Created)
		})

		sort.Slice(results, func(i, j int) bool {
			iTime := results[i].LatestExecution.EndTime
			if results[i].LatestExecution.StartTime.After(results[i].LatestExecution.EndTime) {
				iTime = results[i].LatestExecution.StartTime
			}

			jTime := results[j].LatestExecution.EndTime
			if results[j].LatestExecution.StartTime.After(results[j].LatestExecution.EndTime) {
				jTime = results[j].LatestExecution.StartTime
			}

			return iTime.After(jTime)
		})

		testSuiteWithExecutions = append(testSuiteWithExecutions, results...)
		status := c.Query("status")
		if status != "" {
			statusList, err := testkube.ParseTestSuiteExecutionStatusList(status, ",")
			if err != nil {
				return s.Error(c, http.StatusBadRequest, fmt.Errorf("test suite execution status filter invalid: %w", err))
			}

			statusMap := statusList.ToMap()
			// filter items array
			for i := len(testSuiteWithExecutions) - 1; i >= 0; i-- {
				if testSuiteWithExecutions[i].LatestExecution != nil && testSuiteWithExecutions[i].LatestExecution.Status != nil {
					if _, ok := statusMap[*testSuiteWithExecutions[i].LatestExecution.Status]; ok {
						continue
					}
				}

				testSuiteWithExecutions = append(testSuiteWithExecutions[:i], testSuiteWithExecutions[i+1:]...)
			}
		}

		return c.JSON(testSuiteWithExecutions)
	}
}

func (s TestkubeAPI) ExecuteTestSuitesHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		ctx := context.Background()

		var request testkube.TestSuiteExecutionRequest
		err := c.BodyParser(&request)
		if err != nil {
			return s.Error(c, http.StatusBadRequest, fmt.Errorf("test execution request body invalid: %w", err))
		}

		name := c.Params("id")
		selector := c.Query("selector")
		s.Log.Debugw("getting test suite", "name", name, "selector", selector)

		var testSuites []testsuitesv2.TestSuite
		if name != "" {
			testSuite, err := s.TestsSuitesClient.Get(name)
			if err != nil {
				if errors.IsNotFound(err) {
					return s.Warn(c, http.StatusNotFound, err)
				}

				return s.Error(c, http.StatusBadGateway, err)
			}

			testSuites = append(testSuites, *testSuite)
		} else {
			testSuiteList, err := s.TestsSuitesClient.List(selector)
			if err != nil {
				return s.Error(c, http.StatusInternalServerError, fmt.Errorf("can't get test suites: %w", err))
			}

			testSuites = append(testSuites, testSuiteList.Items...)
		}

		var results []testkube.TestSuiteExecution
		if len(testSuites) != 0 {
			concurrencyLevel, err := strconv.Atoi(c.Query("concurrency", defaultConcurrencyLevel))
			if err != nil {
				return s.Error(c, http.StatusBadRequest, fmt.Errorf("can't detect concurrency level: %w", err))
			}

			workerpoolService := workerpool.New[testkube.TestSuite, testkube.TestSuiteExecutionRequest, testkube.TestSuiteExecution](concurrencyLevel)

			go workerpoolService.SendRequests(s.prepareTestSuiteRequests(testSuites, request))
			go workerpoolService.Run(ctx)

			for r := range workerpoolService.GetResponses() {
				results = append(results, r.Result)
			}
		}

		s.Log.Debugw("executing test", "name", name, "selector", selector)
		if name != "" && len(results) != 0 {
			if results[0].IsFailed() {
				return s.Error(c, http.StatusInternalServerError, fmt.Errorf("Test suite failed %v", name))
			}

			c.Status(http.StatusCreated)
			return c.JSON(results[0])
		}

		c.Status(http.StatusCreated)
		return c.JSON(results)
	}
}

func (s TestkubeAPI) prepareTestSuiteRequests(work []testsuitesv2.TestSuite, request testkube.TestSuiteExecutionRequest) []workerpool.Request[
	testkube.TestSuite, testkube.TestSuiteExecutionRequest, testkube.TestSuiteExecution] {
	requests := make([]workerpool.Request[testkube.TestSuite, testkube.TestSuiteExecutionRequest, testkube.TestSuiteExecution], len(work))
	for i := range work {
		requests[i] = workerpool.Request[testkube.TestSuite, testkube.TestSuiteExecutionRequest, testkube.TestSuiteExecution]{
			Object:  testsuitesmapper.MapCRToAPI(work[i]),
			Options: request,
			ExecFn:  s.executeTestSuite,
		}
	}
	return requests
}

func (s TestkubeAPI) ListTestSuiteExecutionsHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		ctx := context.Background()
		filter := getExecutionsFilterFromRequest(c)

		executionsTotals, err := s.TestExecutionResults.GetExecutionsTotals(ctx, filter)
		if err != nil {
			return s.Error(c, http.StatusBadRequest, err)
		}
		allExecutionsTotals, err := s.TestExecutionResults.GetExecutionsTotals(ctx)
		if err != nil {
			return s.Error(c, http.StatusBadRequest, err)
		}

		executions, err := s.TestExecutionResults.GetExecutions(ctx, filter)
		if err != nil {
			return s.Error(c, http.StatusBadRequest, err)
		}

		return c.JSON(testkube.TestSuiteExecutionsResult{
			Totals:   &allExecutionsTotals,
			Filtered: &executionsTotals,
			Results:  testsuitesmapper.MapToTestExecutionSummary(executions),
		})
	}
}

func (s TestkubeAPI) GetTestSuiteExecutionHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		ctx := context.Background()
		id := c.Params("executionID")
		execution, err := s.TestExecutionResults.Get(ctx, id)
		if err == mongo.ErrNoDocuments {
			execution, err = s.TestExecutionResults.GetByName(ctx, id)
			if err == mongo.ErrNoDocuments {
				return s.Error(c, http.StatusNotFound, fmt.Errorf("test with execution id/name %s not found", id))
			}
		}

		execution.Duration = types.FormatDuration(execution.Duration)

		secretMap := make(map[string]string)
		if execution.SecretUUID != "" && execution.TestSuite != nil {
			secretMap, err = s.TestsSuitesClient.GetSecretTestSuiteVars(execution.TestSuite.Name, execution.SecretUUID)
			if err != nil {
				return s.Error(c, http.StatusInternalServerError, err)
			}
		}

		for key, value := range secretMap {
			if variable, ok := execution.Variables[key]; ok {
				variable.Value = string(value)
				variable.SecretRef = nil
				execution.Variables[key] = variable
			}
		}

		return c.JSON(execution)
	}
}

// ListTestSuiteTestsHandler for getting list of all available Tests for TestSuites
func (s TestkubeAPI) ListTestSuiteTestsHandler() fiber.Handler {
	return func(c *fiber.Ctx) error {
		name := c.Params("id")
		crTestSuite, err := s.TestsSuitesClient.Get(name)
		if err != nil {
			if errors.IsNotFound(err) {
				return s.Warn(c, http.StatusNotFound, err)
			}

			return s.Error(c, http.StatusBadGateway, err)
		}

		testSuite := testsuitesmapper.MapCRToAPI(*crTestSuite)
		crTests, err := s.TestsClient.ListByNames(testSuite.GetTestNames())
		if err != nil {
			if errors.IsNotFound(err) {
				return s.Warn(c, http.StatusNotFound, err)
			}

			return s.Error(c, http.StatusBadGateway, err)
		}

		return c.JSON(testsmapper.MapTestArrayKubeToAPI(crTests))
	}
}

func (s TestkubeAPI) executeTestSuite(ctx context.Context, testSuite testkube.TestSuite, request testkube.TestSuiteExecutionRequest) (
	testsuiteExecution testkube.TestSuiteExecution, err error) {
	s.Log.Debugw("Got test to execute", "test", testSuite)
	secretUUID, err := s.TestsSuitesClient.GetCurrentSecretUUID(testSuite.Name)
	if err != nil {
		return testsuiteExecution, err
	}

	request.Number = s.getNextExecutionNumber("ts-" + testSuite.Name)
	request.Name = fmt.Sprintf("ts-%s-%d", testSuite.Name, request.Number)

	request.SecretUUID = secretUUID
	if testSuite.ExecutionRequest != nil {
		if request.HttpProxy == "" && testSuite.ExecutionRequest.HttpProxy != "" {
			request.HttpProxy = testSuite.ExecutionRequest.HttpProxy
		}

		if request.HttpsProxy == "" && testSuite.ExecutionRequest.HttpsProxy != "" {
			request.HttpsProxy = testSuite.ExecutionRequest.HttpsProxy
		}
	}

	testsuiteExecution = testkube.NewStartedTestSuiteExecution(testSuite, request)
	err = s.TestExecutionResults.Insert(ctx, testsuiteExecution)
	if err != nil {
		s.Log.Infow("Inserting test execution", "error", err)
	}

	var wg sync.WaitGroup
	wg.Add(1)
	go func(testsuiteExecution *testkube.TestSuiteExecution, request testkube.TestSuiteExecutionRequest) {
		defer func(testExecution *testkube.TestSuiteExecution) {
			duration := testExecution.CalculateDuration()
			testExecution.EndTime = time.Now()
			testExecution.Duration = duration.String()

			err = s.TestExecutionResults.EndExecution(ctx, testExecution.Id, testExecution.EndTime, duration)
			if err != nil {
				s.Log.Errorw("error setting end time", "error", err.Error())
			}

			wg.Done()
		}(testsuiteExecution)

		hasFailedSteps := false
		cancellSteps := false
		for i := range testsuiteExecution.StepResults {
			if cancellSteps {
				testsuiteExecution.StepResults[i].Execution.ExecutionResult.Cancel()
				continue
			}

			// start execution of given step
			testsuiteExecution.StepResults[i].Execution.ExecutionResult.InProgress()
			err = s.TestExecutionResults.Update(ctx, *testsuiteExecution)
			if err != nil {
				s.Log.Infow("Updating test execution", "error", err)
			}

			s.executeTestStep(ctx, *testsuiteExecution, request, &testsuiteExecution.StepResults[i])

			err := s.TestExecutionResults.Update(ctx, *testsuiteExecution)
			if err != nil {
				hasFailedSteps = true
				s.Log.Errorw("saving test suite execution results error", "error", err)
				continue
			}

			if testsuiteExecution.StepResults[i].IsFailed() {
				hasFailedSteps = true
				if testsuiteExecution.StepResults[i].Step.StopTestOnFailure {
					cancellSteps = true
					continue
				}
			}
		}

		testsuiteExecution.Status = testkube.TestSuiteExecutionStatusPassed
		if hasFailedSteps {
			testsuiteExecution.Status = testkube.TestSuiteExecutionStatusFailed
		}

		s.Metrics.IncExecuteTestSuite(*testsuiteExecution)

		err := s.TestExecutionResults.Update(ctx, *testsuiteExecution)
		if err != nil {
			s.Log.Errorw("saving final test suite execution result error", "error", err)
		}

	}(&testsuiteExecution, request)

	// wait for sync test suite execution
	if request.Sync {
		wg.Wait()
	}

	return testsuiteExecution, nil
}

func (s TestkubeAPI) executeTestStep(ctx context.Context, testsuiteExecution testkube.TestSuiteExecution,
	request testkube.TestSuiteExecutionRequest, result *testkube.TestSuiteStepExecutionResult) {

	var testSuiteName string
	if testsuiteExecution.TestSuite != nil {
		testSuiteName = testsuiteExecution.TestSuite.Name
	}

	step := result.Step

	l := s.Log.With("type", step.Type(), "testSuiteName", testSuiteName, "name", step.FullName())

	switch step.Type() {

	case testkube.TestSuiteStepTypeExecuteTest:
		executeTestStep := step.Execute
		request := testkube.ExecutionRequest{
			Name:                fmt.Sprintf("%s-%s", testSuiteName, executeTestStep.Name),
			TestSuiteName:       testSuiteName,
			Namespace:           executeTestStep.Namespace,
			Variables:           testsuiteExecution.Variables,
			TestSuiteSecretUUID: request.SecretUUID,
			Sync:                true,
			HttpProxy:           request.HttpProxy,
			HttpsProxy:          request.HttpsProxy,
			ExecutionLabels:     request.ExecutionLabels,
		}

		l.Info("executing test", "variables", testsuiteExecution.Variables, "request", request)
		execution, err := s.executeTest(ctx, testkube.Test{Name: executeTestStep.Name}, request)
		if err != nil {
			result.Err(err)
			return
		}
		result.Execution = &execution

	case testkube.TestSuiteStepTypeDelay:
		l.Debug("delaying execution")
		time.Sleep(time.Millisecond * time.Duration(step.Delay.Duration))
		result.Execution.ExecutionResult.Success()

	default:
		result.Err(fmt.Errorf("can't find handler for execution step type: '%v'", step.Type()))
	}
}

func getExecutionsFilterFromRequest(c *fiber.Ctx) testresult.Filter {

	filter := testresult.NewExecutionsFilter()
	name := c.Query("id", "")
	if name != "" {
		filter = filter.WithName(name)
	}

	textSearch := c.Query("textSearch", "")
	if textSearch != "" {
		filter = filter.WithTextSearch(textSearch)
	}

	page, err := strconv.Atoi(c.Query("page", ""))
	if err == nil {
		filter = filter.WithPage(page)
	}

	pageSize, err := strconv.Atoi(c.Query("pageSize", ""))
	if err == nil && pageSize != 0 {
		filter = filter.WithPageSize(pageSize)
	}

	status := c.Query("status", "")
	if status != "" {
		filter = filter.WithStatus(status)
	}

	last, err := strconv.Atoi(c.Query("last", "0"))
	if err == nil && last != 0 {
		filter = filter.WithLastNDays(last)
	}

	dFilter := datefilter.NewDateFilter(c.Query("startDate", ""), c.Query("endDate", ""))
	if dFilter.IsStartValid {
		filter = filter.WithStartDate(dFilter.Start)
	}

	if dFilter.IsEndValid {
		filter = filter.WithEndDate(dFilter.End)
	}

	selector := c.Query("selector")
	if selector != "" {
		filter = filter.WithSelector(selector)
	}

	return filter
}
