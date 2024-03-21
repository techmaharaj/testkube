"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[544],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||r;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={},l="Helm Chart Installation and Usage Guide",s={unversionedId:"testkube-enterprise/articles/usage-guide",id:"testkube-enterprise/articles/usage-guide",title:"Helm Chart Installation and Usage Guide",description:"- Testkube Enterprise Helm Chart Installation and Usage Guide",source:"@site/docs/testkube-enterprise/articles/usage-guide.md",sourceDirName:"testkube-enterprise/articles",slug:"/testkube-enterprise/articles/usage-guide",permalink:"/testkube-enterprise/articles/usage-guide",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/testkube-enterprise/articles/usage-guide.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testkube Enterprise",permalink:"/testkube-enterprise/articles/testkube-enterprise"},next:{title:"Configure Identity Providers",permalink:"/testkube-enterprise/articles/auth"}},o={},u=[{value:"Installation of Testkube Enterprise and an Agent in the same cluster",id:"installation-of-testkube-enterprise-and-an-agent-in-the-same-cluster",level:2},{value:"Installation of Testkube Enterprise and an Agent in multiple clusters",id:"installation-of-testkube-enterprise-and-an-agent-in-multiple-clusters",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Docker Images",id:"docker-images",level:3},{value:"License",id:"license",level:3},{value:"Online License",id:"online-license",level:4},{value:"Offline License",id:"offline-license",level:4},{value:"Ingress",id:"ingress",level:3},{value:"Configuration",id:"configuration-1",level:4},{value:"Domain",id:"domain",level:4},{value:"TLS",id:"tls",level:4},{value:"Custom certificates",id:"custom-certificates",level:4},{value:"Auth",id:"auth",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Invitations",id:"invitations",level:3},{value:"Invitations Via Email",id:"invitations-via-email",level:4},{value:"Auto-accept Invitations",id:"auto-accept-invitations",level:4},{value:"Bring Your Own Infra",id:"bring-your-own-infra",level:2},{value:"MongoDB",id:"mongodb",level:3},{value:"NATS",id:"nats",level:3},{value:"MinIO",id:"minio",level:3},{value:"Dex",id:"dex",level:3},{value:"Installation",id:"installation",level:2},{value:"Production Setup",id:"production-setup",level:3},{value:"FAQ",id:"faq",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"helm-chart-installation-and-usage-guide"},"Helm Chart Installation and Usage Guide"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#testkube-enterprise-helm-chart-installation-and-usage-guide"},"Testkube Enterprise Helm Chart Installation and Usage Guide"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation-of-testkube-enterprise-and-an-agent-in-the-same-cluster"},"Installation of Testkube Enterprise and an Agent in the same cluster")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation-of-testkube-enterprise-and-an-agent-in-multiple-clusters"},"Installation of Testkube Enterprise and an Agent in multiple clusters")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prerequisites"},"Prerequisites")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration"},"Configuration"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#docker-images"},"Docker images")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#license"},"License"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#online-license"},"Online License")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#offline-license"},"Offline License")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ingress"},"Ingress"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#configuration-1"},"Configuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#domain"},"Domain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tls"},"TLS")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#auth"},"Auth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#metrics"},"Metrics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#invitations"},"Invitations"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#invitations-via-email"},"Invitations via email")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#auto-accept-invitations"},"Auto-accept invitations")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bring-your-own-infra"},"Bring Your Own Infra"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mongodb"},"MongoDB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nats"},"NATS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#minio"},"MinIO")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dex"},"Dex")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#production-setup"},"Production setup")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#faq"},"FAQ"))))),(0,i.kt)("p",null,"Welcome to the Testkube Enterprise Helm chart installation and usage guide.\nThis comprehensive guide provides step-by-step instructions for installing and utilizing the Testkube Enterprise Helm chart.\nTestkube Enterprise is a cutting-edge Kubernetes-native testing platform designed to optimize your testing and quality assurance processes with enterprise-grade features."),(0,i.kt)("h2",{id:"installation-of-testkube-enterprise-and-an-agent-in-the-same-cluster"},"Installation of Testkube Enterprise and an Agent in the same cluster"),(0,i.kt)("p",null,"It is possible to deploy an instance of Testkube Enteprise and connect an Agent to it in the same k8s cluster without exposing endpoints to the outside world.\nThis way gives you a more customizable set-up and allows you to have a working environment in just a few minutes. It can be deployed locally or in any other k8s cluster."),(0,i.kt)("p",null,"For this you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"kubectl"),(0,i.kt)("li",{parentName:"ul"},"connection to a running k8s cluster")),(0,i.kt)("p",null,"Simply run ",(0,i.kt)("inlineCode",{parentName:"p"},"bash <(curl -sSLf https://download.testkube.io)")," and enter a license key, the script will do the rest. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The script will do a port-forward to the following ports: ",(0,i.kt)("inlineCode",{parentName:"p"},"8080"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"8090"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"5556")," in the background mode. Please make sure they are available.")),(0,i.kt)("p",null,"The installation will take about 4-5 min, once it is completed you will have the Testkube Enterprise deployed in ",(0,i.kt)("inlineCode",{parentName:"p"},"testkube-enterprise")," namespace and the Testkube Agent in ",(0,i.kt)("inlineCode",{parentName:"p"},"testkube")," namespace. The UI is available at http://localhost:8080. We use Dex for authentication, so once you open the URL you will see a login page - use ",(0,i.kt)("inlineCode",{parentName:"p"},"admin@example.com")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," as a username and a password respectively."),(0,i.kt)("p",null,"Voila! Now you can create tests, testsuites in both CLI and UI and explore the power of Testkube!"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you close a terminal you may do a port-forward with the following commands:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward svc/testkube-enterprise-ui 8080:8080 --namespace testkube-enterprise &\nkubectl port-forward svc/testkube-enterprise-api 8090:8088 --namespace testkube-enterprise &\nkubectl port-forward svc/testkube-enterprise-dex 5556:5556 --namespace testkube-enterprise &\n"))),(0,i.kt)("h2",{id:"installation-of-testkube-enterprise-and-an-agent-in-multiple-clusters"},"Installation of Testkube Enterprise and an Agent in multiple clusters"),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you proceed with the installation, please ensure that you have the following prerequisites in place:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Kubernetes cluster (version 1.21+)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh/docs/intro/quickstart/"},"Helm")," (version 3+)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/"},"cert-manager")," (version 1.11+) - Used for TLS certificate management."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/"},"NGINX Controller")," (version v1.8+) - Used for Ingress configuration."),(0,i.kt)("li",{parentName:"ul"},"(OPTIONAL) ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/prometheus-operator/prometheus-operator"},"Prometheus Operator")," (version 0.49+) - used for metrics collection"),(0,i.kt)("li",{parentName:"ul"},"Own a public/private domain for creating Ingress rules."),(0,i.kt)("li",{parentName:"ul"},"License Key and/or License File, if offline access is required.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NOTE"),"\nWhile it is possible to use custom TLS certificates for the Testkube Enterprise API and Dashboard,\nwe strongly recommend using ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," for easier certificate management."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"docker-images"},"Docker Images"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DEPRECATION NOTICE"),": As of November 2023, Testkube Enterprise Docker images are publicly accessible.\nYou only need to follow the steps in this section if you wish to re-publish the images to your private Docker registry;\notherwise, you may skip this section."),(0,i.kt)("p",null,"To begin, ensure that you have access to the Testkube Enterprise API & Dashboard Docker images.\nYou can either request access from your Testkube representative or upload the Docker image tarball artifacts to a private Docker registry."),(0,i.kt)("p",null,"Next, create a secret to store your Docker registry credentials:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret docker-registry testkube-enterprise-registry \\\n  --docker-server=<your-registry-server> \\\n  --docker-username=<your-name>          \\\n  --docker-password=<your-pword>         \\\n  --docker-email=<your-email>            \\\n  --namespace=testkube-enterprise\n")),(0,i.kt)("p",null,"Make sure to configure the image pull secrets in your ",(0,i.kt)("inlineCode",{parentName:"p"},"values.yaml")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"global:\n  imagePullSecrets:\n    - name: testkube-enterprise-registry\n")),(0,i.kt)("h3",{id:"license"},"License"),(0,i.kt)("p",null,"Select the appropriate license type for your environment."),(0,i.kt)("p",null,"For air-gapped & firewalled environments, we offer an option to use an ",(0,i.kt)("a",{parentName:"p",href:"#offline-license"},"Offline License")," for enhanced security.\nAn ",(0,i.kt)("strong",{parentName:"p"},"Offline License")," consists of a ",(0,i.kt)("strong",{parentName:"p"},"License Key")," and ",(0,i.kt)("strong",{parentName:"p"},"License File"),"."),(0,i.kt)("p",null,"If your environment has internet access, you can use an ",(0,i.kt)("a",{parentName:"p",href:"#online-license"},"Online License"),", which only requires the ",(0,i.kt)("strong",{parentName:"p"},"License Key"),"."),(0,i.kt)("h4",{id:"online-license"},"Online License"),(0,i.kt)("p",null,"If your environment has internet access, you can use an ",(0,i.kt)("strong",{parentName:"p"},"Online License"),", which only requires the ",(0,i.kt)("strong",{parentName:"p"},"License Key"),",\nand can be provided as a Helm parameter or Kubernetes secret."),(0,i.kt)("p",null,"To provide the ",(0,i.kt)("strong",{parentName:"p"},"License Key")," as a Helm parameter, use the following configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"global:\n  enterpriseLicenseKey: <your license key>\n")),(0,i.kt)("p",null,"To provide the ",(0,i.kt)("strong",{parentName:"p"},"License Key")," as a Kubernetes secret, first we need to create a secret with the required field.\nRun the following command to create the secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic testkube-enterprise-license \\\n  --from-literal=LICENSE_KEY=<your license key>           \\\n  --namespace=testkube-enterprise\n")),(0,i.kt)("p",null,"And then use the following Helm chart configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"global:\n  enterpriseLicenseSecretRef: <secret name>\n")),(0,i.kt)("h4",{id:"offline-license"},"Offline License"),(0,i.kt)("p",null,"For an ",(0,i.kt)("strong",{parentName:"p"},"Offline License"),", supply both the ",(0,i.kt)("strong",{parentName:"p"},"License Key")," and ",(0,i.kt)("strong",{parentName:"p"},"License File")," as either Kubernetes secrets or Helm parameters.\nUsing secrets is safer, as it prevents exposing sensitive license information in Helm chart values."),(0,i.kt)("p",null,"The Kubernetes secret needs to contain 2 entries: ",(0,i.kt)("inlineCode",{parentName:"p"},"license.lic")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LICENSE_KEY"),".\nTo create the secret with the ",(0,i.kt)("strong",{parentName:"p"},"License Key")," and ",(0,i.kt)("strong",{parentName:"p"},"License File"),", run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl create secret generic testkube-enterprise-license \\\n  --from-literal=LICENSE_KEY=<your license key>            \\\n  --from-file=license.lic=<path-to-license-file>          \\\n  --namespace=testkube-enterprise\n")),(0,i.kt)("p",null,"After creating the secret, use the following Helm chart configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"global:\n  enterpriseOfflineAccess: true\n  licenseFileSecret: testkube-enterprise-license\n")),(0,i.kt)("p",null,"Alternatively, you can provide the ",(0,i.kt)("strong",{parentName:"p"},"License File")," as a Helm parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"global:\n  licenseKey: <your license key>\n  licenseFile: <your license file>\n")),(0,i.kt)("h3",{id:"ingress"},"Ingress"),(0,i.kt)("p",null,"Testkube Enterprise requires the NGINX Controller to configure and optimize its protocols.\nNGINX is the sole supported Ingress Controller, and is essential for Testkube Enterprise's operation."),(0,i.kt)("p",null,"We highly recommend installing Testkube Enterprise with Ingress enabled.\nThis requires a valid domain (public or private) with a valid TLS certificate.\nIngresses are enabled and created by default."),(0,i.kt)("p",null,"To disable Ingress creation, adjust the following values accordingly. Note that you must then manually configure the API & Dashboard services to maintain accessibility:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"global:\n  ingress:\n    enabled: false\n\ntestkube-cloud-api:\n  api:\n    tls:\n      serveHTTPS: false\n")),(0,i.kt)("h4",{id:"configuration-1"},"Configuration"),(0,i.kt)("p",null,"To ensure the reliable functioning of gRPC and Websockets protocols, Testkube Enterprise is locked in with NGINX Ingress Controller."),(0,i.kt)("p",null,"Below are current configurations per Ingress resource which ensure Testkube Enterprise protocols work performant and reliably.\nIt is not recommended to change any of these settings!"),(0,i.kt)("p",null,"gRPC Ingress annotations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kubernetes"},'annotations:\n    nginx.ingress.kubernetes.io/proxy-body-size: 8m\n    nginx.ingress.kubernetes.io/client-header-timeout: "10800"\n    nginx.ingress.kubernetes.io/client-body-timeout: "10800"\n')),(0,i.kt)("p",null,"Websockets Ingress annotations:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kubernetes"},'annotations:\n  nginx.ingress.kubernetes.io/proxy-read-timeout: "3600"\n  nginx.ingress.kubernetes.io/proxy-send-timeout: "3600"\n')),(0,i.kt)("p",null,"If you want to use a different Ingress Controller, please reach out to our support team."),(0,i.kt)("h4",{id:"domain"},"Domain"),(0,i.kt)("p",null,"Testkube Enterprise requires a domain (public or internal) under which it will expose the following services:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Subdomain"),(0,i.kt)("th",{parentName:"tr",align:null},"Service"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dashboard.<your-(sub)domain>")),(0,i.kt)("td",{parentName:"tr",align:null},"Dashboard UI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"api.<your-(sub)domain>")),(0,i.kt)("td",{parentName:"tr",align:null},"REST API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"agent.(sub)<your-domain>")),(0,i.kt)("td",{parentName:"tr",align:null},"gRPC API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"websockets.(sub)<your-domain>")),(0,i.kt)("td",{parentName:"tr",align:null},"WebSockets API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"storage.(sub)<your-domain>")),(0,i.kt)("td",{parentName:"tr",align:null},"Storage API")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"status.(sub)<your-domain>")),(0,i.kt)("td",{parentName:"tr",align:null},"Status Pages API")))),(0,i.kt)("h4",{id:"tls"},"TLS"),(0,i.kt)("p",null,"For best the performance, TLS should be terminated at the application level (Testkube Enterprise API) instead of NGINX/Ingress level because\ngRPC and Websockets protocols perform significantly better when HTTP2 protocol is used end-to-end.\nNote that NGINX, by default, downgrades the HTTP2 protocol to HTTP1.1 when the backend service is using an insecure port."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," (check the ",(0,i.kt)("a",{parentName:"p",href:"#prerequisites"},"Prerequisites")," for installation guide) is installed in your cluster, it should be configured to issue certificates for the configured domain by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Issuer")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIssuer")," resource.\nTestkube Enterprise Helm chart needs the following config in that case:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},'global:\n  certificateProvider: "cert-manager"\n  certManager:\n    issuerRef: <issuer|clusterissuer name>\n')),(0,i.kt)("p",null,"By default, Testkube Enterprise uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"ClusterIssuer")," ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," resource, that can be changed by setting the ",(0,i.kt)("inlineCode",{parentName:"p"},"testkube-cloud-api.api.tls.certManager.issuerKind")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"Issuer"),"."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"cert-manager")," is not installed in your cluster, valid TLS certificates (for API & Dashboard) which cover the following subdomains need to be provided:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"API (tls secret name is configured with ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-cloud-api.api.tls.tlsSecret")," field)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api.<your-domain>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"agent.<your-domain>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"websockets.<your-domain>")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status.<your-domain>")))),(0,i.kt)("li",{parentName:"ul"},"Dashboard (TLS secret name is configured with ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-cloud-ui.ingress.tlsSecretName")," field)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dashboard.<your-domain>"),"\nAlso, ",(0,i.kt)("inlineCode",{parentName:"li"},"global.certificateProvider"),' should be set to blank ("").')))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},'global:\n  certificateProvider: ""\n')),(0,i.kt)("h4",{id:"custom-certificates"},"Custom certificates"),(0,i.kt)("p",null,"In order to use custom certificates, first a secret needs to be created with the following entries:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls.crt")," - the certificate"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tls.key")," - the private key"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ca.crt")," - the CA certificate (if the certificate is not self-signed)")),(0,i.kt)("p",null,"If certificate-based authentication is required, the custom certificates need to be configured in the following places:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enterprise API",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"MINIO_ENDPOINT")," is set to an exposed URL, then the following Helm values need to be configured:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The following Helm parameter needs to be enabled to inject the custom certificate into MinIO ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-cloud-api.minio.certSecret.enabled: true")),(0,i.kt)("li",{parentName:"ul"},"If the certificate is not self-signed, the CA cert needs to be injected also by enabling the Helm parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-cloud-api.minio.mountCACertificate: true")),(0,i.kt)("li",{parentName:"ul"},"Custom certificate verification can also be skipped by setting ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-cloud-api.minio.skipVerify: true")))),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"MINIO_ENDPOINT")," uses the Kubernetes DNS record (",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-enterprise-minio.<namespace>.svc.cluster.local:9000"),"), ",(0,i.kt)("inlineCode",{parentName:"li"},"AGENT_STORAGE_HOSTNAME")," should be set to point to the exposed storage URL"))),(0,i.kt)("li",{parentName:"ul"},"Agent",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Agent API",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If the Enterprise API is configured to use certificate-based authentication or is using a certificate signed by a custom CA, the Agent API needs to be configured to use the same certificates by pointing ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-api.cloud.tls.certificate.secretRef")," to the Kubernetes secret which contains the certificates"),(0,i.kt)("li",{parentName:"ul"},"Custom certificate verification can also be skipped by setting ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-api.cloud.tls.skipVerify: true")))),(0,i.kt)("li",{parentName:"ul"},"Storage",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The following Helm parameter needs to be enabled to inject the custom certificate into MinIO ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-api.storage.certSecret.enabled: true")),(0,i.kt)("li",{parentName:"ul"},"If the certificate is not self-signed, the CA cert needs to be injected also by enabling the Helm parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-cloud-api.minio.mountCACertificate: true")),(0,i.kt)("li",{parentName:"ul"},"Custom certificate verification can also be skipped by setting ",(0,i.kt)("inlineCode",{parentName:"li"},"testkube-api.storage.skipVerify: true"))))))),(0,i.kt)("h3",{id:"auth"},"Auth"),(0,i.kt)("p",null,"Testkube Enterprise utilizes ",(0,i.kt)("a",{parentName:"p",href:"https://dexidp.io/"},"Dex")," for authentication and authorization.\nFor detailed instruction on configuring Dex, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"/testkube-enterprise/articles/auth"},"Identity Provider")," document."),(0,i.kt)("h3",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Testkube Enterprise exposes Prometheus metrics on the ",(0,i.kt)("inlineCode",{parentName:"p"},"/metrics")," endpoint and uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," resource to expose them to Prometheus.\nIn order for this to work, you need to have ",(0,i.kt)("inlineCode",{parentName:"p"},"Prometheus Operator")," installed in your cluster so that the ",(0,i.kt)("inlineCode",{parentName:"p"},"ServiceMonitor")," resource can be created."),(0,i.kt)("p",null,"Use the following configuration to enable metrics:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"testkube-cloud-api:\n  prometheus:\n    enabled: true\n")),(0,i.kt)("h3",{id:"invitations"},"Invitations"),(0,i.kt)("p",null,"Testkube Enterprise allows you to invite users to Organizations and Environments within Testkube, granting them specific roles and permissions."),(0,i.kt)("p",null,"There are two supported invitation modes: ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"auto-accept"),".\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"email")," to send an invitation for the user to accept, and ",(0,i.kt)("inlineCode",{parentName:"p"},"auto-accept")," to automatically add users without requiring acceptance."),(0,i.kt)("h4",{id:"invitations-via-email"},"Invitations Via Email"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"testkube-cloud-api.api.inviteMode")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"email"),", Testkube Enterprise will send emails when a user gets invited to\nan Organization or an Environment and when SMTP settings need to be configured in the API Helm chart."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},'testkube-cloud-api:\n  api:\n    email:\n      fromEmail: "example@gmail.com"\n      fromName: "Example Invitation"\n    inviteMode: email\n    smtp:\n      host: <smtp host>\n      port: <smtp port>\n      username: <smtp username>\n      password: <smtp password>\n      # password can also be referenced by using the `passwordSecretRef` field which needs to contain the key SMTP_PASSWORD\n      # passwordSecretRef: <secret name>\n')),(0,i.kt)("h4",{id:"auto-accept-invitations"},"Auto-accept Invitations"),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"testkube-cloud-api.api.inviteMode")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"auto-accept"),", Testkube Enterprise will automatically add users to\nOrganizations and Environments when they get invited."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"testkube-cloud-api:\n  inviteMode: auto-accept\n")),(0,i.kt)("h2",{id:"bring-your-own-infra"},"Bring Your Own Infra"),(0,i.kt)("p",null,"Testkube Enterprise supports integrating with existing infrastructure components such as MongoDB, NATS, Dex, etc."),(0,i.kt)("h3",{id:"mongodb"},"MongoDB"),(0,i.kt)("p",null,"Testkube Enterprise uses MongoDB as a database for storing all the data.\nBy default, it will install a MongoDB instance using the Bitnami MongoDB Helm chart."),(0,i.kt)("p",null,"If you wish to use an existing MongoDB instance, you can configure the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"mongodb:\n  enabled: false\n \ntestkube-cloud-api:\n  api:\n    mongo:\n      dsn: <mongodb dsn (mongodb://...)>\n")),(0,i.kt)("h3",{id:"nats"},"NATS"),(0,i.kt)("p",null,"Testkube Enterprise uses NATS as a message broker for communication between API and Agents."),(0,i.kt)("p",null,"If you wish to use an existing NATS instance, you can configure the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"nats:\n  enabled: false\n  \ntestkube-cloud-api:\n  api:\n    nats:\n      uri: <nats uri (nats://...)>\n")),(0,i.kt)("h3",{id:"minio"},"MinIO"),(0,i.kt)("p",null,"Testkube Enterprise uses MinIO as a storage backend for storing artifacts."),(0,i.kt)("p",null,"If you wish to use an existing MinIO instance, you can configure the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"testkube-cloud-api:\n  minio:\n    enabled: false\n  api:\n    minio: {} # check out the `testkube-cloud-api.api.minio` block in the values.yaml for all available settings\n")),(0,i.kt)("h3",{id:"dex"},"Dex"),(0,i.kt)("p",null,"Testkube Enterprise uses Dex as an identity provider."),(0,i.kt)("p",null,"If you wish to use an existing Dex instance, you can configure the following values:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},"global:\n  dex:\n    issuer: <dex issuer url>\ndex:\n  enabled: false\ntestkube-cloud-api:\n  api:\n    oauth: {} # check out the `testkube-cloud-api.api.oauth` block in the values.yaml for all available settings\n")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add our Testkube Enterprise Helm registry:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo add testkubeenterprise https://kubeshop.github.io/testkube-cloud-charts\n"))),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("inlineCode",{parentName:"li"},"values.yaml")," with preferred configuration."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"helm install testkube-enterprise testkubeenterprise/testkube-enterprise -f values.yaml --namespace testkube-enterprise"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IMPORTANT"),"\nThe Bitnami MongoDB Helm chart does not work reliably on ARM architectures. If you are installing MongoDB using this chart, you need to use an ARM compatible image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-helm"},'mongodb:\n  image:\n    repository: zcube/bitnami-compat-mongodb\n    tag: "6.0.5"\n')),(0,i.kt)("h3",{id:"production-setup"},"Production Setup"),(0,i.kt)("p",null,"For best performance and reliability, users should follow this official setup guide and make sure each section is properly configured."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure DNS records as described in the ",(0,i.kt)("a",{parentName:"li",href:"#domain"},"Domain")," section"),(0,i.kt)("li",{parentName:"ol"},"Configure TLS certificates as described in the ",(0,i.kt)("a",{parentName:"li",href:"#tls"},"TLS")," section"),(0,i.kt)("li",{parentName:"ol"},"Configure Dex as described in the ",(0,i.kt)("a",{parentName:"li",href:"#auth"},"Auth")," section"),(0,i.kt)("li",{parentName:"ol"},"Configure Ingress as described in the ",(0,i.kt)("a",{parentName:"li",href:"#ingress"},"Ingress")," section"),(0,i.kt)("li",{parentName:"ol"},"Configure Metrics as described in the ",(0,i.kt)("a",{parentName:"li",href:"#metrics"},"Metrics")," section"),(0,i.kt)("li",{parentName:"ol"},"Configure Invitations as described in the ",(0,i.kt)("a",{parentName:"li",href:"#invitations"},"Invitations")," section"),(0,i.kt)("li",{parentName:"ol"},"Configure BYOI components as described in the ",(0,i.kt)("a",{parentName:"li",href:"#bring-your-own-infra"},"Bring Your Own Infra")," section"),(0,i.kt)("li",{parentName:"ol"},"Install Testkube Enterprise as described in the ",(0,i.kt)("a",{parentName:"li",href:"#installation"},"Installation")," section")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("p",null,"Q: Testkube Enterprise API is crashing (pod is in ",(0,i.kt)("inlineCode",{parentName:"p"},"Error"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"CrashLoopBackOff")," state) with the following error:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"panic: license file is invalid\n")),(0,i.kt)("p",null,"A: Make sure the license file ends with a newline character.\nThere should be a new line after the ",(0,i.kt)("inlineCode",{parentName:"p"},"-----END LICENSE FILE-----")," line in the license file."))}c.isMDXComponent=!0}}]);