"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[9533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=s,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),s=(n(67294),n(3905));const r={},l="Test Workflows",o={unversionedId:"articles/test-workflows",id:"articles/test-workflows",title:"Test Workflows",description:"Introduction",source:"@site/docs/articles/test-workflows.md",sourceDirName:"articles",slug:"/articles/test-workflows",permalink:"/articles/test-workflows",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/test-workflows.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation FAQ",permalink:"/articles/install/faq"},next:{title:"Creating Test Workflows",permalink:"/articles/test-workflows-creating"}},i={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Test Workflow Structure",id:"test-workflow-structure",level:2},{value:"Example - Test Workflow for Postman",id:"example---test-workflow-for-postman",level:2},{value:"metadata",id:"metadata",level:2},{value:"name",id:"name",level:3},{value:"labels",id:"labels",level:3},{value:"content",id:"content",level:2},{value:"git",id:"git",level:3},{value:"files",id:"files",level:3},{value:"events",id:"events",level:2},{value:"cronjob",id:"cronjob",level:3},{value:"steps",id:"steps",level:2},{value:"sub-steps",id:"sub-steps",level:3},{value:"run",id:"run",level:3},{value:"command",id:"command",level:4},{value:"args",id:"args",level:4},{value:"command + args",id:"command--args",level:4},{value:"ENVs",id:"envs",level:4},{value:"shell",id:"shell",level:4},{value:"container",id:"container",level:2},{value:"image",id:"image",level:3},{value:"resources",id:"resources",level:3},{value:"resource requests",id:"resource-requests",level:4},{value:"resource limits",id:"resource-limits",level:4},{value:"workingDir",id:"workingdir",level:2},{value:"artifacts",id:"artifacts",level:2},{value:"condition: always",id:"condition-always",level:3},{value:"Example - Cypress Project",id:"example---cypress-project",level:3},{value:"<code>template</code> - Executing from a Test Workflow Template",id:"template---executing-from-a-test-workflow-template",level:2},{value:"<code>status</code> - Getting status of latest test workflow execution",id:"status---getting-status-of-latest-test-workflow-execution",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"test-workflows"},"Test Workflows"),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"Test Workflows are an easy and extremely powerful way to define and run your tests in\nyour Kubernetes clusters. Thanks to their flexibility, Test Workflows solve many of the\nproblems that can occur with standard Tests, including:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Running Tests using different testing tool versions and dependencies."),(0,s.kt)("li",{parentName:"ul"},"Defining multiple steps for the execution of the tests."),(0,s.kt)("li",{parentName:"ul"},"Having more control over how your tests are executed, including resource consumption and setup/tearDown processes."),(0,s.kt)("li",{parentName:"ul"},"Being able to configure tool-specific commands and arguments.")),(0,s.kt)("h2",{id:"test-workflow-structure"},"Test Workflow Structure"),(0,s.kt)("p",null,"Test Workflows are defined using a specific workflow language wrapped in a CRD. The high-level structure\nof a Test Workflow is as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="testworkflows-outline.yaml"',title:'"testworkflows-outline.yaml"'},"apiVersion: testworkflows.testkube.io/v1\nkind: TestWorkflow\nmetadata:\n  name: ... # name of the Test Workflow\nspec:\n  content: # content specifies where to find the actual test definition(s) to run \n    git: # checking out from git repository - see below\n      ...\n    files: # defines files to create containing the actual tests - see below\n      ...\n  container: # settings applied to all images used in the workflow, can be overridden\n    resources: # resource settings\n      requests: # resource requests\n        ...\n      limits: # resource limits\n        ...\n    workingDir: # default workingDir in the containers\n    env: # global env variables\n      ...\n  steps: # steps that will be executed by this Test Workflow, can be nested\n  - name: ... # name of step\n    run: # action to perform for this step - see below for possible values\n      ...\n")),(0,s.kt)("p",null,"The different properties are described with examples and in more detail below."),(0,s.kt)("h2",{id:"example---test-workflow-for-postman"},"Example - Test Workflow for Postman"),(0,s.kt)("p",null,"Example Test Workflow for running Postman collection from Testkube repository: ",(0,s.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/kubeshop/testkube/develop/test/postman/executor-tests/postman-executor-smoke-without-envs.postman_collection.json"},"/test/postman/executor-tests/postman-executor-smoke-without-envs.postman_collection.json"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="postman-example.yaml"',title:'"postman-example.yaml"'},"apiVersion: testworkflows.testkube.io/v1\nkind: TestWorkflow\nmetadata:\n  name: postman-workflow-example # name of the Test Workflow\nspec:\n  content:\n    git: # checking out from git repository\n      uri: https://github.com/kubeshop/testkube\n      revision: main\n      paths:\n      - test/postman/executor-tests/postman-executor-smoke-without-envs.postman_collection.json\n  container: # container settings\n    resources: # resource settings (optional)\n      requests: # resource requests\n        cpu: 256m\n        memory: 128Mi\n    workingDir: /data/repo/test/postman/executor-tests # default workingDir\n  steps: # steps that will be executed by this Test Workflow\n  - name: Run test\n    run:\n      image: postman/newman:6-alpine # image used while running specific step\n      args: # args passed to the container\n      - run\n      - postman-executor-smoke-without-envs.postman_collection.json\n")),(0,s.kt)("h2",{id:"metadata"},"metadata"),(0,s.kt)("h3",{id:"name"},"name"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"metadata.name")," is mandatory - it's a name of the Test Workflow (for example ",(0,s.kt)("inlineCode",{parentName:"p"},"postman-workflow-example"),")"),(0,s.kt)("h3",{id:"labels"},"labels"),(0,s.kt)("p",null,"Labels can be set to allow easier filtering of Test Workflows."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  name: example-workflow\n  labels:\n    example: label\n    another: one\n    one: more\n")),(0,s.kt)("h2",{id:"content"},"content"),(0,s.kt)("h3",{id:"git"},"git"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"spec.content.git")," allows checking out from the Git repository:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    git:\n      uri: https://github.com/kubeshop/testkube # repository URI\n      revision: main # branch/revision\n      paths:\n      - test/cypress/executor-tests/cypress-13 # path to check out\n")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"path")," can be a directory, or a single file"),(0,s.kt)("h3",{id:"files"},"files"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"spec.content.files")," allow creating specific files from strings."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  content:\n    files:\n    - path: k6.js # created in working dir\n        content: |\n        import http from 'k6/http';\n        export const options = {\n            thresholds: {\n            http_req_failed: ['rate<0.01'],\n            }\n        };\n        export default function () {\n            http.get('https://testkube.io/');\n        }\n    - path: /example-file.js # created in root directory\n        content: another file contents\n    steps:\n    - name: Run test\n    shell: k6 run k6.js --iterations 100\n    container:\n        image: grafana/k6:latest\n")),(0,s.kt)("h2",{id:"events"},"events"),(0,s.kt)("h3",{id:"cronjob"},"cronjob"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"spec.events.cronjob")," allows to run the workflow on specified schedule(s) :"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  events:\n  - cronjob:\n      cron: "*/20 * * * *"\n      labels:\n        key1: value1\n      annotations:\n        key2: value2\n  - cronjob:\n      cron: "*/5 * * * *"\n      labels:\n        key3: value3\n      annotations:\n        key4: value4\n')),(0,s.kt)("h2",{id:"steps"},"steps"),(0,s.kt)("p",null,"Steps are the main building blocks in Test Workflows. They describe actions that should be executed in specific order."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ...\n  steps:\n  - name: Example step 1\n    ...\n  - name: Example step 2\n    ...\n  - name: Example step 3\n    ...\n")),(0,s.kt)("h3",{id:"sub-steps"},"sub-steps"),(0,s.kt)("p",null,"Steps can also be nested:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  steps:\n  - name: Step 1\n    ...\n    steps:\n    - name: Sub-step 1-1\n      ...\n    - name: Sub-step 1-2\n      ...\n  - name: Step 2\n    ...\n    steps:\n    - name: Sub-step 2-1\n      ...\n    - name: Sub-step 2-2\n      ...\n")),(0,s.kt)("h3",{id:"run"},"run"),(0,s.kt)("h4",{id:"command"},"command"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"command")," allows to set the command, or override the default one:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  steps:\n  - name: Run tests\n    run:\n      image: gradle:8.5.0-jdk11\n      command:\n      - gradle\n")),(0,s.kt)("h4",{id:"args"},"args"),(0,s.kt)("p",null,"Arguments can be passed to container using ",(0,s.kt)("inlineCode",{parentName:"p"},"args"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  steps:\n  - name: Run tests\n    run:\n      image: cypress/included:13.6.4\n      args:\n      - --env\n      - NON_CYPRESS_ENV=NON_CYPRESS_ENV_value\n      - --config\n      - video=true\n")),(0,s.kt)("h4",{id:"command--args"},"command + args"),(0,s.kt)("p",null,"Command can be combined with args:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'  - name: Run tests\n    run:\n      image: mcr.microsoft.com/playwright:v1.32.3-focal\n      command:\n      - "npx"\n      args:\n      - "--yes"\n      - "playwright@1.32.3"\n      - "test"\n')),(0,s.kt)("p",null,"Args can be also set directly with command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'  - name: Run tests\n    run:\n      image: mcr.microsoft.com/playwright:v1.32.3-focal\n      command:\n      - "npx"\n      - "--yes"\n      - "playwright@1.32.3"\n      - "test"\n')),(0,s.kt)("h4",{id:"envs"},"ENVs"),(0,s.kt)("p",null,"ENVs can be defined with ",(0,s.kt)("inlineCode",{parentName:"p"},"env")," keyword on the step level:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'steps:\n  - name: Run tests\n    run:\n      ...\n      env:\n      - name: EXAMPLE_ENV_NAME\n        value: "example-env-value"\n')),(0,s.kt)("p",null,'or "globally":'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'spec:\n  container:\n    ...\n    env:\n    - name: EXAMPLE_ENV_NAME\n      value: "example-env-value"\n')),(0,s.kt)("h4",{id:"shell"},"shell"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"shell")," provides an ability to run a command, or multiple commands inside the shell."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  - shell: command1 && command2\n")),(0,s.kt)("p",null,"The same can be achieved with command and args, but ",(0,s.kt)("inlineCode",{parentName:"p"},"shell")," may be more convenient."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  - shell: mkdir ~/some-directory\n")),(0,s.kt)("p",null,"is an equivalent of:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  - run:\n      comand: [/bin/sh, -c]\n      args:\n        - mkdir\n        - ~/some-directory\n")),(0,s.kt)("h2",{id:"container"},"container"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"container")," defines container-related settings."),(0,s.kt)("h3",{id:"image"},"image"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"container.image")," defines an image which will be used for executing steps."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n  - name: Run tests\n    shell: jmeter -n -t jmeter-executor-smoke.jmx -j /data/artifacts/jmeter.log -o /data/artifacts/report -l /data/artifacts/jtl-report.jtl -e\n    container:\n      image: justb4/jmeter:5.5\n")),(0,s.kt)("h3",{id:"resources"},"resources"),(0,s.kt)("p",null,"Resources can be configured for a specific container."),(0,s.kt)("h4",{id:"resource-requests"},"resource requests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ...\n  container:\n    resources:\n      requests:\n        cpu: 2\n        memory: 2Gi\n")),(0,s.kt)("h4",{id:"resource-limits"},"resource limits"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ...\n  container:\n    resources:\n      limits:\n        cpu: 4\n        memory: 4Gi\n")),(0,s.kt)("h2",{id:"workingdir"},"workingDir"),(0,s.kt)("p",null,"By default, everything will be executed in the context of ",(0,s.kt)("inlineCode",{parentName:"p"},"workingDir")," from specific container."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"workingDir")," can be set globally:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  ...\n  container:\n    workingDir: /data/repo/test/cypress/executor-tests/cypress-13\n")),(0,s.kt)("p",null,"Or, for a specific step:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n- name: Saving artifacts\n  workingDir: /data/repo/test/cypress/executor-tests/cypress-13/cypress/videos\n")),(0,s.kt)("p",null,"Or on the Step level:"),(0,s.kt)("h2",{id:"artifacts"},"artifacts"),(0,s.kt)("p",null,"Files directly in ",(0,s.kt)("inlineCode",{parentName:"p"},"workingDir")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Saving artifacts\n  workingDir: /data/artifacts\n  artifacts:\n    paths:\n    - '*'\n")),(0,s.kt)("p",null,"Files in directories inside ",(0,s.kt)("inlineCode",{parentName:"p"},"workingDir")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Saving artifacts\n  workingDir: /data/artifacts\n  artifacts:\n    paths:\n    - '**/*'\n")),(0,s.kt)("p",null,"Artifacts can also be configured for project directories (inside ",(0,s.kt)("inlineCode",{parentName:"p"},"/data/repo"),"):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Saving artifacts\n  workingDir: /data/repo/test/cypress/executor-tests/cypress-13/cypress/videos\n  artifacts:\n    paths:\n    - '**/*'\n")),(0,s.kt)("h3",{id:"condition-always"},"condition: always"),(0,s.kt)("p",null,"It is common to save artifacts in case of failure. By default the ",(0,s.kt)("inlineCode",{parentName:"p"},"artifacts")," have ",(0,s.kt)("inlineCode",{parentName:"p"},"condition: always")," set if added directly on a step. They will be always scraped - even if the step fails:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Example step with artifacts\n  shell: example-command\n  artifacts:\n    paths:\n    - '**/*'\n")),(0,s.kt)("p",null,"If artifacts are saved in a separate step, or in a sub-step, they won't be scraped by default in the event of an earlier failure. In that case, setting ",(0,s.kt)("inlineCode",{parentName:"p"},"condition: always")," specifically would be needed."),(0,s.kt)("p",null,"Separate step:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Step 1\n  shell: example-command\n- name: Step 2 - Saving artifacts\n  condition: always\n  artifacts:\n    paths:\n    - '**/*'\n")),(0,s.kt)("p",null,"Sub-step:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: Step 1\n  shell: example-command\n  steps:\n  - name: Sub-step - Saving artifacts\n    condition: always\n    artifacts:\n      paths:\n      - '**/*'\n")),(0,s.kt)("h3",{id:"example---cypress-project"},"Example - Cypress Project"),(0,s.kt)("p",null,"Example Cypress project with artifacts (video recordings):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: testworkflows.testkube.io/v1\nkind: TestWorkflow\nmetadata:\n  name: cypress-example-video-artifact\n  labels:\n    core-tests: workflows\nspec:\n  content:\n    git:\n      uri: https://github.com/kubeshop/testkube\n      revision: main\n      paths:\n      - test/cypress/executor-tests/cypress-13\n  container:\n    resources:\n      requests:\n        cpu: 2\n        memory: 2Gi\n    workingDir: /data/repo/test/cypress/executor-tests/cypress-13\n  steps:\n  - name: Run tests\n    run:\n      image: cypress/included:13.6.4\n      args:\n      - --env\n      - NON_CYPRESS_ENV=NON_CYPRESS_ENV_value\n      - --config\n      - video=true\n      env:\n      - name: CYPRESS_CUSTOM_ENV\n        value: CYPRESS_CUSTOM_ENV_value\n    steps:\n    - name: Saving artifacts\n      workingDir: /data/repo/test/cypress/executor-tests/cypress-13/cypress/videos\n      artifacts:\n        paths:\n        - '**/*'\n")),(0,s.kt)("h2",{id:"template---executing-from-a-test-workflow-template"},(0,s.kt)("inlineCode",{parentName:"h2"},"template")," - Executing from a Test Workflow Template"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"template")," allows executing from - ",(0,s.kt)("a",{parentName:"p",href:"/articles/test-workflow-templates"},"Test Workflow Template"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'  steps:\n  - name: Run from template\n    ...\n    template:\n      name: example-template/cypress\n      config:\n        version: 13.5.0\n        params: "--env NON_CYPRESS_ENV=NON_CYPRESS_ENV_value --config \'{\\"screenshotsFolder\\":\\"/data/artifacts/screenshots\\",\\"videosFolder\\":\\"/data/artifacts/videos\\"}\'"\n')),(0,s.kt)("h2",{id:"status---getting-status-of-latest-test-workflow-execution"},(0,s.kt)("inlineCode",{parentName:"h2"},"status")," - Getting status of latest test workflow execution"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl describe testworkflow k6-workflow -n testkube\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"Name:         k6-workflow\nNamespace:    testkube\nLabels:       core-tests=workflows\nAnnotations:  <none>\nAPI Version:  testworkflows.testkube.io/v1\nKind:         TestWorkflow\nMetadata:\n  Creation Timestamp:  2024-05-13T17:28:05Z\n  Generation:          1\n  Resource Version:    1077632\n  UID:                 ec1b58af-6226-4100-8b3c-d15f855f5a89\nSpec:\n  Container:\n    Resources:\n      Requests:\n        Cpu:      128m\n        Memory:   128Mi\n    Working Dir:  /data/repo/test/k6/executor-tests\n  Content:\n    Git:\n      Paths:\n        test/k6/executor-tests/k6-smoke-test.js\n      Revision:  main\n      Uri:       https://github.com/kubeshop/testkube\n  Steps:\n    Name:  Run test\n    Run:\n      Args:\n        run\n        k6-smoke-test.js\n        -e\n        K6_ENV_FROM_PARAM=K6_ENV_FROM_PARAM_value\n      Env:\n        Name:   K6_SYSTEM_ENV\n        Value:  K6_SYSTEM_ENV_value\n      Image:    grafana/k6:0.43.1\nStatus:\n  Latest Execution:\n    Id:      6659fd8455d94f735273fa95\n    Name:    k6-workflow-15\n    Number:  15\n    Result:\n      Duration:           7.824s\n      Duration Ms:        7824\n      Finished At:        2024-05-31T16:40:44Z\n      Paused Ms:          0\n      Predicted Status:   passed\n      Queued At:          2024-05-31T16:40:36Z\n      Started At:         2024-05-31T16:40:36Z\n      Status:             passed\n      Total Duration:     7.824s\n      Total Duration Ms:  7824\n    Scheduled At:         2024-05-31T16:40:36Z\n    Status At:            2024-05-31T16:40:44Z\n    Workflow:\n      Labels:\n        Core - Tests:  workflows\n      Name:            k6-workflow\n      Namespace:       testkube\n")))}u.isMDXComponent=!0}}]);