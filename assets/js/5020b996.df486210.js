"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[2096],{3373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>h});var i=t(4848),s=t(8453),o=(t(5901),t(2487));const a={title:"Hello World 4 - More Mako, Multiple Questions, Tables"},l=void 0,r={id:"textbook/chapter_02/00-42",title:"Hello World 4 - More Mako, Multiple Questions, Tables",description:"{/ Certain parts have been commented out as we are not currently using GitHub /}",source:"@site/docs/textbook/chapter_02/00-42.mdx",sourceDirName:"textbook/chapter_02",slug:"/textbook/chapter_02/00-42",permalink:"/textbook/docs/textbook/chapter_02/00-42",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Hello World 4 - More Mako, Multiple Questions, Tables"},sidebar:"textbookSidebar",previous:{title:"Hello World 3 - Buttons and More Markdown",permalink:"/textbook/docs/textbook/chapter_02/00-30"},next:{title:"Hello World 5 - Introducing Jinja",permalink:"/textbook/docs/textbook/chapter_02/00-50"}},d={},h=[{value:"Our Code",id:"our-code",level:2},{value:"The Second Question Block",id:"the-second-question-block",level:2},{value:"Presenting Choices in a Question",id:"presenting-choices-in-a-question",level:3},{value:"Line 34",id:"line-34",level:4},{value:"Lines 35 to 38",id:"lines-35-to-38",level:4},{value:"The Mandatory Block",id:"the-mandatory-block",level:2},{value:"More Markdown",id:"more-markdown",level:3},{value:"Line 8",id:"line-8",level:4},{value:"Displaying Output in a Table",id:"displaying-output-in-a-table",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components},{Details:t}=n;return o||p("Components",!1),o.DisplayGlossaryItem||p("Components.DisplayGlossaryItem",!0),o.DisplayImage||p("Components.DisplayImage",!0),t||p("Details",!0),(0,i.jsxs)(i.Fragment,{children:["\n","\n",(0,i.jsxs)(n.p,{children:["Up to now, our hello world programs have asked us to type in our full name.\nHowever, what we ",(0,i.jsx)(n.em,{children:"really"})," want is to break our name out into\nfirst name and last name.  What we also want to do is collect\nour 'saultation', that is, whether we're addressed as 'Mr', 'Ms', 'Dr' etc."]}),"\n",(0,i.jsx)(n.p,{children:"Let's see how we do this"}),"\n",(0,i.jsx)(n.h2,{id:"our-code",children:"Our Code"}),"\n","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:"showLineNumbers",children:"---\n# My first Docassemble program\nmandatory: True\nquestion: Hello World!\nsubquestion: |\n  ### Welcome to Docassemble!\n\n  Dear ${ MJFsalutation + ' ' + MJFlastname },\n\n  This is a quick introduction to Markdown.\n\n  Two lines for a line break\n  because a single line doesn't break at all.\n\n  - Here's a list\n  - with some items\n  - in it\n\n  **Here's some bold text** and *text in italics*.\n\n  Column1|Column2\n  -------|-------\n  Salutation|${ MJFsalutation }\n  First Name|${ MJFfirstname }\n  Last Name|${ MJFlastname }\nbuttons:\n  - I'm done: exit\n    url: https://flinders.edu.au\n  - Do it again: restart\n---\nquestion: Name\nfields:\n  - Salutation: MJFsalutation\n    choices:\n      - Dr\n      - Mr\n      - Mrs\n      - Ms\n  - First Name: MJFfirstname\n  - Last Name: MJFlastname\n---\n"})}),"\n",(0,i.jsx)(n.h2,{id:"the-second-question-block",children:"The Second Question Block"}),"\n",(0,i.jsxs)(n.p,{children:["One thing that stands out in the second question block is that we're not asking\none question.  Now we're asking three.  You can see each of lines 33, 39 and 40\nlook similar to the single question we asked in our previous iterations of\n",(0,i.jsx)(n.code,{children:"hello world"}),", that is, a dash, a label and a variable."]}),"\n",(0,i.jsx)(n.p,{children:"So, first thing to take away from this example is that we can ask more than\none question in a question block.  Here we're asking three."}),"\n",(0,i.jsx)(n.p,{children:"The second and third questions, on lines 39 and 40 respectively are in a\nformat we've seen already and they do what we would expect: provide a label\nand text field to ask for our first and last names respectively."}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_02/hello_world4-1.png"}),"\n",(0,i.jsxs)(n.p,{children:["That first question field though, the one that collects the value of\n",(0,i.jsx)(n.code,{children:"MJFsalutation"}),", that looks more interesting.  Let's look at that."]}),"\n",(0,i.jsx)(n.h3,{id:"presenting-choices-in-a-question",children:"Presenting Choices in a Question"}),"\n",(0,i.jsx)(n.p,{children:"Again, line 33 looks familiar to us: dash, label, variable.  What follows is\nnew though.  Let's go through this:"}),"\n",(0,i.jsx)(n.h4,{id:"line-34",children:"Line 34"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    choices:\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Line 34 gives Docassemble more information about the question on line 33.\nWe can tell this as the word ",(0,i.jsx)(n.code,{children:"choices"})," is aligned under ",(0,i.jsx)(n.code,{children:"Salutation"}),"."]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["We've seen this alignment, or 'identation' already when we set up\na ",(0,i.jsx)(n.a,{href:"./00-30#line-18",children:"link for the exit button"})," in our ",(0,i.jsx)(n.code,{children:"hello_world3.yml"}),"."]}),(0,i.jsx)(n.p,{children:"Docasemble uses indentation to work out whether the next line relates to\nthe line above it (as line 34 relates to line 33) or describes a new element\n(as lines 33, 39 and 40 do)."})]}),"\n",(0,i.jsx)(n.h4,{id:"lines-35-to-38",children:"Lines 35 to 38"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    choices:\n      - Dr\n      - Mr\n      - Mrs\n      - Ms\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When Docassemble sees a ",(0,i.jsx)(n.code,{children:"choices"})," keyword under a field it will present the\nuser with a list of choices to select from.  This list is supplied in lines\n35 to 38.  Each dash indicates a new list item.   The user will be presented\nwith this list and will be invited to select one."]}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_02/hello_world4-2.png"}),"\n",(0,i.jsx)(n.p,{children:"By default, a question field with choices that appears with other fields in\na question block will be presented as a drop-down menut, as ours is.  It's also\npossible to display choices as radio buttons or even as icons.  We will\ncover these alternatives further in this textbook."}),"\n",(0,i.jsx)(n.h2,{id:"the-mandatory-block",children:"The Mandatory Block"}),"\n",(0,i.jsx)(n.p,{children:"Our mandatory question block at lines 3 to 30 has a bit that's familiar\nand introduces some new content as well."}),"\n",(0,i.jsx)(n.p,{children:"Let's cover the familiar first"}),"\n",(0,i.jsx)(n.h3,{id:"more-markdown",children:"More Markdown"}),"\n",(0,i.jsx)(n.p,{children:"Lines 6, 7 and 9 to 19 are simply Markdown that we  already know and love.\nWe have already covered lists, bolding and itallicising text.  Refer to the\nExample Block in your Playground for more examples of these and how they work."}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:(0,i.jsx)(n.p,{children:"How Markdown recognises new paragraphs"})}),(0,i.jsx)(n.p,{children:"Note that lines 12 and 13 contain two lines of text.  However, when the\nprogram runs, these two lines will be displayed as a single line of text."}),(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_02/hello_world4-3.png"}),(0,i.jsx)(n.p,{children:"In order to create a new paragraph in Markdown you must have a blank line\nbetween text."})]}),"\n",(0,i.jsx)(n.h4,{id:"line-8",children:"Line 8"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  Dear ${ MJFsalutation + ' ' + MJFlastname},\n"})}),"\n",(0,i.jsxs)(n.p,{children:["We  have seen Mako to display a variable ",(0,i.jsx)(n.a,{href:"./00-20",children:"before"})," but this is more\ncomplex.  Let's break this Mako down."]}),"\n",(0,i.jsxs)(n.p,{children:["This Mako is displaying three elements all joined together.  The plus (",(0,i.jsx)(n.code,{children:"+"}),")\nsign is a joining operator in ",(0,i.jsx)(o.DisplayGlossaryItem,{item:"python"}),",\nthat is, we use it to join variables together and display them as a single\nline, or ",(0,i.jsx)(o.DisplayGlossaryItem,{item:"string"})," of text."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["When we evaluate Mako we are actually evaluating very\nsmall bits of ",(0,i.jsx)(o.DisplayGlossaryItem,{item:"python"})," code."]})}),"\n",(0,i.jsxs)(n.p,{children:["So, ",(0,i.jsx)(n.code,{children:"MJFsalutation + ' ' + MJFlastname"})," takes the value of ",(0,i.jsx)(n.code,{children:"MJFsalutation"}),",\njoins it to a single whitespace (",(0,i.jsx)(n.code,{children:"' '"}),") and then joins that to ",(0,i.jsx)(n.code,{children:"MJFlastname"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If, for example, ",(0,i.jsx)(n.code,{children:"MJFsalutation"})," was 'Mr' and ",(0,i.jsx)(n.code,{children:"MJFlastname"})," was set to 'Smith'\nthen ",(0,i.jsx)(n.code,{children:"MJFsalutation + ' ' + MJFlastname"})," would display ",(0,i.jsx)(n.code,{children:"Mr Smith"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Python isn't smart enough to separate words, which is why we need to join\na space character between ",(0,i.jsx)(n.code,{children:"MJFsalutation"})," and ",(0,i.jsx)(n.code,{children:"MJFlastname"}),".  If all we did\nwas to evaluate ",(0,i.jsx)(n.code,{children:"MJFsalutation + MJFlastname"})," (which makes more sense to\nus humans!) we would end up with ",(0,i.jsx)(n.code,{children:"MrSmith"})," and not ",(0,i.jsx)(n.code,{children:"Mr Smith"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["Finally, at the end of that Mako, and sitting outside the right curly brace\n(",(0,i.jsx)(n.code,{children:"}"}),") is a comma (",(0,i.jsx)(n.code,{children:","}),").  Because that sits outside the Mako braces it is\ndisplayed as a comma, just like 'Dear' at the beginning of the line is also\ndisplayed literally."]}),"\n",(0,i.jsx)(n.h3,{id:"displaying-output-in-a-table",children:"Displaying Output in a Table"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-markdown",children:"  Column1|Column2\n  -------|-------\n  Salutation|${ MJFsalutation }\n  First Name|${ MJFfirstname }\n  Last Name|${ MJFlastname }\n"})}),"\n",(0,i.jsx)(n.p,{children:"Markdown allows you to display information in a table.  Once again, the\nExample Block in your Playground is your friend."}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_02/hello_world4-4.png"}),"\n",(0,i.jsx)(n.p,{children:"Some rules worth noting about Markdown Tables:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"There must be a blank line before the table commands.  Otherwise, Markdown\nwill treat your table as regular text and display something ugly"}),"\n",(0,i.jsxs)(n.li,{children:["The first line (",(0,i.jsx)(n.code,{children:"Column1|Column2"}),") sets out the number of columns in\nyour table and also the column header names.  In this example we're calling\nour coulumns 'Column 1' and 'Column 2'. Each column is separated by a vertical\nbar (",(0,i.jsx)(n.code,{children:"|"}),") or 'pipe'"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The veritcal bar character (",(0,i.jsx)(n.code,{children:"|"}),") is called a pipe in coding-land"]})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["The second line separates the columns from the data.  The line consists of\nonly dashes (",(0,i.jsx)(n.code,{children:"-"}),") and pipes (",(0,i.jsx)(n.code,{children:"|"}),").The number of\npipes in the second line should match the number of pipes in the first line."]}),"\n",(0,i.jsxs)(n.li,{children:["The following three lines are the data for the table row.  Each line can be\nbroken down into three parts:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"data for the first column"}),"\n",(0,i.jsxs)(n.li,{children:["a pipe (",(0,i.jsx)(n.code,{children:"|"}),")"]}),"\n",(0,i.jsx)(n.li,{children:"data for the second column"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Markdown tables are a simple (if hard to read) way of displaying output in\na more readable form."}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"Line 22 has a sufficient number of dashes so that the pipe lines up with\nthe pipe in line 21.  This is not necessary.  This syntax is also valid:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  Column1|Column2\n  ---|---\n"})}),(0,i.jsx)(n.p,{children:"It doesn't look as neat though."})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function p(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);