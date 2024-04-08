"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[4214],{932:(e,s,n)=>{n.d(s,{Ay:()=>h,DD:()=>r,RM:()=>l,Ki:()=>d});var i=n(4848),t=n(8453),o=n(2487);function c(e){const s={a:"a",li:"li",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(o.DisplayChapter,{chapter:"chapter_05",pinpoint:"00-40",text:"Dictionaries"}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/docs/recipes/templates",children:"Templates"})}),"\n"]})}const r="Exercise 4c",d=(0,i.jsx)((function(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}),{}),l=[{value:"Background",id:"background",level:2},{value:"Your Task",id:"your-task",level:2},{value:"Code",id:"code",level:2}];function a(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"background",children:"Background"}),"\n",(0,i.jsxs)(s.p,{children:["In this exercise we're going to start looking at how to deal with ",(0,i.jsx)(s.a,{href:"https://docassemble.org/docs/fields.html#fields%20checkboxes",children:"checkboxes"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Checkboxes are Dictionaries (or ",(0,i.jsxs)(s.a,{href:"https://docassemble.org/docs/objects.html#DADict",children:[(0,i.jsx)(s.code,{children:"DADict"}),"s"]})," to be\nmore precise).  The key for each dictionary item is usually the text displayed to the user,\nand the value being either ",(0,i.jsx)(s.code,{children:"True"})," or ",(0,i.jsx)(s.code,{children:"False"})," depending on whether the checkbox item has been\nselected or not."]}),"\n",(0,i.jsxs)(s.p,{children:["Like lists, we can ",(0,i.jsx)(s.a,{href:"/docs/textbook/chapter_05/00-40#iteration",children:"iterate over dictionaries"}),", which is what\nwe'll do in this exercise."]}),"\n",(0,i.jsxs)(s.p,{children:["Because our dictionaries actually are the ",(0,i.jsx)(s.code,{children:"DADict"})," datatype we get some extra features over 'vanilla'\nPython dictionaries.  Specifically, we get a ",(0,i.jsx)(s.code,{children:"true_values()"})," method that we can use to generate a list\nof the selected dictionary items."]}),"\n",(0,i.jsxs)(s.p,{children:["In the example code below we've introduced a new question  block which displays the checkboxes and\nstores the results in ",(0,i.jsx)(s.code,{children:"CWpeople"}),".  The ",(0,i.jsx)(s.a,{href:"https://docassemble.org/docs/fields.html#choices",children:"choices"}),"\nfor the ",(0,i.jsx)(s.code,{children:"CWpeople"})," are supplied by a ",(0,i.jsx)(s.a,{href:"https://docassemble.org/docs/fields.html#code",children:(0,i.jsx)(s.code,{children:"code"})}),"\nspecifier which pull in our ",(0,i.jsx)(s.code,{children:"display_list"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"your-task",children:"Your Task"}),"\n",(0,i.jsx)(s.p,{children:"You need to complete these three parts to complete your task:"}),"\n",(0,i.jsx)(s.p,{children:"Modify the example code and:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["create a ",(0,i.jsx)(s.code,{children:"template"})," block that will display a list of all the ",(0,i.jsx)(s.em,{children:"selected"})," names as a bullet list;"]}),"\n",(0,i.jsxs)(s.li,{children:["create another ",(0,i.jsx)(s.code,{children:"template"})," that will display text if no names are selected; and"]}),"\n",(0,i.jsx)(s.li,{children:"modify the code to call the relevant template depending on whether any names are selected."}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["You can include ",(0,i.jsx)(s.code,{children:"%for"})," loops and ",(0,i.jsx)(s.code,{children:"%if"})," statements in templates.  Templates work in a similar\nway to content in a ",(0,i.jsx)(s.code,{children:"subquestion"})," part of a ",(0,i.jsx)(o.DisplayGlossaryItem,{item:"questionblock"}),"."]})}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsxs)(s.p,{children:["Your code is starting to get more sophisticated.  You might want to consider\n",(0,i.jsx)(s.a,{href:"/docs/recipes/structuring_code",children:"structuring your code"})," to help you stay organised."]})}),"\n",(0,i.jsx)(s.h2,{id:"code",children:"Code"}),"\n",(0,i.jsx)(s.p,{children:"Copy and paste this example code into your Playground and modify it to complete your task."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yml",metastring:"showLineNumbers",children:"# Coding Exercise 4c\n#\n# Iteration and Checkboxes\n---\nobjects:\n  - display_list: DAList.using(auto_gather=False)\n---\nmandatory: True\nquestion: Coding Workshop 4c\nsubquestion: |\n  1. Display the selected names in `CWpeople` as`\n  a bullet list. \n  2. Display a special screen if no names are selected.\n\n  ${CWpeople}\n\nbuttons:\n  - Exit: exit\n---\nquestion: Select people\nfields:\n  - Select any number of people: CWpeople\n    datatype: checkboxes\n    choices:\n      code: |\n        display_list\n---\n# This code block defines the list with the \n# items to display\ncode: |\n  # Always clear our the list before you start work\n  # on it in a code block\n  display_list.clear()\n\n  # Add the data\n  display_list.append('Ida Noe')\n  display_list.append('Hugo First'),\n  display_list.append('Moda Lawn'),\n  display_list.append('Kate Jupp'),\n  display_list.append('Ayfor Gott'),\n  display_list.append('Justin Thyme'),\n  display_list.append('Ray Member'),\n  display_list.append('Studie Harde'),\n  display_list.append('Slacke Hearse')\n\n  # Finish by setting gathered to True\n  display_list.gathered = True\n---\n"})})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},7932:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var i=n(4848),t=n(8453),o=n(932),c=n(2487);const r={title:"Exercise 4c"},d=void 0,l={id:"coding_exercises/coding_workshop_4/cw4c",title:"Exercise 4c",description:"",source:"@site/docs/coding_exercises/coding_workshop_4/cw4c.mdx",sourceDirName:"coding_exercises/coding_workshop_4",slug:"/coding_exercises/coding_workshop_4/cw4c",permalink:"/textbook/docs/coding_exercises/coding_workshop_4/cw4c",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Exercise 4c"},sidebar:"codingExercisesSidebar",previous:{title:"Exercise 4b",permalink:"/textbook/docs/coding_exercises/coding_workshop_4/cw4b"},next:{title:"Exercise 4d",permalink:"/textbook/docs/coding_exercises/coding_workshop_4/cw4d"}},a={},h=[...o.RM];function p(e){return(0,i.jsx)(c.DisplayInlineExercise,{video:o.Ki,children:(0,i.jsx)(o.Ay,{})})}function x(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p()}}}]);