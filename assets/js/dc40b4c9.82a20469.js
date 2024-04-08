"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[4826],{7056:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=o(4848),r=o(8453),s=o(3514),i=o(2487);const a={title:"Chapter 4. Logic and If Statements"},c=void 0,l={id:"textbook/chapter_04/index",title:"Chapter 4. Logic and If Statements",description:"In , we discussed how to create variables in Docassemble, and how to store different data types in those variables. At the end of that chapter, we also touched on how to use variables to control the logic of our application.",source:"@site/docs/textbook/chapter_04/index.mdx",sourceDirName:"textbook/chapter_04",slug:"/textbook/chapter_04/",permalink:"/textbook/docs/textbook/chapter_04/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Chapter 4. Logic and If Statements"},sidebar:"textbookSidebar",previous:{title:"Code and Mako",permalink:"/textbook/docs/textbook/chapter_03/00-50"},next:{title:"If statements",permalink:"/textbook/docs/textbook/chapter_04/00-20"}},d={},u=[];function h(e){const t={p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In ",(0,n.jsx)(i.DisplayChapter,{chapter:"chapter_03"}),", we discussed how to create variables in Docassemble, and how to store different data types in those variables. At the end of that chapter, we also touched on how to use variables to control the logic of our application."]}),"\n",(0,n.jsxs)(t.p,{children:["In this chapter, ",(0,n.jsx)(i.DisplayChapter,{chapter:"chapter_04"}),", we will cover how to use ",(0,n.jsx)(t.strong,{children:"if statements"})," and ",(0,n.jsx)(t.strong,{children:"conditional logic"}),". Conditional logic allows us to make choices between two or more options. This type of logic can be particularly useful when we are implementing law into code."]}),"\n",(0,n.jsx)(t.p,{children:"We will first consider how to write a basic if statement with two options. We will then discuss if statements with three or more options. We will then discuss multiple branches of an application using nested if statements, as well as embedding if statements into our question blocks as well as our code blocks. Finally, we will consider how to write even more complicated if statements using conditional logic."}),"\n",(0,n.jsx)(s.A,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},3514:(e,t,o)=>{o.d(t,{A:()=>g});o(6540);var n=o(8215),r=o(1754),s=o(8774),i=o(5846),a=o(6654),c=o(1312),l=o(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=o(4848);function h(e){let{href:t,children:o}=e;return(0,u.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",d.cardContainer),children:o})}function p(e){let{href:t,icon:o,title:r,description:s}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,n.A)("text--truncate",d.cardTitle),title:r,children:[o," ",r]}),s&&(0,u.jsx)("p",{className:(0,n.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const o=(0,r.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return o?(0,u.jsx)(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const o=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:o,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const o=(0,r.$S)();return(0,u.jsx)(g,{items:o.items,className:t})}function g(e){const{items:t,className:o}=e;if(!t)return(0,u.jsx)(w,{...e});const s=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,n.A)("row",o),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},5846:(e,t,o)=>{o.d(t,{W:()=>l});var n=o(6540),r=o(4586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,o)=>function(e,t,o){const n=e.split("|");if(1===n.length)return n[0];n.length>o.pluralForms.length&&console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const r=o.select(t),s=o.pluralForms.indexOf(r);return n[Math.min(s,n.length-1)]}(o,t,e)}}}}]);