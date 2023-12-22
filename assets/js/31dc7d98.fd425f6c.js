"use strict";(self.webpackChunktestkube_documentation=self.webpackChunktestkube_documentation||[]).push([[3792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,y=m["".concat(i,".").concat(d)]||m[d]||p[d]||l;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={},o="Telemetry",s={unversionedId:"articles/telemetry",id:"articles/telemetry",title:"Telemetry",description:"To improve the end-user experience, Testkube collects anonymous telemetry data about usage.",source:"@site/docs/articles/telemetry.md",sourceDirName:"articles",slug:"/articles/telemetry",permalink:"/articles/telemetry",draft:!1,editUrl:"https://github.com/kubeshop/testkube/tree/develop/docs/docs/articles/telemetry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Architecture",permalink:"/articles/architecture"},next:{title:"Common Issues",permalink:"/articles/common-issues"}},i={},u=[{value:"Dashboard telemetry",id:"dashboard-telemetry",level:2},{value:"API-server telemetry",id:"api-server-telemetry",level:2},{value:"What We Collect",id:"what-we-collect",level:3},{value:"How to Opt Out?",id:"how-to-opt-out",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"telemetry"},"Telemetry"),(0,a.kt)("p",null,"To improve the end-user experience, Testkube collects anonymous telemetry data about usage."),(0,a.kt)("p",null,"Participation in this program is optional. You may ",(0,a.kt)("a",{parentName:"p",href:"#how-to-opt-out"},"opt-out")," if you'd prefer not to share any information."),(0,a.kt)("p",null,"The data collected is always anonymous, not traceable to the source, and only used in aggregate form. "),(0,a.kt)("h2",{id:"dashboard-telemetry"},"Dashboard telemetry"),(0,a.kt)("p",null,"The webui dashboard collects user consent and then sends telemetry to the following services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"app.posthog.com"),(0,a.kt)("li",{parentName:"ul"},"api.segment.io"),(0,a.kt)("li",{parentName:"ul"},"google analytics")),(0,a.kt)("h2",{id:"api-server-telemetry"},"API-server telemetry"),(0,a.kt)("p",null,"Api server Telemetry collects and scrambles information about the host when the API server is bootstrapped for the first time. "),(0,a.kt)("p",null,"The collected data looks like this."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "anonymousId": "a4652358effb311a074bf84d2aed5a7d270dee858bff10e847df2a9ea132bb38",\n  "context": {\n    "library": {\n      "name": "analytics-go",\n      "version": "3.0.0"\n    }\n  },\n  "event": "testkube-heartbeat",\n  "integrations": {},\n  "messageId": "2021-11-04 19:54:40.029549 +0100 CET m=+0.148209228",\n  "originalTimestamp": "2021-11-04T19:54:40.029571+01:00",\n  "receivedAt": "2021-11-04T18:54:41.004Z",\n  "sentAt": "2021-11-04T18:54:40.029Z",\n  "timestamp": "2021-11-04T18:54:41.004Z",\n  "type": "track"\n}\n')),(0,a.kt)("h3",{id:"what-we-collect"},"What We Collect"),(0,a.kt)("p",null,"The telemetry data we use in our metrics is limited to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The number of CLI installations."),(0,a.kt)("li",{parentName:"ul"},"The number of unique CLI usages in a day."),(0,a.kt)("li",{parentName:"ul"},"The number of installations to a cluster."),(0,a.kt)("li",{parentName:"ul"},"The number of unique active cluster installations."),(0,a.kt)("li",{parentName:"ul"},"The number of people who disable telemetry."),(0,a.kt)("li",{parentName:"ul"},"The number of unique sessions in the Testkube Dashboard.")),(0,a.kt)("p",null,"It is sent to ",(0,a.kt)("a",{parentName:"p",href:"https://analytics.testkube.io"},"https://analytics.testkube.io")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.google-analytics.com"},"https://www.google-analytics.com")),(0,a.kt)("h2",{id:"how-to-opt-out"},"How to Opt Out?"),(0,a.kt)("p",null,"To opt out of the Testkube telemetry collection:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube disable telemetry\n")),(0,a.kt)("p",null,"To ",(0,a.kt)("em",{parentName:"p"},"opt in"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube enable telemetry\n")),(0,a.kt)("p",null,"To check the current ",(0,a.kt)("em",{parentName:"p"},"status"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"testkube status telemetry\n")))}p.isMDXComponent=!0}}]);