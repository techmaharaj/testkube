"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[7777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="Connecting from the CLI",c={unversionedId:"testkube-pro/articles/managing-cli-context",id:"testkube-pro/articles/managing-cli-context",title:"Connecting from the CLI",description:"To use Testkube CLI to connect to your Testkube Pro install you will need to set the CLI Context. For that you will need a Testkube Pro token.",source:"@site/docs/testkube-pro/articles/managing-cli-context.md",sourceDirName:"testkube-pro/articles",slug:"/testkube-pro/articles/managing-cli-context",permalink:"/testkube-pro/articles/managing-cli-context",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/testkube-pro/articles/managing-cli-context.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Environment Management",permalink:"/testkube-pro/articles/environment-management"},next:{title:"Testkube Pro Architecture",permalink:"/testkube-pro/articles/architecture"}},l={},s=[],u={toc:s};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-from-the-cli"},"Connecting from the CLI"),(0,o.kt)("p",null,"To use Testkube CLI to connect to your Testkube Pro install you will need to set the CLI Context. For that you will need a Testkube Pro token."),(0,o.kt)("p",null,"The token you create can have different roles associated with it for fine-grained control:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Admin")," access rights (access to all environments):")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Admin Token",src:n(10576).Z,width:"902",height:"523"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Specific role for selected environments:")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Roles for Token",src:n(95109).Z,width:"636",height:"682"})),(0,o.kt)("p",null,"When the token is created, you're ready to change the Testkube CLI context: "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Setting Context",src:n(4533).Z,width:"1233",height:"696"})),(0,o.kt)("h1",{id:"connecting-using-kubeconfig-context"},"Connecting Using ",(0,o.kt)("inlineCode",{parentName:"h1"},"kubeconfig")," Context"),(0,o.kt)("p",null,"If you want to connect to your Testkube instance directly (like you would do with ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl"),"), set the CLI Context to be ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeconfig"),"-based: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"testkube set context --kubeconfig\n")))}p.isMDXComponent=!0},10576:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/admin-token-2e345034f148a5aa7bdafb994c8ff1e4.png"},95109:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/roles-for-token-42bba951aab696e860c53e43172148ed.png"},4533:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/setting-context-f8b9501fec1c55ce08bae32da53847d9.png"}}]);