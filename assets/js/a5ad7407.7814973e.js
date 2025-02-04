"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[9136],{260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>l,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"textbook/chapter_05/00-10","title":"Complex Data Concepts","description":"We already know that we can store stuff in variables.  For example, we can store:","source":"@site/docs/textbook/chapter_05/00-10.mdx","sourceDirName":"textbook/chapter_05","slug":"/textbook/chapter_05/00-10","permalink":"/textbook/docs/textbook/chapter_05/00-10","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Complex Data Concepts"},"sidebar":"textbookSidebar","previous":{"title":"Chapter 5. Complex Data Types","permalink":"/textbook/docs/textbook/chapter_05/"},"next":{"title":"Lists","permalink":"/textbook/docs/textbook/chapter_05/00-20"}}');var r=n(4848),a=n(8453),i=n(1428);const l={title:"Complex Data Concepts"},d=void 0,o={},c=[{value:"Introducing Complex Data Structures",id:"introducing-complex-data-structures",level:2}];function h(e){const t={code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"We already know that we can store stuff in variables.  For example, we can store:"}),"\n",(0,r.jsxs)("table",{id:"complexDataTable1",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Strings"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"MJFname = 'Mark Ferraretto'"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Integers"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"MJFnumber_chn = 4"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Floats"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"MJFhh_income = 45000.0"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Booleans"}),(0,r.jsx)("td",{children:(0,r.jsx)("code",{children:"MJFis_citizen = True"})})]})]}),"\n",(0,r.jsx)(t.p,{children:"What each example has in common is that each stores one piece of information ie:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"one string;"}),"\n",(0,r.jsx)(t.li,{children:"one integer;"}),"\n",(0,r.jsx)(t.li,{children:"one floating point number; and"}),"\n",(0,r.jsx)(t.li,{children:"one boolean."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Sometimes, though, we might have data that looks like this:"}),"\n",(0,r.jsxs)("table",{className:"complexDataTableExamples cdtCentre",children:[(0,r.jsx)("caption",{children:"A list of names"}),(0,r.jsx)("tr",{children:(0,r.jsx)("th",{children:"Name"})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Ida Noe"})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Hugo First"})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Moda Lawn"})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Kate Jupp"})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Ayfor Gott"})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Justin Thyme"})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Ray Member"})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Studie Harde"})}),(0,r.jsx)("tr",{children:(0,r.jsx)("td",{children:"Slacke Hearse"})})]}),"\n",(0,r.jsx)(t.p,{children:"or this:"}),"\n",(0,r.jsxs)("table",{className:"complexDataTableExamples cdtCentre",children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Name"})," ",(0,r.jsx)("th",{children:"Number of Children"})," ",(0,r.jsx)("th",{children:"Household Income"})," ",(0,r.jsx)("th",{children:"Is a Citizen?"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Hugo First"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"$45,000"}),(0,r.jsx)("td",{children:"Yes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Moda Lawn"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"$45,000"}),(0,r.jsx)("td",{children:"Yes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Kate Jupp"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"$45,000"}),(0,r.jsx)("td",{children:"No"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Ayfor Gott"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"$45,000"}),(0,r.jsx)("td",{children:"Yes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Justin Thyme"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"$45,000"}),(0,r.jsx)("td",{children:"Yes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Ray Member"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"$45,000"}),(0,r.jsx)("td",{children:"No"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Studie Harde"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"$45,000"}),(0,r.jsx)("td",{children:"Yes"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Slack Hearse"}),(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"$45,000"}),(0,r.jsx)("td",{children:"Yes"})]})]}),"\n",(0,r.jsx)(t.p,{children:"How do we store this data?  For example, let's look at our list of names above."}),"\n",(0,r.jsx)(t.p,{children:"One way would be to store each name in a variable.  We know we can store strings in variables,\nso maybe we could set up variables as follows:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"MJFname1 = 'Ida Noe'\nMJFname2 = 'Hugo First'\nMJFname3 = 'Moda Lawn'\nMJFname4 = 'Kate Jupp'\nMJFname5 = 'Ayfor Gott'\nMJFname6 = 'Justin Thyme'\nMJFname7 = 'Ray Member'\nMJFname8 = 'Studie Harde'\nMJFname9 = 'Slacke Hearse'\n"})}),"\n",(0,r.jsx)(t.p,{children:"Technically this works, but it raises some issues:"}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_05/womanwithbuckets.png",align:"left",size:"20%"}),"\n",(0,r.jsxs)(t.p,{children:["First, it's not going to scale very well.  Imagine needing to manage a list of 100, or 1,000 names.\nWe'd need 100 or 1,000 variables.  This is a lot of work and, specifically, a lot\nof ",(0,r.jsx)(t.em,{children:"repetitive"})," work. It's inefficient, time-consuming and error-prone."]}),"\n",(0,r.jsx)(t.p,{children:"Wouldn't it be nice if we could store all these names in\na single variable regardless of how many we had..."}),"\n",(0,r.jsxs)(t.p,{children:["Also, how would we manage displaying all the names?  For example, how would we display the list\nabove?  We'd have to list out each ",(0,r.jsxs)("code",{children:["MJFname",(0,r.jsx)("i",{children:"N"})]}),"\nvariable each time.  What happens when we add or\ndelete someone?  We need to create new variables and copy them throughout our code.  When we\ndelete names we'd have gaps in our sequencing.  How would we know the gap is there on purpose\nand not an error?"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_05/happywomanwithbucket.png",align:"right",size:"15%"}),"\n",(0,r.jsx)(t.p,{children:"This is unworkable, much like carrying 10 buckets around each with one thing inside, when what\nyou really want is to carry one bucket around with 10 things inside."}),"\n",(0,r.jsx)(t.p,{children:"If only we had a way of displaying all the names using a single variable and\njust added and removed names from it as we needed to."}),"\n",(0,r.jsx)(t.p,{children:"If only we could be as happy as the Happy Bucket Lady..."}),"\n",(0,r.jsx)(t.h2,{id:"introducing-complex-data-structures",children:"Introducing Complex Data Structures"}),"\n",(0,r.jsxs)(t.p,{children:["Complex data types are the answer to our problem.  Complex\ndata types, such as ",(0,r.jsx)(i.DisplayGlossaryItem,{item:"list",plural:!0})," and\n",(0,r.jsx)(i.DisplayGlossaryItem,{item:"dictionary",plural:!0})," give us  Happy Bucket Lady\nvibes.  This is because complex data types allow us to store more than one value in\na variable.  Even more so, complex data types also allow us to structure how we will store\nthe data.  For example, a list complex data type allows us to store data in sequential order,\nmuch like that 'List of names' table above.  Because complex data type allow us to do this,\nthey are often also referred to as ",(0,r.jsx)(t.strong,{children:"complex data structures"}),".  We will use both terms\ninterchangeably in this textbook."]})]})}function x(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);