"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4148],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=u(r),d=o,k=f["".concat(i,".").concat(d)]||f[d]||p[d]||l;return r?n.createElement(k,s(s({ref:t},c),{},{components:r})):n.createElement(k,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,s=new Array(l);s[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},63142:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const l={},s=void 0,a={unversionedId:"cli/testkube_get_testworkflow",id:"cli/testkube_get_testworkflow",title:"testkube_get_testworkflow",description:"testkube get testworkflow",source:"@site/docs/cli/testkube_get_testworkflow.md",sourceDirName:"cli",slug:"/cli/testkube_get_testworkflow",permalink:"/cli/testkube_get_testworkflow",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_get_testworkflow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_get_testsuiteexecution",permalink:"/cli/testkube_get_testsuiteexecution"},next:{title:"testkube_get_testworkflowtemplate",permalink:"/cli/testkube_get_testworkflowtemplate"}},i={},u=[{value:"testkube get testworkflow",id:"testkube-get-testworkflow",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"testkube-get-testworkflow"},"testkube get testworkflow"),(0,o.kt)("p",null,"Get all available test workflows"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,'Getting all available test workflows from given namespace - if no namespace given "testkube" namespace is used'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testkube get testworkflow [name] [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --crd-only        show only test workflow crd\n  -h, --help            help for testworkflow\n  -l, --label strings   label key value pair: --label key1=value1\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --api-uri string       api uri, default value read from config if set (default "https://demo.testkube.io/results")\n  -c, --client string        client used for connecting to Testkube API one of proxy|direct (default "proxy")\n      --go-template string   go template to render (default "{{.}}")\n      --insecure             insecure connection for direct client\n      --namespace string     Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled        enable oauth\n  -o, --output string        output type can be one of json|yaml|pretty|go-template (default "pretty")\n      --verbose              show additional debug messages\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/testkube_get"},"testkube get"),"\t - Get resources")))}p.isMDXComponent=!0}}]);