(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(3),A=a(7),n=(a(0),a(132)),s=["components"],i={id:"user-assisted-cadre",title:"User Assisted Cadre (UAC)"},l={unversionedId:"popsm/user-assisted-cadre",id:"popsm/user-assisted-cadre",isDocsHomePage:!1,title:"User Assisted Cadre (UAC)",description:"Permits",source:"@site/docs/popsm/user-assisted-cadre.md",slug:"/popsm/user-assisted-cadre",permalink:"/wisn-user-manual/docs/popsm/user-assisted-cadre",editUrl:"https://github.com/udsm-dhis2-project/wisn-user-manual/edit/main/docs/popsm/user-assisted-cadre.md",version:"current",sidebar:"someSidebar",previous:{title:"Initial Optimization",permalink:"/wisn-user-manual/docs/popsm/initial-optimization"},next:{title:"Final Allocation",permalink:"/wisn-user-manual/docs/popsm/final-allocation"}},c=[{value:"Permits",id:"permits",children:[]},{value:"Allocations",id:"allocations",children:[]},{value:"Summary",id:"summary",children:[]}],o={toc:c};function b(e){var t=e.components,i=Object(A.a)(e,s);return Object(n.b)("wrapper",Object(r.a)({},o,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"permits"},"Permits"),Object(n.b)("p",null,"Here the system displays all UAC and their supply constraints set(if any).The user will be able to enter UAC permits manually. The budget of Total UAC permits (based on salaries during setting of cadre salaries) to be deducted from budget Allocated . FAC permits allocation in initial optimization to be re-run internally  based on the remaining budget and affect the previous allocation."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img alt",src:a(252).default})),Object(n.b)("p",null,"On the top right corner there is UAC avg need, this basically indicates the UAC  Average need of all new and upgraded facilities in the New and Upgrade stage. This helps users on mang decision when allocating UAC permits if necessary."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img alt",src:a(253).default})),Object(n.b)("p",null,"Moreover, PRI after UAC button indicates the new assignment of full automated cadre after adding UACpermits which affects the same budget used to assign FAC in the initial optimization process, hence there are some FAC permits which automatically get affected. Number of FAC permits might change as well as remaining budget, thats whu=y is being displayed with the new figures on the top"),Object(n.b)("p",null,Object(n.b)("img",{alt:"img alt",src:a(254).default})),Object(n.b)("p",null,"When a user enters a number of permits in which the annual budget exceeds the POLAR budget for new permits, the system will reject and the user will be warned."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img alt",src:a(255).default})),Object(n.b)("p",null,"Or even when user enter permits which exceed max supply constraint set in the second stage, the system will prompt a warning message."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img alt",src:a(256).default})),Object(n.b)("h3",{id:"allocations"},"Allocations"),Object(n.b)("p",null,"The system will allocate the entered permits to LGA with high patient volume..LGA can also be re-assigned manually. The system will summarize UAC allocation per cadre per LGA ."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img alt",src:a(257).default})),Object(n.b)("p",null,"To do re-assigning  click reassign button which will display the list of LGA then new assigning will be done. "),Object(n.b)("p",null,Object(n.b)("img",{alt:"img alt",src:a(258).default})),Object(n.b)("h3",{id:"summary"},"Summary"),Object(n.b)("p",null,"This will combine the List of LGA per Cadre selected and even showing previous system assignment and the re assignment if any."),Object(n.b)("p",null,Object(n.b)("img",{alt:"img alt",src:a(259).default})))}b.isMDXComponent=!0},132:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var r=a(0),A=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,A=function(e,t){if(null==e)return{};var a,r,A={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(A[a]=e[a]);return A}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(A[a]=e[a])}return A}var c=A.a.createContext({}),o=function(e){var t=A.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=o(e.components);return A.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return A.a.createElement(A.a.Fragment,{},t)}},f=A.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=o(a),f=r,d=b["".concat(s,".").concat(f)]||b[f]||u[f]||n;return a?A.a.createElement(d,i(i({ref:t},c),{},{components:a})):A.a.createElement(d,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<n;c++)s[c]=a[c];return A.a.createElement.apply(null,s)}return A.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},252:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/uac-f4a941f07239c68c6806c89c19fcf2ef.png"},253:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/uac2-b4acc47a8c8b22354f1b290d0dbe3779.png"},254:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/uac3-1ea88fe10e2af7ebb0370497b519cb8d.png"},255:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/uac4-834259e34e08c677cce19ac3ab892d52.png"},256:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/uac5-428fa1a6f9ac629eac8446713d28798f.png"},257:function(e,t,a){"use strict";a.r(t),t.default="data:image/png;base64,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"},258:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/uac7-cb0c2f5c310c4e8331f3e7a65d09357e.png"},259:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/uac8-933f5f6a403d030291f6d2b60e64a741.png"}}]);