"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[7131],{7099:(e,s,n)=>{n.d(s,{Ay:()=>x,DD:()=>a,RM:()=>h,Ki:()=>d});var t=n(4848),i=n(8453),o=n(2487);function r(e){const s={mermaid:"mermaid",...(0,i.R)(),...e.components};return(0,t.jsx)(s.mermaid,{value:"flowchart TD\n    id000(Welcome screen)\n    id000 --\x3e id00{{What kind of pet do you own?}}\n    id00 -- Pet is dog or cat --\x3e id0(continue...)\n    id00 -- Pet is something else --\x3e id01(Exit.<br>This app is just for<br>dog and cat owners)\n\n    %% Define styles for flowchart items.  We want to make comments yellow\n    %% and have a larger font size for regular items\n    classDef commentClass fill:#faffd6,text-align:left\n    classDef questionClass fill:#ffe6bc\n    classDef boundaryClass fill:#eeeeee,text-fill-color:#fff\n    classDef itemClass font-size:16pt\n    classDef leftListClass text-align:left\n\n    class id1,id4,id6,id7,id9 questionClass;\n    class id01,id2,id3,id5,id10,id11 boundaryClass;"})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}function l(e){const s={a:"a",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(o.DisplayChapter,{chapter:"chapter_03",pinpoint:"00-30#logic-tests",text:"Logic tests"}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/recipes/minimising_mandatory_blocks",children:"Minimising Mandatory Blocks"})}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(o.DisplayChapter,{chapter:"chapter_04"}),"\n"]}),"\n"]})}const a="Exercise 2a",d=(0,t.jsx)((function(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}),{}),h=[{value:"Welcome Screen",id:"welcome-screen",level:4},{value:"Question Screen",id:"question-screen",level:4},{value:"Exit Screen",id:"exit-screen",level:4},{value:"Code block",id:"code-block",level:4}];function p(e){const s={a:"a",code:"code",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"We are going to create this part of the app:"}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(s.p,{children:"We need to make:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"the welcome screen"}),"\n",(0,t.jsx)(s.li,{children:"A screen to ask the user what pet they own"}),"\n",(0,t.jsx)(s.li,{children:"An exit screen for users that don't own a dog or cat"}),"\n",(0,t.jsx)(s.li,{children:"some code to drive our app"}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"welcome-screen",children:"Welcome Screen"}),"\n",(0,t.jsxs)(s.p,{children:["Let's start with a ",(0,t.jsx)(o.DisplayGlossaryItem,{item:"mandatoryquestionblock"})," that\ndisplays a welcome screen explaining what this app does. You may also want to\ninclude a disclaimer stating that this app does not provide legal advice."]}),"\n",(0,t.jsx)(s.h4,{id:"question-screen",children:"Question Screen"}),"\n",(0,t.jsxs)(s.p,{children:["Create a ",(0,t.jsx)(o.DisplayGlossaryItem,{item:"questionblock"})," that asks the user what\nkind of pet they have.  They should be able to choose from this list:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Cat"}),"\n",(0,t.jsx)(s.li,{children:"Dog"}),"\n",(0,t.jsx)(s.li,{children:"Fish"}),"\n",(0,t.jsx)(s.li,{children:"Crocodile"}),"\n",(0,t.jsx)(s.li,{children:"Something else"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Use ",(0,t.jsx)(s.a,{href:"https://docassemble.org/docs/fields.html#radio",children:"radio buttons"})," to present the choices.  Also,\nuse ",(0,t.jsx)(s.a,{href:"https://docassemble.org/docs/fields.html#choices",children:"key/value pairs"})," to help in making the names\neasier for the user to read your code easier to process eg:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yml",children:"...\nfields:\n  - What is your pet?: W2pet\n    choices:\n      - Dog: dog\n      - Cat: cat\n      ...\n      - Something else: other\n---\n"})}),"\n",(0,t.jsx)(s.h4,{id:"exit-screen",children:"Exit Screen"}),"\n",(0,t.jsxs)(s.p,{children:["Create a ",(0,t.jsx)(o.DisplayGlossaryItem,{item:"questionblock"})," with an ",(0,t.jsx)(o.DisplayGlossaryItem,{item:"eventtag"}),"\nand set the event tag as ",(0,t.jsx)(s.code,{children:"W2ineligible"}),". The contents of this question block should explain to users\nthat"]}),"\n",(0,t.jsx)(s.h4,{id:"code-block",children:"Code block"}),"\n",(0,t.jsxs)(s.p,{children:["Just below your Welcome screen you should create a mandatory ",(0,t.jsx)(o.DisplayGlossaryItem,{item:"codeblock"}),".\nThe code block should use an if statement to check if the value of ",(0,t.jsx)(s.code,{children:"W2pet"}),". If ",(0,t.jsx)(s.code,{children:"W2pet"})," is ",(0,t.jsx)(s.code,{children:"cat"})," or ",(0,t.jsx)(s.code,{children:"dog"}),"\nthen we shouldn't do anything (that will come later).  Just put ",(0,t.jsx)(s.code,{children:"pass"})," under this part of the if statement.\nIf the user hasn't chosen cat or dog then the exit screen should be displayed."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yml",children:"---\nmandatory: True\nquestion: Welcome Screen\nsubquestion: |\n  text goes here\nbuttons:\n  - buttons go here\n---\n# This code block drives the application\nmandatory: True\ncode: |\n  # If statement that tests whether W2pet is a cat or dog goes here\n  if ......:\n---\n# Other blocks go here, including the block that\n# asks for W2pet\n"})})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},6154:(e,s,n)=>{n.d(s,{Ay:()=>u,DD:()=>d,RM:()=>p,Ki:()=>h});var t=n(4848),i=n(8453),o=n(2487);function r(e){const s={mermaid:"mermaid",...(0,i.R)(),...e.components};return(0,t.jsx)(s.mermaid,{value:"flowchart TD\n    id0{{Do you want to<br>sell your pet?}}\n    id0 -- No --\x3e id1{{Is your pet a working<br>livestock dog? s 4}}\n    id1 -- Yes --\x3e id2(Display microchip<br>and desex exemption:<br>s 42A, s42E)\n    id1 -- No --\x3e id3(Display microchip<br>and desex requirement:<br>s 42A, s 42D)\n    \n    id0 -- Yes --\x3e id4{{Are  you a breeder?}}\n    id4 -- Yes --\x3e id4a{{Are you registered?}}\n    id4a -- Yes --\x3e id6\n    id4a -- No --\x3e id5(You have to<br>register: s 69)\n\n    id4 -- No --\x3e id6(dummy screen for now)\n\n    %% Define styles for flowchart items.  We want to make comments yellow\n    %% and have a larger font size for regular items\n    classDef commentClass fill:#faffd6,text-align:left\n    classDef questionClass fill:#ffe6bc\n    classDef boundaryClass fill:#eeeeee,text-fill-color:#fff\n    classDef itemClass font-size:16pt\n    classDef leftListClass text-align:left\n\n    class id0,id1,id4,id4a,id7,id9 questionClass;\n    class id01,id2,id3,id5,id10,id11 boundaryClass;"})}function c(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}var l=n(7099);function a(e){const s={a:"a",li:"li",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(o.DisplayChapter,{chapter:"chapter_04",pinpoint:"00-40",text:"Nested If Statements"}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/recipes/templates",children:"Templates"})}),"\n"]})}const d="Exercise 2b",h=(0,t.jsx)((function(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}),{}),p=[];function x(e){const s={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Let's modify the code from ",l.DD," and build out the next part of our app.\nIn this exercise we will implement the following:"]}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(s.p,{children:"For this you will need these question screens:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"Ask if the user wants to sell their pet"}),"\n",(0,t.jsx)(s.li,{children:"Ask if the user is a breeder"}),"\n",(0,t.jsx)(s.li,{children:"Ask if the user's pet is a livestock dog"}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The chart shows three exit screens but you should consolidate the two left\nscreens into one using ",(0,t.jsx)(s.a,{href:"https://docassemble.org/docs/initial.html#template",children:"templates"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Once the screens are made,  update the mandatory code block with nested\nif statements to direct the user to the appropriate screen."}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["Your nested if statement should go where we had entered ",(0,t.jsx)(s.code,{children:"pass"})," in\n",l.DD,"."]})})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},9713:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>x,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var t=n(4848),i=n(8453),o=n(6154),r=n(2487);const c={title:"Exercise 2b"},l=void 0,a={id:"coding_exercises/coding_workshop_2/cw2b",title:"Exercise 2b",description:"",source:"@site/docs/coding_exercises/coding_workshop_2/cw2b.mdx",sourceDirName:"coding_exercises/coding_workshop_2",slug:"/coding_exercises/coding_workshop_2/cw2b",permalink:"/textbook/docs/coding_exercises/coding_workshop_2/cw2b",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Exercise 2b"},sidebar:"codingExercisesSidebar",previous:{title:"Exercise 2a",permalink:"/textbook/docs/coding_exercises/coding_workshop_2/cw2a"},next:{title:"Exercise 2c",permalink:"/textbook/docs/coding_exercises/coding_workshop_2/cw2c"}},d={},h=[...o.RM];function p(e){return(0,t.jsx)(r.DisplayInlineExercise,{video:o.Ki,children:(0,t.jsx)(o.Ay,{})})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p()}}}]);