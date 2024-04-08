"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[703],{5557:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=a(4848),s=a(8453),o=a(2487);const i={title:"Minimising Mandatory Blocks"},r=void 0,l={id:"recipes/minimising_mandatory_blocks",title:"Minimising Mandatory Blocks",description:"Docassemble follows what is known as a declarative programming paradigm.",source:"@site/docs/recipes/minimising_mandatory_blocks.mdx",sourceDirName:"recipes",slug:"/recipes/minimising_mandatory_blocks",permalink:"/textbook/docs/recipes/minimising_mandatory_blocks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Minimising Mandatory Blocks"},sidebar:"recipesSidebar",previous:{title:"Making a Project",permalink:"/textbook/docs/recipes/making_a_project"},next:{title:"Structuring Your Code",permalink:"/textbook/docs/recipes/structuring_code"}},c={},d=[{value:"What this means for us",id:"what-this-means-for-us",level:2},{value:"End screens",id:"end-screens",level:2},{value:"Example of best practice use of mandatory blocks",id:"example-of-best-practice-use-of-mandatory-blocks",level:2},{value:"More Information",id:"more-information",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Docassemble follows what is known as a ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Declarative_programming",children:"declarative programming paradigm"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Most programming languages are ",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Imperative_programming",children:"imperative"}),",\nthat is, the programmer uses the programming language to tell the program what to do and when to do it.\nIn Declarative systems the 'when to do it' is left up to the system.  The programmer programs the\n'what to do' - in Docassemble's case by using blocks such as\n",(0,t.jsx)(o.DisplayGlossaryItem,{item:"questionblock",plural:!0})," and ",(0,t.jsx)(o.DisplayGlossaryItem,{item:"codeblock",plural:!0}),",\namongst others, but it is up to Docassemble to decide which block should be called and when."]}),"\n",(0,t.jsx)(n.p,{children:"Programming in a declarative way is meant to reduce workload on the programmer, as they no longer\nneed to write the 'when' code, and should make the program more efficient to run, as the system\ncan calculate the optimal execution logic."}),"\n",(0,t.jsx)(n.h2,{id:"what-this-means-for-us",children:"What this means for us"}),"\n",(0,t.jsxs)(n.p,{children:["The declarative nature of Docassemble means we should try to direct it as little as possible.\nPractically, that means we should limit the number of ",(0,t.jsx)(o.DisplayGlossaryItem,{item:"mandatoryblock",plural:!0}),"\nto as few as possible. You will have seen this in ",(0,t.jsx)(o.DisplayChapter,{chapter:"chapter_01"})," where usually\nonly a single mandatory block is declared, with all other blocks marked as non-mandatory.  The\nsingle mandatory block is the starting point and we then let Docacssemble do the rest of the work\nin deciding which other (usually question) blocks to call and when."]}),"\n",(0,t.jsxs)(n.p,{children:["More sophisticated examples can be seen in the case studies in ",(0,t.jsx)(o.DisplayChapter,{chapter:"chapter_06"}),"\nand also the styling example worked through in ",(0,t.jsx)(o.DisplayChapter,{chapter:"chapter_07"}),".  The apps\nin both these chapters are reasonably sophisticated with many code, question and other blocks.  However,\nthey are driven by only two mandatory blocks: a question block to display an initial, or 'welcome' screen\nand then a ",(0,t.jsx)(o.DisplayGlossaryItem,{item:"codeblock"})," which controls the execution of the program."]}),"\n",(0,t.jsx)(n.p,{children:"This is a good model and it is one that students should aim to use in their exercises and apps\nthey develop."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Some ",(0,t.jsx)(n.a,{href:"/docs/textbook/chapter_07/00-30#chapter7yml",children:"examples"})," in this text do sometimes include\nadditional manadtory blocks but these are for ancillary purposes, such as to load fonts and\ngraphics.  The don't form part of the app's execution path per se."]})}),"\n",(0,t.jsx)(n.h2,{id:"end-screens",children:"End screens"}),"\n",(0,t.jsx)(n.p,{children:"You may also have noticed that in the Chapter 1 code examples, the single mandatory block\nis usually the final screen screen of the app.  Essentially, the app is being driven\nfrom the final outcome and it is up to Docassemble how to get there."}),"\n",(0,t.jsx)(n.p,{children:"This is an acceptable way for smaller programs.  However, most larger programs will require\nan initial screen explaining what the app does as well as a final screen.  One option then is to\nhave both opening and final screens as mandatory blocks:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"---\nmandatory: True\nquestion: Welcome Screen\nsubquestion: |\n  Description of the app\nbuttons:\n  - Continue: continue\n  - Exit: exit\n---\nmandatory: True\nquestion: Final Screen\nsubquestion: |\n  Display final resuts\n\n  Display ${variables} data. This will prompt\n  Docassemble to ask questions to populate the\n  variable data\nbuttons:\n  - Restart: restart\n  - Exit: exit\n---\n"})}),"\n",(0,t.jsx)(n.p,{children:"While this is possible, for more sophisticated applications it may be desirable\nto insert some control over what Docassemble does.  For example, while Docassemble\nmay ask questions in the most efficient order, that order may not be logical\nto the user, and a programmer may want to direct the order of questions to a degree."}),"\n",(0,t.jsxs)(n.p,{children:["Consequently, it is usually best practice ",(0,t.jsx)(n.em,{children:"not"})," to make the final screen mandatory and to\nuse a mandatory code block to drive the app instead."]}),"\n",(0,t.jsxs)(n.p,{children:["Instead, an ",(0,t.jsx)(n.a,{href:"https://docassemble.org/docs/fields.html#event",children:(0,t.jsx)(n.code,{children:"event"})})," tag should\nbe used and that event variable called from the mandatory code block.  It is best\nto write apps in this way even if all the mandatory code block does is call the\nfinal screen, as per ",(0,t.jsx)(n.a,{href:"/docs/textbook/chapter_06/filtering/00-70#mainyml",children:"this example"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"example-of-best-practice-use-of-mandatory-blocks",children:"Example of best practice use of mandatory blocks"}),"\n",(0,t.jsx)(n.p,{children:"This is an illustration of the best practice usage for mandatory blocks."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yml",children:"---\nmandatory: True\nquestion: Welcome Screen\nsubquestion: |\n  Information about app goes here\nbuttons:\n  - Continue: continue\n  - Exit: exit\n---\n# This code block drives the execution of the app\nmandatory: True\ncode: |\n  code_goes_here\n\n  # Finish by calling the final screen\n  final_screen\n---\nevent: final_screen\nquestion: Final Screen\nsubquestion: |\n  This is the end screen.  It will contain\n  data drawn from ${variables} and displayed\n  as Mako.  \nbuttons:\n  - Restart: restart\n  - Exit: exit\n---  \n"})}),"\n",(0,t.jsx)(n.h2,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(n.p,{children:["The Docassemble manual contains a detailed explanation on\n",(0,t.jsx)(n.a,{href:"https://docassemble.org/docs/logic.html",children:"how Docassemble executes programs"})," and the\ndeclarative programming paradigm."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);