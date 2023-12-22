"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[6520],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={},i="Overview",c={unversionedId:"articles/going-to-production",id:"articles/going-to-production",title:"Overview",description:"This section provides guidance to get Testkube to production, in particular to enable access to Testkube without requiring k8s privileges to the Testkube k8s namespace and workloads:",source:"@site/docs/articles/going-to-production.md",sourceDirName:"articles",slug:"/articles/going-to-production",permalink:"/articles/going-to-production",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/going-to-production.md",tags:[],version:"current",frontMatter:{}},s={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This section provides guidance to get Testkube to production, in particular to enable access to Testkube without requiring k8s privileges to the Testkube k8s namespace and workloads:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Exposing Testkube Dashboard ",(0,o.kt)("a",{parentName:"li",href:"/articles/exposing-testkube"},"externally with ingresses"),"."),(0,o.kt)("li",{parentName:"ol"},"Overall ",(0,o.kt)("a",{parentName:"li",href:"/articles/deploying-in-aws"},"Testkube deployment on AWS"),"."),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("a",{parentName:"li",href:"/articles/oauth-dashboard"},"OAuth authentication to the Testkube dashboard"),". "),(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("a",{parentName:"li",href:"/articles/oauth-cli"},"OAuth authentication to the Testkube api-server used by the CLI")," as an alternative to default ",(0,o.kt)("inlineCode",{parentName:"li"},"proxy")," mode leveraging ",(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/cluster-administration/proxies/"},"kube apiserver proxy"),".")))}p.isMDXComponent=!0}}]);