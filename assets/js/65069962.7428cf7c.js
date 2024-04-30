"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||l;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89034:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},s="Reference Architectures",i={unversionedId:"articles/install/reference-architectures",id:"articles/install/reference-architectures",title:"Reference Architectures",description:"Testkube contains two sub-systems:",source:"@site/docs/articles/install/reference-architectures.md",sourceDirName:"articles/install",slug:"/articles/install/reference-architectures",permalink:"/articles/install/reference-architectures",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/install/reference-architectures.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Testkube Quickstart",permalink:"/articles/install/quickstart-install"},next:{title:"Install Testkube with the CLI",permalink:"/articles/install/install-with-cli"}},o={},c=[{value:"Testkube OSS",id:"testkube-oss",level:2},{value:"Testkube On-Prem",id:"testkube-on-prem",level:2},{value:"Testkube On-Prem Federated",id:"testkube-on-prem-federated",level:2},{value:"Testkube Cloud",id:"testkube-cloud",level:2}],u={toc:c};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reference-architectures"},"Reference Architectures"),(0,a.kt)("p",null,"Testkube contains two sub-systems:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Control Plane which includes the Dashboard, Storage for Results/Artifacts, Cluster Federation, etc"),(0,a.kt)("li",{parentName:"ul"},"An Agent running in your cluster that manages Testkube resources, runs tests, gathers results, etc.")),(0,a.kt)("p",null,"The two sub-systems can be deployed in variety of ways to give flexibility into where your tests are executed and where test logs and artifacts are stored."),(0,a.kt)("h2",{id:"testkube-oss"},"Testkube OSS"),(0,a.kt)("p",null,"Testkube OSS has a standalone agent. It's fully open-sourced and does not require a license. To deploy this you will want to look at ",(0,a.kt)("a",{parentName:"p",href:"/articles/install/install-with-cli#deploy-the-open-source-standalone-agent"},"deploying the standalone agent"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deployment with standalone agent",src:n(1033).Z,width:"1689",height:"902"})),(0,a.kt)("h2",{id:"testkube-on-prem"},"Testkube On-Prem"),(0,a.kt)("p",null,"Testkube On-Prem has the control plane and a single agent deployed within the same namespace. You will have one single environment. To deploy this you will want to look at either ",(0,a.kt)("a",{parentName:"p",href:"/articles/install/install-with-cli#deploy-an-on-prem-demo"},"deploying the demo")," or ",(0,a.kt)("a",{parentName:"p",href:"/articles/install/install-with-helm"},"installing with Helm"),"."),(0,a.kt)("p",null,"You can also try ",(0,a.kt)("a",{parentName:"p",href:"/articles/install/quickstart-install"},"the quickstart demo"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deployment with single agent",src:n(25176).Z,width:"1689",height:"1427"})),(0,a.kt)("h2",{id:"testkube-on-prem-federated"},"Testkube On-Prem Federated"),(0,a.kt)("p",null,"Testkube On-Prem has the control plane in one namespace with multiple agents in other namespaces or clusters. You will create an environment for each of your clusters. To deploy this you will want to look at ",(0,a.kt)("a",{parentName:"p",href:"/articles/install/install-with-helm"},"installing with Helm")," for the control plane and ",(0,a.kt)("a",{parentName:"p",href:"/articles/install/install-with-cli#deploy-an-agent-that-will-connect-to-a-control-plane"},"deploying an agent")," for the agents."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deployment with federated agents",src:n(78669).Z,width:"1536",height:"527"})),(0,a.kt)("h2",{id:"testkube-cloud"},"Testkube Cloud"),(0,a.kt)("p",null,"Testkube Cloud has a control plane that is managed by the Testkube team.\nYou only have to run a stateless agent which makes operations a breeze.\nTo get started simply visit ",(0,a.kt)("a",{parentName:"p",href:"https://app.testkube.io"},"https://app.testkube.io"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Your proprietory code never touches our servers, only test logs and artifacts will be stored.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deployment with managed control plane",src:n(98883).Z,width:"1536",height:"527"})))}p.isMDXComponent=!0},25176:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-default-e381c4fda8c655e5f3c773fcab3871fe.jpeg"},78669:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-federated-db751d59bf46a0aeb1b5e21e0f20c07b.jpeg"},98883:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-managed-a403c37da1f8d28547919d33ac1168a7.jpeg"},1033:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/architecture-standalone-8e179791ad62895c5abc5519dffc8d55.jpeg"}}]);