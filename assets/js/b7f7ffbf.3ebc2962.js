"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[4627],{4596:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"textbook/chapter_09/index","title":"Chapter 9. Debugging Your Legal Software Application","description":"Docassemble is an incredibly powerful tool for creating legal software applications. However, that does not always mean it is easy to use.","source":"@site/docs/textbook/chapter_09/index.mdx","sourceDirName":"textbook/chapter_09","slug":"/textbook/chapter_09/","permalink":"/textbook/docs/textbook/chapter_09/","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Chapter 9. Debugging Your Legal Software Application"},"sidebar":"textbookSidebar","previous":{"title":"More Advanced Jinja in Docassemble","permalink":"/textbook/docs/textbook/chapter_08/00-20"},"next":{"title":"Learning How to Debug and Resolve Errors","permalink":"/textbook/docs/textbook/chapter_09/00-10"}}');var n=o(4848),s=o(8453),a=o(9563);o(1428);const i={title:"Chapter 9. Debugging Your Legal Software Application"},c=void 0,l={},u=[];function d(e){const t={p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Docassemble is an incredibly powerful tool for creating legal software applications. However, that does not always mean it is easy to use."}),"\n",(0,n.jsxs)(t.p,{children:["We can often run into ",(0,n.jsx)(t.strong,{children:"bugs"})," using Docassemble. These bugs can be very frustrating to solve."]}),"\n",(0,n.jsx)(t.p,{children:"When you encounter a bug in Docassemble and you are truly stuck, sometimes the best way to help solve that bug is to ask someone for help rather than waste any more of your own time. However, you can also try and figure out what is going wrong yourself. This chapter is designed to help you to do that."}),"\n",(0,n.jsx)(t.p,{children:"What we will do is consider some common errors, as well as how to understand these errors in your code. Let's get started!"}),"\n",(0,n.jsx)(a.A,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},9563:(e,t,o)=>{o.d(t,{A:()=>b});o(6540);var r=o(8215),n=o(102),s=o(6289),a=o(1430),i=o(2887),c=o(539),l=o(9303);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=o(4848);function h(e){let{href:t,children:o}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:o})}function p(e){let{href:t,icon:o,title:n,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:n,children:[o," ",n]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const o=(0,n.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return o?(0,d.jsx)(p,{href:o,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const o=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:o,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const o=(0,n.$S)();return(0,d.jsx)(b,{items:o.items,className:t})}function b(e){const{items:t,className:o}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",o),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},1430:(e,t,o)=>{o.d(t,{W:()=>l});var r=o(6540),n=o(797);const s=["zero","one","two","few","many","other"];function a(e){return s.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:a(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:a(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function l(){const e=c();return{selectMessage:(t,o)=>function(e,t,o){const r=e.split("|");if(1===r.length)return r[0];r.length>o.pluralForms.length&&console.error(`For locale=${o.locale}, a maximum of ${o.pluralForms.length} plural forms are expected (${o.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=o.select(t),s=o.pluralForms.indexOf(n);return r[Math.min(s,r.length-1)]}(o,t,e)}}}}]);