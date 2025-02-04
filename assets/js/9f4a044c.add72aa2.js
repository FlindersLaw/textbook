"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[3244],{9873:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"textbook/chapter_02/00-20","title":"Hello World 2 - Introducing Markdown and Mako","description":"Our existing Hello World program, while truly a software engineering masterpiece,","source":"@site/docs/textbook/chapter_02/00-20.mdx","sourceDirName":"textbook/chapter_02","slug":"/textbook/chapter_02/00-20","permalink":"/textbook/docs/textbook/chapter_02/00-20","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Hello World 2 - Introducing Markdown and Mako"},"sidebar":"textbookSidebar","previous":{"title":"Docassemble Syntax","permalink":"/textbook/docs/textbook/chapter_02/00-15"},"next":{"title":"Hello World 3 - Buttons and More Markdown","permalink":"/textbook/docs/textbook/chapter_02/00-30"}}');var o=s(4848),i=s(8453),a=s(8958),l=s(1428);const r={title:"Hello World 2 - Introducing Markdown and Mako"},d=void 0,c={},h=[{value:"Create a new file",id:"create-a-new-file",level:2},{value:"Make some changes",id:"make-some-changes",level:2},{value:"Line 6",id:"line-6",level:3},{value:"Variables",id:"variables",level:4},{value:"Mako",id:"mako",level:4},{value:"Markdown",id:"markdown",level:4},{value:"Putting Line 6 Together",id:"putting-line-6-together",level:4},{value:"Lines 10 to 12",id:"lines-10-to-12",level:3},{value:"Execution Order",id:"execution-order",level:2}];function u(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return l||m("Components",!1),l.DisplayChapter||m("Components.DisplayChapter",!0),l.DisplayDAButtons||m("Components.DisplayDAButtons",!0),l.DisplayGlossaryItem||m("Components.DisplayGlossaryItem",!0),l.DisplayImage||m("Components.DisplayImage",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Our existing ",(0,o.jsx)(n.a,{href:"./00-10",children:"Hello World"})," program, while truly a software engineering masterpiece,\nis somewhat impersonal.  What we ",(0,o.jsx)(n.em,{children:"really"})," want it to do is to display the user's name and,\nfor good measure, display their ",(0,o.jsx)(n.strong,{children:"name in bold"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Let's get to making that happen."}),"\n",(0,o.jsx)(n.h2,{id:"create-a-new-file",children:"Create a new file"}),"\n",(0,o.jsx)(n.p,{children:"First thing is to create a new file and copy the code over."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Before you create the new file, copy the existing code in the text editor.\nWe'll paste it into the new file shortly."}),"\n",(0,o.jsxs)(n.li,{children:["Click on the ",(0,o.jsx)(l.DisplayImage,{altText:"Add",imageURL:"/img/textbook/add_button.png",inline:!0}),"\nbutton and create a new file called ",(0,o.jsx)(n.code,{children:"hello_world2.yml"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Refer to how we did this ",(0,o.jsx)(n.a,{href:"00-10#your-first-program",children:"previously"}),"."]})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Paste the code you copied from ",(0,o.jsx)(n.code,{children:"hello_world.yml"})," into this new file and\npress ",(0,o.jsx)(l.DisplayDAButtons,{button:a.K1}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["Then press ",(0,o.jsx)(l.DisplayDAButtons,{button:a.Kn}),"\nto make sure the program still runs OK."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"make-some-changes",children:"Make some changes"}),"\n",(0,o.jsxs)(n.p,{children:["Edit the file in your playground and make it look like this.\nRemember to pay particular\nattention to ",(0,o.jsx)(n.a,{href:"00-15",children:"indents, spacing and dashes"})," and your braces and brackes (more on this ",(0,o.jsx)(n.a,{href:"00-20#mako",children:"below"}),")"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",metastring:'title="hello_world2.yml" showLineNumbers',children:"---\n# Our second program!  Now with personality!\nmandatory: True\nquestion: Hello World!\nsubquestion: |\n  Hello **${ MJFname }**\n\n  Welcome to Docassemble!\n---\nquestion: Name\nfields:\n    - What is your name?: MJFname\n---\n"})}),"\n",(0,o.jsx)(n.p,{children:"Let's work through this new code."}),"\n",(0,o.jsx)(n.h3,{id:"line-6",children:"Line 6"}),"\n",(0,o.jsxs)(n.p,{children:["Our boring old ",(0,o.jsx)(n.code,{children:"Hello,"})," looks a bit more complex.  We've actuall introduced\nthree new concepts here:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"variable"})]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(l.DisplayGlossaryItem,{item:"mako",upper:!0}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(l.DisplayGlossaryItem,{item:"markdown",upper:!0}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Let's work through each of these."}),"\n",(0,o.jsx)(n.h4,{id:"variables",children:"Variables"}),"\n",(0,o.jsxs)(n.p,{children:["The text ",(0,o.jsx)(n.code,{children:"MJFname"})," is a ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"variable"}),". We're going to use it store the user's name."]}),"\n",(0,o.jsx)(n.p,{children:"A variable is kind of like a bucket.  You can put stuff in a bucket and you can put stuff in a variable."}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsxs)(n.th,{children:[(0,o.jsx)(l.DisplayImage,{imageURL:"/img/textbook/chapter_02/variable.png",size:"60%"})," Variable"]}),(0,o.jsxs)(n.th,{children:[(0,o.jsx)(l.DisplayImage,{imageURL:"/img/textbook/chapter_02/bucket.png",size:"60%"}),"Bucket"]})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Used to store stuff"}),(0,o.jsx)(n.td,{children:"Used to store stuff"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Must have a name"}),(0,o.jsx)(n.td,{children:"Doesn't usually have a name"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Can (usually) only store one thing"}),(0,o.jsx)(n.td,{children:"Can store lots of stuff"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"A variable is useful because we can change what we put in it each time we run the program."}),"\n",(0,o.jsxs)(n.p,{children:["In our code, our variable is called ",(0,o.jsx)(n.code,{children:"MJFname"}),".  We want to store a name in\nour variable ",(0,o.jsx)(n.code,{children:"MJFname"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The variable's name is broken into two parts.  The ",(0,o.jsx)(n.code,{children:"name"})," part should be pretty clear.  It describes what we're going to store in this variable\n(ie: someone's name).  The ",(0,o.jsx)(n.code,{children:"MJF"})," part is the initials of the author of the code\n(Mark Ferraretto).  Adding initials to a variable is optional.  We don't ",(0,o.jsx)(n.em,{children:"need"})," to add ",(0,o.jsx)(n.code,{children:"MJF"})," to the beginning of this\nvariable's name, but if we do we get two benefits:"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"When we do a search through the code it's easy to identify where the variables are; and"}),"\n",(0,o.jsxs)(n.li,{children:["Our variables will never be named after a ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"reservedword"}),".  Docassemble attaches special meaning to certain\nwords, like ",(0,o.jsx)(n.code,{children:"if"}),", ",(0,o.jsx)(n.code,{children:"and"}),", ",(0,o.jsx)(n.code,{children:"for"})," and a number of others. By putting ",(0,o.jsx)(n.code,{children:"MJF"})," in front of the variable's name we'll ensure that we'll never accidentally use\na reserved word as a variable."]}),"\n"]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["The prefix to the variable's name doesn't necessarily need to be ",(0,o.jsx)(n.code,{children:"MJF"}),".  It\ncould be your own initials, or something that represents the program - we\ncould have used ",(0,o.jsx)(n.code,{children:"HWname"})," (for Hello World) instead of ",(0,o.jsx)(n.code,{children:"MJFname"}),"."]})}),"\n",(0,o.jsx)(n.h4,{id:"mako",children:"Mako"}),"\n",(0,o.jsxs)(n.p,{children:["At line 6 our variable ",(0,o.jsx)(n.code,{children:"MJFname"})," is enclosed by a pair of braces (",(0,o.jsx)(n.code,{children:"{}"}),") and a\ndollar sign (",(0,o.jsx)(n.code,{children:"$"}),").  This is called ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"mako",upper:!0}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["We use Mako to tell Docassemble to display what we have stored in a variable,\nor to display the ",(0,o.jsx)(n.strong,{children:"value"})," of a variable.  We will usually find Mako in a ",(0,o.jsx)(n.code,{children:"subquestion:"})," as we use ",(0,o.jsx)(n.code,{children:"subquestion"}),"s to display our detailed output in\nDocassemble."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Mako is used to display the value stored in a variable.  But how do we store\nsomething in a variable?  We discuss this in\n",(0,o.jsx)(l.DisplayChapter,{chapter:"chapter_03"}),"."]})}),"\n",(0,o.jsxs)(n.admonition,{type:"caution",children:[(0,o.jsxs)(n.p,{children:["Just like the ",(0,o.jsx)(n.a,{href:"00-15",children:"indents, spacing and dashes"}),", Docassemble is also very fussy about\nbrackets.",(0,o.jsx)(n.br,{}),"\n","There's few different kinds that you should remember:"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"{ }"})," are ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"brace",plural:!0})," or ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"curlybrace",plural:!0})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"[ ]"})," are ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"bracket",plural:!0})," or ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"squarebracket",plural:!0})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"( )"})," are ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"parentheses"})]}),"\n"]}),(0,o.jsx)(n.p,{children:"Make sure you remember these terms as we will use them extensively in this book."})]}),"\n",(0,o.jsx)(n.h4,{id:"markdown",children:"Markdown"}),"\n",(0,o.jsxs)(n.p,{children:["Finally, let's get to these asterisks (",(0,o.jsx)(n.code,{children:"*"}),")."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["In nerdy-nerdy coding land we call asterisks (ie: ",(0,o.jsx)(n.code,{children:"*"}),") 'stars'.  We'll be referring to\n",(0,o.jsx)(n.code,{children:"*"})," as 'stars' throughout this book."]})}),"\n",(0,o.jsxs)(n.p,{children:["If we place two stars around some text (eg ",(0,o.jsx)(n.code,{children:"**some text**"}),") Docassemble will\nformat that text as ",(0,o.jsx)(n.strong,{children:"bold"})," (ie: ",(0,o.jsx)(n.strong,{children:"some text"}),").  This double-star syntax is\npart of a formatting language called ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"markdown",upper:!0}),".  Markdown is very useful for doing simple text\nformatting.  In fact, this textbook is written using Markdown.  Markdown allows you to display text in ",(0,o.jsx)(n.strong,{children:"bold"})," and ",(0,o.jsx)(n.em,{children:"italics"}),".  It can create headings\nand subheadings (as we use in this book).  It can be used to display images\nand links to webpages."]}),"\n",(0,o.jsxs)(n.p,{children:["There are two great Markdown references.  The first is the ",(0,o.jsx)(n.a,{href:"../chapter_01/00-30#6-quick-reference",children:"Quick Reference"})," in your Playground.  There is also an\nofficial ",(0,o.jsx)(n.a,{href:"https://docs.github.com/en/get-started/writing-on-github",children:"Markdown manual"})," which contains a more comprehensive explanation of\nMarkdown."]}),"\n",(0,o.jsx)(n.h4,{id:"putting-line-6-together",children:"Putting Line 6 Together"}),"\n",(0,o.jsx)(n.p,{children:"Now that we know all about variables, Mako and Markdown we can see that line 6\ndoes the following:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"It displays the word 'Hello'"}),"\n",(0,o.jsxs)(n.li,{children:["It uses Mako to display the value in ",(0,o.jsx)(n.code,{children:"MJFname"}),", and"]}),"\n",(0,o.jsx)(n.li,{children:"It formats that value in bold using Markdown."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Next step then is to get the value of the variable.  We now know how to display\nwhat's in there, but how do we put a value into ",(0,o.jsx)(n.code,{children:"MJFname"}),"? Read on!"]}),"\n",(0,o.jsx)(n.h3,{id:"lines-10-to-12",children:"Lines 10 to 12"}),"\n",(0,o.jsxs)(n.p,{children:["Lines 10 to 12 are another ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"questionblock"}),".  Line 10 will display the text 'Name' as the title of\nthis question block.  Line 11 and 12 are what we use to collect and store data\ninto a variable - ",(0,o.jsx)(n.code,{children:"MJFname"})," in this case."]}),"\n",(0,o.jsxs)(n.p,{children:["Line 11 is a ",(0,o.jsx)(n.code,{children:"fields:"})," tag.  This tells Docassemble that this question block\nwill be used to collect data and store them in variables.  Line 12 is a ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"field"})," line.  A ",(0,o.jsx)(n.code,{children:"fields:"})," tag can be\nfollowed by many fields.  We only need one for now though."]}),"\n",(0,o.jsxs)(n.p,{children:["The field line in line 12 tells Docassemble to display a friendly ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"fieldlabel"})," ('What is your name?') and a text field to\ncollect the value for the variable ",(0,o.jsx)(n.code,{children:"MJFname"})," from the user."]}),"\n",(0,o.jsx)(n.h2,{id:"execution-order",children:"Execution Order"}),"\n",(0,o.jsxs)(n.p,{children:["Our code now has two question blocks, one at lines lines 3 to 8, and the second at lines 10 to 12.  Only the first block is a ",(0,o.jsx)(l.DisplayGlossaryItem,{item:"mandatoryquestionblock"})," though.  How does\nDocassemble know to execute the second block?"]}),"\n",(0,o.jsx)(n.p,{children:"Let's work through the execution step using this diagram."}),"\n",(0,o.jsx)(l.DisplayImage,{imageURL:"/img/textbook/chapter_02/execution_order1.png"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Docassemble scans the program code from the top of the file..."}),"\n",(0,o.jsx)(n.li,{children:"...until it finds a mandatory block.  It then executes the mandatory\nblock line by line."}),"\n",(0,o.jsxs)(n.li,{children:["When it enounters this Mako, Docassemble tries to substitute the value of\n",(0,o.jsx)(n.code,{children:"MJFname"})," into this line."]}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Only problem is that ",(0,o.jsx)(n.code,{children:"MJFname"})," doesn't have a value yet."]}),"\n",(0,o.jsxs)(n.li,{children:["So, Docassemble stops processing the Mandatory block and starts looking\nfor a block that sets a value for ",(0,o.jsx)(n.code,{children:"MJFname"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.ol,{start:"4",children:["\n",(0,o.jsxs)(n.li,{children:["Docassemble scans our code file again, now looking for a block that sets\na value for ",(0,o.jsx)(n.code,{children:"MJFname"}),".  It finds our question block at line 10 and processes\nthat block.  That causes this question to be asked:"]}),"\n"]}),"\n",(0,o.jsx)(l.DisplayImage,{imageURL:"/img/textbook/chapter_02/execution_order2.png"}),"\n",(0,o.jsxs)(n.ol,{start:"5",children:["\n",(0,o.jsxs)(n.li,{children:["Now that it has the value of ",(0,o.jsx)(n.code,{children:"MJFname"}),", Docassemble starts processing the\nmandatory question block again."]}),"\n",(0,o.jsxs)(n.li,{children:["Docassemble comes to this Mako again.  Now it ",(0,o.jsx)(n.em,{children:"does"})," have a value for\n",(0,o.jsx)(n.code,{children:"MJFname"}),", so it can display it.\nDocassemble scans the rest of the question block.  Because there's no other\nMako to process, Docassemble is ready to display this question block, which it does."]}),"\n"]}),"\n",(0,o.jsx)(l.DisplayImage,{imageURL:"/img/textbook/chapter_02/execution_order3.png"}),"\n",(0,o.jsxs)(n.ol,{start:"7",children:["\n",(0,o.jsx)(n.li,{children:"The execution stops now."}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"note",children:[(0,o.jsxs)(n.p,{children:["The reason execution stops at step 7 is because we haven't placed anything on the\nscreen, like a ",(0,o.jsx)(l.DisplayDAButtons,{button:a.K1,button_text:"Continue"}),"\nbutton, that allows the user to continue to run the application.  If we did have a ",(0,o.jsx)(l.DisplayDAButtons,{button:a.K1,button_text:"Continue"})," button\nDocassemble would have continued scanning the rest of our file looking for\nanother mandatory block to execute.  We don't have any other mandatory\nblocks.  Docassemble therefore would have scanned our code, not found any\nadditional mandatory blocks and would then have generated this error."]}),(0,o.jsx)(l.DisplayImage,{imageURL:"/img/textbook/chapter_02/execution_order4.png"}),(0,o.jsx)(n.p,{children:"As we generate more sophisticated code you'll see that we try to keep the\nnumber of mandatory blocks in our code to a minimum.  In fact, we should never\nhave more than two!"}),(0,o.jsx)(n.p,{children:"Keep this in  mind for now.  It will become highly relevant when you start\nworking on your projects."})]})]})}function x(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}function m(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);