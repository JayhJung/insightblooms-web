(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[904,457],{6627:function(e,t,a){Promise.resolve().then(a.t.bind(a,5250,23)),Promise.resolve().then(a.bind(a,720)),Promise.resolve().then(a.bind(a,5543))},720:function(e,t,a){"use strict";a.r(t);var n=a(7437),r=a(4367),s=a(1396),o=a.n(s),i=a(4033);t.default=e=>{let{className:t}=e,a=(0,i.usePathname)(),s=a.split("/").filter(e=>e),l=[{label:"Home",href:"/","aria-label":"/"===a?"page":void 0}];return s.forEach((e,t)=>{let n="/".concat(s.slice(0,t+1).join("/"));"page"!==e&&l.push({label:(0,r.OI)(e.replace(/[-_]/g," "))||"",href:n,"aria-label":a===n?"page":void 0})}),(0,n.jsx)("nav",{"aria-label":"Breadcrumb",className:t,children:(0,n.jsx)("ol",{className:"inline-flex",role:"list",children:l.map((e,t)=>{let{label:a,...r}=e;return(0,n.jsxs)("li",{className:"mx-1 capitalize",role:"listitem",children:[t>0&&(0,n.jsx)("span",{className:"inlin-block mr-1",children:"/"}),t!==l.length-1?(0,n.jsx)(o(),{className:"text-primary dark:text-darkmode-primary",...r,children:a}):(0,n.jsx)("span",{className:"text-light dark:text-darkmode-light",children:a})]},t)})})})}},5543:function(e,t,a){"use strict";a.r(t);var n=a(7437),r=a(145),s=a(4367),o=a(4033);t.default=e=>{let{title:t,meta_title:a,image:i,description:l,canonical:c,noindex:m}=e,{meta_image:p,meta_author:g,meta_description:h}=r.metadata,{base_url:u}=r.site,d=(0,o.usePathname)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("title",{children:(0,s.ab)(a||t||r.site.title)}),c&&(0,n.jsx)("link",{rel:"canonical",href:c,itemProp:"url"}),m&&(0,n.jsx)("meta",{name:"robots",content:"noindex,nofollow"}),(0,n.jsx)("meta",{name:"description",content:(0,s.ab)(l||h)}),(0,n.jsx)("meta",{name:"author",content:g}),(0,n.jsx)("meta",{property:"og:title",content:(0,s.ab)(a||t||r.site.title)}),(0,n.jsx)("meta",{property:"og:description",content:(0,s.ab)(l||h)}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:url",content:"".concat(u,"/").concat(d.replace("/",""))}),(0,n.jsx)("meta",{name:"twitter:title",content:(0,s.ab)(a||t||r.site.title)}),(0,n.jsx)("meta",{name:"twitter:description",content:(0,s.ab)(l||h)}),(0,n.jsx)("meta",{property:"og:image",content:"".concat(u).concat(i||p)}),(0,n.jsx)("meta",{name:"twitter:image",content:"".concat(u).concat(i||p)}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"})]})}},4367:function(e,t,a){"use strict";a.d(t,{OI:function(){return s},ab:function(){return i},gI:function(){return r},nR:function(){return o}}),a(6305);var n=a(8608);let r=(e,t)=>({__html:t?n.TU.parse(e):n.TU.parseInline(e)}),s=e=>e.replace(/^[\s_]+|[\s_]+$/g,"").replace(/[_\s]+/g," ").replace(/^[a-z]/,function(e){return e.toUpperCase()}),o=e=>s(e).split(" ").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "),i=e=>l(n.TU.parse(e).replace(/<\/?[^>]+(>|$)/gm,"").replace(/[\r\n]\s*[\r\n]/gm,"")),l=e=>{let t={"&nbsp;":" ","&lt;":"<","&gt;":">","&amp;":"&","&quot;":'"',"&#39;":"'"};return e.replace(/(&amp;|&lt;|&gt;|&quot;|&#39;)/g,e=>t[e])}},1396:function(e,t,a){e.exports=a(5250)},145:function(e){"use strict";e.exports=JSON.parse('{"site":{"title":"Insightblooms","base_url":"https://www.insightblooms","logo":"/images/logo_1.png","logo_darkmode":"/images/logo_1.png","logo_width":"200","logo_height":"60","logo_text":"Insightblooms"},"settings":{"search":true,"sticky_header":true,"theme_switcher":true,"default_theme":"system","pagination":2,"summary_length":200,"blog_folder":"blog"},"params":{"copyright":"Insightblooms Co.Ltd. (https://www.insightblooms.com)"},"navigation_button":{"enable":true,"label":"Get Started","link":"https://www.insightblooms.com"},"disqus":{"enable":true,"shortname":"themefisher-template","settings":{}},"metadata":{"meta_author":"Themefisher","meta_image":"/images/og-image.png","meta_description":"Insightblooms home"}}')}},function(e){e.O(0,[245,971,938,744],function(){return e(e.s=6627)}),_N_E=e.O()}]);