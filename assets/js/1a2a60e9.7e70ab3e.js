"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[5898],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(r),p=o,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},95694:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,l={unversionedId:"cli/testkube_download_artifacts",id:"cli/testkube_download_artifacts",title:"testkube_download_artifacts",description:"testkube download artifacts",source:"@site/docs/cli/testkube_download_artifacts.md",sourceDirName:"cli",slug:"/cli/testkube_download_artifacts",permalink:"/cli/testkube_download_artifacts",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_download_artifacts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_download_artifact",permalink:"/cli/testkube_download_artifact"},next:{title:"testkube_download_testsuite-artifacts",permalink:"/cli/testkube_download_testsuite-artifacts"}},s={},c=[{value:"testkube download artifacts",id:"testkube-download-artifacts",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],d={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"testkube-download-artifacts"},"testkube download artifacts"),(0,o.kt)("p",null,"download artifacts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testkube download artifacts <executionName> [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -c, --client string         Client used for connecting to testkube API one of proxy|direct|cluster (default "proxy")\n      --download-dir string   download dir (default "artifacts")\n  -e, --execution-id string   ID of the execution\n      --format string         data format for storing files, one of folder|archive (default "folder")\n  -h, --help                  help for artifacts\n      --mask stringArray      regexp to filter downloaded files, single or comma separated, like report/.* or .*\\.json,.*\\.js$\n      --verbose               should I show additional debug messages\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --api-uri string     api uri, default value read from config if set (default "http://localhost:8088")\n      --insecure           insecure connection for direct client\n      --namespace string   Kubernetes namespace, default value read from config if set (default "testkube")\n      --oauth-enabled      enable oauth\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/testkube_download"},"testkube download"),"\t - Artifacts management commands")))}u.isMDXComponent=!0}}]);