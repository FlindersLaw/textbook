"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[1339],{8317:(e,t,n)=>{n.d(t,{Ay:()=>h,DD:()=>a,RM:()=>c,Ki:()=>r});var s=n(4848),o=n(8453),i=n(2487);function l(e){return(0,s.jsx)(i.DisplayChapter,{chapter:"chapter_02",pinpoint:"00-10",text:"Hello World 1"})}const a="Exercise 1a",r=(0,s.jsx)((function(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l()}),{}),c=[];function d(e){const t={code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Make your own hello world program in your Playground:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Add a new file"}),"\n",(0,s.jsxs)(t.li,{children:["Call it ",(0,s.jsx)(t.code,{children:"ABC_hello_world.yml"})," (Replace ",(0,s.jsx)(t.em,{children:"ABC"})," with your initials)"]}),"\n",(0,s.jsxs)(t.li,{children:["Create a single mandatory question block that displays 'Hello world' (base your code on ",(0,s.jsx)(t.code,{children:"hello_world.yml"})," in the video)./references/ex1a_references.mdx"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},7403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"textbook/chapter_02/00-15","title":"Docassemble Syntax","description":"You may want to book this part of the textbook. As you learn to write code you can","source":"@site/docs/textbook/chapter_02/00-15.mdx","sourceDirName":"textbook/chapter_02","slug":"/textbook/chapter_02/00-15","permalink":"/textbook/docs/textbook/chapter_02/00-15","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Docassemble Syntax"},"sidebar":"textbookSidebar","previous":{"title":"Hello World!","permalink":"/textbook/docs/textbook/chapter_02/00-10"},"next":{"title":"Hello World 2 - Introducing Markdown and Mako","permalink":"/textbook/docs/textbook/chapter_02/00-20"}}');var o=n(4848),i=n(8453),l=(n(5901),n(2487));n(8317);const a={title:"Docassemble Syntax"},r=void 0,c={},d=[{value:"General Principles",id:"general-principles",level:2},{value:"Code blocks",id:"code-blocks",level:2},{value:"Blocks that collect information",id:"blocks-that-collect-information",level:2}];function h(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return l||x("Components",!1),l.DisplayChapter||x("Components.DisplayChapter",!0),l.DisplayImage||x("Components.DisplayImage",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"You may want to book this part of the textbook. As you learn to write code you can\ncome back here to check that your syntax is correct"})}),"\n",(0,o.jsxs)(t.p,{children:["Docassemble's syntax is heavily dependent on ",(0,o.jsx)(t.em,{children:"where"})," code appears in a file."]}),"\n",(0,o.jsx)(t.p,{children:"You should ensure that:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"All tags and block separators must start at the left margin."}),"\n",(0,o.jsxs)(t.li,{children:["All content following a ",(0,o.jsx)(t.code,{children:": |"})," ",(0,o.jsx)(t.em,{children:"must"})," be indented by ",(0,o.jsx)(t.strong,{children:"two spaces"}),".  Docassemble\nwill not accept, one or three or five.  It must be two spaces."]}),"\n",(0,o.jsxs)(t.li,{children:["All tags are case sensitive.  ",(0,o.jsx)(t.code,{children:"Question:"})," is not the same as ",(0,o.jsx)(t.code,{children:"question:"}),".  If you input\n",(0,o.jsx)(t.code,{children:"Question:"})," Docassemble will generate a syntax error.  Case is important in Docassemble."]}),"\n",(0,o.jsxs)(t.li,{children:["There ",(0,o.jsx)(t.em,{children:"must"})," be a space between a ",(0,o.jsx)(t.code,{children:":"})," and a ",(0,o.jsx)(t.code,{children:"|"}),".  That is, ",(0,o.jsx)(t.code,{children:"subquestion: |"})," is fine.  But\n",(0,o.jsx)(t.code,{children:"subquestion:|"})," (no space), ",(0,o.jsx)(t.code,{children:"subquestion:  |"})," (two spaces) and ",(0,o.jsx)(t.code,{children:"Subquestion: |"}),"\n(two spaces but a capital 'S') will all generate syntax errors."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Docasemble is very fussy with syntax.  If you get errors when writing your code, you\nshould check syntax first.  Make sure your spaces, cases, braces, brackets,\ncolons, vertical bars, dashes are all correct."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Pressing the Tab key in the text editor automatically indents your text for you\nby two spaces."})}),"\n",(0,o.jsx)(t.h2,{id:"general-principles",children:"General Principles"}),"\n",(0,o.jsx)(t.p,{children:"Below are some extracts of Docassemble code. Don't worry if you don't understand what the\ncode is doing. We're just using this code to demonstrate how Docassemble uses spacing and\nindents to help it work out what the code you write means."}),"\n",(0,o.jsx)(t.p,{children:"Just focus on the spaces..."}),"\n",(0,o.jsx)(l.DisplayImage,{imageURL:"/img/textbook/chapter_02/syntax1.png"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Each block starts and finishes with ",(0,o.jsx)(t.code,{children:"---"})," which must be aligned against the left margin."]}),"\n",(0,o.jsx)(t.li,{children:"The primary 'tags' or 'specifiers' that set out what is in a block must also be aligned\nagainst the left margin"}),"\n",(0,o.jsxs)(t.li,{children:["Each specifier must finish with a colon (",(0,o.jsx)(t.code,{children:":"}),") and then be followed with text (depends on the specifier)"]}),"\n",(0,o.jsx)(t.li,{children:"Text that follows a specifier must be separated by a space after the colon"}),"\n",(0,o.jsxs)(t.li,{children:["Text in a ",(0,o.jsx)(t.code,{children:"subquestion"})," block must be indented by two spaces from the left margin"]}),"\n",(0,o.jsx)(t.li,{children:"Commands that display elements (such as buttons in this example) must be indented by\ntwo spaces."}),"\n",(0,o.jsxs)(t.li,{children:["Syntax for these commands is:","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Indent by two spaces"}),"\n",(0,o.jsxs)(t.li,{children:["a dash (",(0,o.jsx)(t.code,{children:"-"}),")"]}),"\n",(0,o.jsx)(t.li,{children:"one more space"}),"\n",(0,o.jsx)(t.li,{children:"A label (the text that will be displayed on a button in this case)"}),"\n",(0,o.jsxs)(t.li,{children:["a colon (",(0,o.jsx)(t.code,{children:":"}),") and then a space"]}),"\n",(0,o.jsx)(t.li,{children:"The command or variable. In this case we're describing buttons so the text is the\naction that Docassemble should take when the button is pressed"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"code-blocks",children:"Code blocks"}),"\n",(0,o.jsx)(t.p,{children:"We haven't covered what code blocks are yet but don't worry. Just read through the spacing and\nkeep it in your mind for when we do cover code blocks."}),"\n",(0,o.jsx)(l.DisplayImage,{imageURL:"/img/textbook/chapter_02/syntax2.png"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The content of a code block is python code."}),"\n",(0,o.jsx)(t.li,{children:"All code starts by being indented two spaces from the margin"}),"\n",(0,o.jsx)(t.li,{children:"Blank lines can be inserted in the code to aid in readability"}),"\n",(0,o.jsxs)(t.li,{children:["This code displays some 'if' statements.  These are discussed further\nin ",(0,o.jsx)(l.DisplayChapter,{chapter:"chapter_04"}),"."]}),"\n",(0,o.jsx)(t.li,{children:"The true branch and false branch of an if statement must be indented by a further two\nspaces"}),"\n",(0,o.jsx)(t.li,{children:"An 'if' or 'else' in the code block must be terminated with a colon"}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"blocks-that-collect-information",children:"Blocks that collect information"}),"\n",(0,o.jsx)(t.p,{children:"We're not up to these blocks yet either!  We will be soon though!"}),"\n",(0,o.jsx)(t.p,{children:"These are blocks that you will use to ask your end user question and collect information.\nIn this example we have a question block that is asking the user to specify who provided services\nto them. The user is presented with a list of radio buttons and they can make one choice."}),"\n",(0,o.jsx)(l.DisplayImage,{imageURL:"/img/textbook/chapter_02/syntax3.png"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The ",(0,o.jsx)(t.code,{children:"fields"})," specifier tells Docassemble that data is going to be collected (from data fields)"]}),"\n",(0,o.jsx)(t.li,{children:"Each data field must be indented by two spaces and start with a dash and a space ('- ')"}),"\n",(0,o.jsxs)(t.li,{children:["The first line of the data field (line 45 in our example) firstly sets out the label to be\ndisplayed on the screen next to the data field. In this particular case we don't want a label\nto be displayed, so we use the words ",(0,o.jsx)(t.code,{children:"no label"})]}),"\n",(0,o.jsxs)(t.li,{children:["The label (",(0,o.jsx)(t.code,{children:"no label"})," in our case) must be immediately followed by a colon and then a space (",(0,o.jsx)(t.code,{children:": "}),")"]}),"\n",(0,o.jsxs)(t.li,{children:["The variable where the data will be stored (",(0,o.jsx)(t.code,{children:"provieded_services"})," in this case) follows"]}),"\n",(0,o.jsx)(t.li,{children:"The next seven lines describe the type of data to be collected. The specifiers should be\naligned underneath the field label"}),"\n",(0,o.jsx)(t.li,{children:"The choices to be supplied to the radio button must be aligned a further two spaces in"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}function x(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);