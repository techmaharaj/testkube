"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[4106],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86311:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const i={},a=void 0,l={unversionedId:"cli/testkube_init",id:"cli/testkube_init",title:"testkube_init",description:"testkube init",source:"@site/docs/cli/testkube_init.md",sourceDirName:"cli",slug:"/cli/testkube_init",permalink:"/cli/testkube_init",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/cli/testkube_init.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"testkube_get_webhook",permalink:"/cli/testkube_get_webhook"},next:{title:"testkube install",permalink:"/cli/testkube_install"}},u={},s=[{value:"testkube init",id:"testkube-init",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"testkube-init"},"testkube init"),(0,o.kt)("p",null,"Install Helm chart registry in current kubectl context and update dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"testkube init [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --agent-prefix string   usually don\'t need to be changed [required for custom cloud mode] (default "agent")\n      --agent-token string    Testkube Pro agent key [required for centralized mode]\n      --agent-uri string      Testkube Pro agent URI [required for centralized mode]\n      --api-prefix string     usually don\'t need to be changed [required for custom cloud mode] (default "api")\n      --chart string          chart name (usually you don\'t need to change it) (default "kubeshop/testkube")\n      --dry-run               dry run mode - only print commands that would be executed\n      --env-id string         Testkube Pro environment id [required for centralized mode]\n      --feature-logs-v2       Logs v2 feature flag\n  -h, --help                  help for init\n      --logs-prefix string    usually don\'t need to be changed [required for custom cloud mode] (default "logs")\n      --logs-uri string       Testkube Pro logs URI [required for centralized mode]\n      --master-insecure       should client connect in insecure mode (will use http instead of https)\n      --name string           installation name (usually you don\'t need to change it) (default "testkube")\n      --namespace string      namespace where to install (default "testkube")\n      --no-confirm            don\'t ask for confirmation - unatended installation mode\n      --no-minio              don\'t install MinIO\n      --no-mongo              don\'t install MongoDB\n      --org-id string         Testkube Pro organization id [required for centralized mode]\n      --root-domain string    usually don\'t need to be changed [required for custom cloud mode] (default "testkube.io")\n      --ui-prefix string      usually don\'t need to be changed [required for custom cloud mode] (default "app")\n      --values string         path to Helm values file\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -a, --api-uri string   api uri, default value read from config if set (default "http://localhost:8088")\n  -c, --client string    client used for connecting to Testkube API one of proxy|direct|cluster (default "proxy")\n      --insecure         insecure connection for direct client\n      --oauth-enabled    enable oauth\n      --verbose          show additional debug messages\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/cli/testkube"},"testkube"),"\t - Testkube entrypoint for kubectl plugin")))}d.isMDXComponent=!0}}]);