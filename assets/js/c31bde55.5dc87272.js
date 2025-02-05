"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[5803],{1290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"textbook/chapter_02/index","title":"Chapter 2. An Introduction to Coding with Docassemble","description":"In this chapter we start teaching you how to code in Docassemble.  You are","source":"@site/docs/textbook/chapter_02/index.mdx","sourceDirName":"textbook/chapter_02","slug":"/textbook/chapter_02/","permalink":"/textbook/docs/textbook/chapter_02/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Chapter 2. An Introduction to Coding with Docassemble"},"sidebar":"textbookSidebar","previous":{"title":"Introducing Docassemble","permalink":"/textbook/docs/textbook/chapter_01/00-30"},"next":{"title":"Hello World!","permalink":"/textbook/docs/textbook/chapter_02/00-10"}}');var o=n(4848),s=n(8453),i=n(3514),c=n(2487);const a={title:"Chapter 2. An Introduction to Coding with Docassemble"},l=void 0,h={},u=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["In this chapter we start teaching you how to code in Docassemble.  You are\nwelcome to read this chapter from beginning to end. However we recommend that\nyou do so while at the same time working through the\n",(0,o.jsx)(t.a,{href:"/docs/coding_exercises/chapter_2_exercises",children:(0,o.jsx)(t.strong,{children:"Chapter 2 Coding Exercises"})})]}),"\n",(0,o.jsx)(t.p,{children:"Our experience has been that students that read through this chapter without practising\nas they go face more difficulties understanding the material than students who attempt\nthe coding exercises as they read through this chapter."}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["You must have completed the setup activites in ",(0,o.jsx)(c.DisplayChapter,{chapter:"chapter_01"}),"\nbefore starting on this chapter."]})}),"\n",(0,o.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>b});n(6540);var r=n(8215),o=n(4718),s=n(8774),i=n(5846),c=n(6654),a=n(1312),l=n(1107);const h={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function d(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",h.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:s}=e;return(0,u.jsxs)(d,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",h.cardTitle),title:o,children:[n," ",o]}),s&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",h.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(g,{...e});const s=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(6540),o=n(4586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}}}]);