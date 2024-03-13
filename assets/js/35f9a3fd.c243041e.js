"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[1296],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42492:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const i={},s=void 0,o={unversionedId:"testkube-enterprise/articles/migrating-from-oss-to-pro",id:"testkube-enterprise/articles/migrating-from-oss-to-pro",title:"migrating-from-oss-to-pro",description:"It is possible to deploy Testkube Enterprise within the same k8s cluster where Testkube OSS is already running. To achieve this, you should install Testkube Enterprise in a different namespace and connect Testkube OSS as an Agent.",source:"@site/docs/testkube-enterprise/articles/migrating-from-oss-to-pro.md",sourceDirName:"testkube-enterprise/articles",slug:"/testkube-enterprise/articles/migrating-from-oss-to-pro",permalink:"/testkube-enterprise/articles/migrating-from-oss-to-pro",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/testkube-enterprise/articles/migrating-from-oss-to-pro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configure Identity Providers",permalink:"/testkube-enterprise/articles/auth"},next:{title:"Testkube Open Source",permalink:"/articles/testkube-oss"}},l={},u=[{value:"License",id:"license",level:2},{value:"Multi-cluster Installation",id:"multi-cluster-installation",level:2},{value:"Ingress",id:"ingress",level:3},{value:"Deployment",id:"deployment",level:3},{value:"One-cluster Installation",id:"one-cluster-installation",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"#How to Migrate from Testkube OSS to Testkube Enterprise"),(0,a.kt)("p",null,"It is possible to deploy Testkube Enterprise within the same k8s cluster where Testkube OSS is already running. To achieve this, you should install Testkube Enterprise in a different namespace and connect Testkube OSS as an Agent."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please note that your test executions will not be migrated to Testkube Enterprise, only Test definitions.")),(0,a.kt)("h2",{id:"license"},"License"),(0,a.kt)("p",null,"To start with Testkube Enterprise you need to request a license. Depending on your environment requirements it can be either an offline or an online license. Read more about these types of licenses ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/testkube-enterprise/articles/usage-guide#license"},"here"),". If you require an online license, it can be acquired ",(0,a.kt)("a",{parentName:"p",href:"https://testkube.io/download"},"here"),". If you need an offline license, please contact us using this ",(0,a.kt)("a",{parentName:"p",href:"https://testkube.io/contact"},"form"),".\nThere are multiple ways to integrate Testkube OSS into your Testkube Enterprise setup. We highly recommend creating a k8s secret, as it Enterprisevides a more secure way to store sensitive data."),(0,a.kt)("p",null,"At this point there are two options to deploy Testkube Enterprise:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Multi-cluster Installation:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Description:")," This option enables the connection of multiple Agents from different Kubernetes clusters. It allows you to consolidate all tests in a unified Dashboard, organized by Environments.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Requirements:")," A domain name and certificates are necessary as the installation exposes Testkube endpoints to the outside world.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Benefit:")," Offers a comprehensive view across clusters and environments."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"One-cluster Installation:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Description:")," With this option, you can connect only one Agent (e.g. your existing Testkube OSS) within the same Kubernetes cluster. Access to the Dashboard is achieved through port-forwarding to localhost.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Requirements:")," No domain names or certificates are required for this apEnterpriseach.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Benefit:")," Simplified setup suitable for a single-cluster environment without the need for external exposure."))),(0,a.kt)("h2",{id:"multi-cluster-installation"},"Multi-cluster Installation"),(0,a.kt)("p",null,"If you decide to go with multiple-cluster installation, please ensure that you have the following prerequisites in place:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/"},"cert-manager")," (version 1.14.2+ ) or have your own certificates in place;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/"},"NGINX Controller")," (version 4.8.3+) or any other service of your choice to configure ingress traffic;"),(0,a.kt)("li",{parentName:"ul"},"a domain for exposing Tetskube endpoints.")),(0,a.kt)("h3",{id:"ingress"},"Ingress"),(0,a.kt)("p",null,"To make a central Testkube Enterprise cluster reachable for multiple Agents we need to expose ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/testkube-enterprise/articles/usage-guide#domain"},"endpoints")," and create certificates.\nTestkube Enterprise requires the NGINX Controller and it is the only supported Ingress Controller for now. By default, Testkube Enterprise integrates with cert-manager. However, if you choose to use your own certificates, provide them as specified ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/testkube-enterprise/articles/usage-guide#tls"},"here"),".\nCreate a ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," with your domain and certificate configuration. Additionally include a secretRef to the secret with the license that was created earlier:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  domain: you-domain.it.com\n  enterpriseLicenseSecretRef: testkube-enterprise-license\n\n  certificateProvider: "cert-manager"\n  certManager:\n    issuerRef: letsencrypt\n\n')),(0,a.kt)("p",null,"###Auth\nTestkube Enterprise utilizes ",(0,a.kt)("a",{parentName:"p",href:"https://dexidp.io/"},"Dex")," for authentication and authorization. For detailed instruction on configuring Dex, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/testkube-enterprise/articles/auth"},"Identity Provider")," document. You may start with creating static users if you do not have any Identity Provider. Here is an example of usage:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'dex:\n configTemplate:\n   additionalConfig: |\n     enablePasswordDB: true\n     staticPasswords:\n       - email: "admin@example.com"\n         # bcrypt hash of the string "password": $(echo password | htpasswd -BinC 10 admin | cut -d: -f2)\n         hash: "$2a$10$2b2cU8CPhOTaGrs1HRQuAueS7JTT5ZHsHSzYiFPm1leZck7Mc8T4W"\n         username: "admin"\n         userID: "08a8684b-db88-4b73-90a9-3cd1661f5466"\n\n')),(0,a.kt)("h3",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"Now, let\u2019s deploy Testkube Enterprise. Please refer to the installation commands ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/testkube-enterprise/articles/usage-guide/#installation"},"here"),". Do not forget to pass your customized ",(0,a.kt)("inlineCode",{parentName:"p"},"values.yaml")," file."),(0,a.kt)("p",null,"It may take a few minutes for the certificates to be issued and for the pods to reach ",(0,a.kt)("inlineCode",{parentName:"p"},"Ready")," status. Once everything is up and running, you may go to dashboard.your-domain.it.com and log in."),(0,a.kt)("p",null,"The only thing that is remaining is to connect Testkube OSS as an Agent. ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/testkube-pro/articles/environment-management/#creating-a-new-environment"},"Create a new environment")," and duplicate the installation command. Execute this command in the cluster where Testkube OSS is deployed to seamlessly upgrade the existing installation to Agent mode. Pay attention to the namespace name, ensuring it aligns with the namespace of Testkube OSS."),(0,a.kt)("p",null,"After running the command, navigate to the Dashboard and you will see all your tests available."),(0,a.kt)("h2",{id:"one-cluster-installation"},"One-cluster Installation"),(0,a.kt)("p",null,"It is possible to deploy Testkube Enterprise and connect an Agent to it in the same k8s cluster without exposing endpoints to the outside world. By simply running ",(0,a.kt)("inlineCode",{parentName:"p"},"bash <(curl -sSLf https://download.testkube.io)")," and entering the license key (for now it works with Online licenses only), you will have a working environment in just a few minutes. The script will ask you for the namespace where your Testkube OSS is running and automatically connect it as an Agent, preserving all created tests. Please check out the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.testkube.io/testkube-enterprise/articles/usage-guide/#installation-of-testkube-enterprise-and-an-agent-in-the-same-cluster"},"official documentation")," for more detailed info."))}c.isMDXComponent=!0}}]);