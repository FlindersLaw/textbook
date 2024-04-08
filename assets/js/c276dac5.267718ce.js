"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[198],{389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>h});var o=n(4848),s=n(8453),i=n(2487);const a={title:"Introducing Iteration"},r=void 0,l={id:"textbook/chapter_05/00-30",title:"Introducing Iteration",description:"Introduction",source:"@site/docs/textbook/chapter_05/00-30.mdx",sourceDirName:"textbook/chapter_05",slug:"/textbook/chapter_05/00-30",permalink:"/textbook/docs/textbook/chapter_05/00-30",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Introducing Iteration"},sidebar:"textbookSidebar",previous:{title:"Lists",permalink:"/textbook/docs/textbook/chapter_05/00-20"},next:{title:"Dictionaries",permalink:"/textbook/docs/textbook/chapter_05/00-40"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Iteration and loops",id:"iteration-and-loops",level:2},{value:"&#39;For&#39; loop syntax",id:"for-loop-syntax",level:2},{value:"Python Format and Mako Format",id:"python-format-and-mako-format",level:2},{value:"More on iteration",id:"more-on-iteration",level:2}];function c(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["We will cover iteration in more detail in ",(0,o.jsx)(i.DisplayChapter,{chapter:"chapter_06"}),"\nbut we want to introduce it now as you will almost always use iteration and\nlists together."]}),"\n",(0,o.jsxs)(t.p,{children:["Iteration allows us to ",(0,o.jsx)(t.strong,{children:"re-use code without having to copy and paste"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Let's look at an example.  Let's take our ",(0,o.jsx)(t.code,{children:"bread_types"})," list, which looks like\nthis:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"bread_types = [\n    'sourdough',\n    'croissant',\n    'tip top',\n    'artisan',\n    'chocolate'\n]\n"})}),"\n",(0,o.jsx)(t.p,{children:"Let's say we want to print out a list that looks like this:"}),"\n",(0,o.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_05/bread_types1.png"}),"\n",(0,o.jsx)(t.p,{children:"Without iteration, we'd have to write something like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yml",metastring:"showLineNumbers",children:"---\nmandatory: True\nquestion: List of bread types\nsubquestion: |\n  List of bread types:\n  \n  * ${bread_types[0]}\n  * ${bread_types[1]}\n  * ${bread_types[2]}\n  * ${bread_types[3]}\n  * ${bread_types[4]}\n---\ncode: | \n  bread_types = [\n    'sourdough',\n    'croissant',\n    'tip top',\n    'artisan',\n    'chocolate'\n  ]\n---\n"})}),"\n",(0,o.jsx)(t.p,{children:"Firstly, look at lines 7 to 11 and you can see the type of copying\nand pasting that's involved.  We are simply copying the bulk of the\nfirst line:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"  * ${breadtypes[0]}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["and replacing the ",(0,o.jsx)(t.code,{children:"0"})," with the index as we go.  ",(0,o.jsx)(t.em,{children:"This kind of copying and pasting\nis a sure-fire indicator of the need to use iteration"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Second, imagine if we had 1,000 bread types.  Now our inconvenience\nbecomes a huge effort for a 1,000-element\nlist.  Not to mention the possibility of introducing errors."}),"\n",(0,o.jsxs)(t.p,{children:["Third, what happens if we wanted to add a new item to the list?  Or\nremove an item from the list?  Each time we make an alteration we need\nto modify the code in ",(0,o.jsx)(t.em,{children:"two"})," places - the list data (in the code block)\nand the list display commands in the mandatory question block.\nAgain, this is inefficient and it's very error prone."]}),"\n",(0,o.jsx)(t.p,{children:"The history of coding\nis littered with errors arising from unnecessary copying and pasting of code."}),"\n",(0,o.jsxs)(t.p,{children:["What we want is ",(0,o.jsx)(t.em,{children:"not"})," to tell Docassemble to display each item indivdually.  Instead, we want to tell Docassemble this:"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Display all the items in this list from top to bottom as a bullet list."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"That's a good summary.  Let's re-phrase it:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Display each item in this list in turn from top to bottom as a bullet list."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Make sense?  Let's re-phrase it again, this time using the 'I'-word:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Iterate"})," over each item in the list displaying each item as a bullet list item."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Still with us?  Let's re-phrase it in a more code-like way:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"For each"})," item ",(0,o.jsx)(t.em,{children:"in"})," the list, display it as a bullet list item."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"iteration-and-loops",children:"Iteration and loops"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(i.DisplayGlossaryItem,{item:"loop",plural:!0})," are what we call the code we\nuse to carry out iteration.  Many programming languages, Python included,\nhave more than one way to construct a loop.  But for the purposes of this\ntextbook we will focus on ",(0,o.jsx)(i.DisplayGlossaryItem,{item:"forloop",plural:!0}),"."]}),"\n",(0,o.jsx)(t.p,{children:"The basic premise of a 'for' loop can be stated as this:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"for each element in a list, do something"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Let's apply this to our re-prhasing exercise above.  Let's take that last\nstatement and repeat it here as we're going to use it:"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["for each ",(0,o.jsx)(t.strong,{children:"item"})," in ",(0,o.jsx)(t.strong,{children:"the list"}),", ",(0,o.jsx)(t.strong,{children:"display"})," it as a bullet list item"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In sequence what a 'for' loop does is this:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"It gets the items in the list"}),"\n",(0,o.jsx)(t.li,{children:"One at a time, it copies each item into a separate variable for processing"}),"\n",(0,o.jsx)(t.li,{children:"It then processes that separate variable and does whatever the 'do something'\ninstructions are."}),"\n",(0,o.jsx)(t.li,{children:"Once it's finished carring out the 'do something' part, then the next item\nis placed into the separate variable and the cycle repeats."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Let's look at a flowhcart of how this works:"}),"\n",(0,o.jsx)(t.mermaid,{value:"    flowchart TD;\n    id0[Start] --\x3e id1(Get all the elements in the list)\n    id1 --\x3e id2(Put the next element into a special variable)\n    id2 --\x3e id3('Do something' with that special variable)\n    id3 --\x3e id4{{Are there more list elements to process?}}\n    id4 -- Yes --\x3e id2\n    id4 -- No --\x3e id5[End]"}),"\n",(0,o.jsx)(t.h2,{id:"for-loop-syntax",children:"'For' loop syntax"}),"\n",(0,o.jsx)(t.p,{children:"The basic format of a for loop is as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"for item in list:\n    do_something\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The words ",(0,o.jsx)(t.code,{children:"for"})," and ",(0,o.jsx)(t.code,{children:"in"})," are ",(0,o.jsx)(i.DisplayGlossaryItem,{item:"reservedword",plural:!0}),".\nWhen Python sees these words in this order then it knows that it needs to\nprocess a for loop."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"item"})," and ",(0,o.jsx)(t.code,{children:"list"})," are ",(0,o.jsx)(i.DisplayGlossaryItem,{item:"variable",plural:!0}),".  ",(0,o.jsx)(t.code,{children:"list"}),"\nis our list data.  ",(0,o.jsx)(t.code,{children:"item"})," is new and Python uses that as the 'special variable'\nin which to place each list item.  Any variable name can be used here and good\npractice is to use ",(0,o.jsx)(t.code,{children:"element"})," or ",(0,o.jsx)(t.code,{children:"item"})," as a 'special variable' or to use a singluar\nnoun that reflects the list data.  For example, this is a valid loop to process\nour ",(0,o.jsx)(t.code,{children:"bread_types"})," list:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"for bread_type in bread_types:\n    do_something\n"})}),"\n",(0,o.jsx)(t.p,{children:"or"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"for a_bread_type in bread_types:\n  do_something\n"})}),"\n",(0,o.jsx)(t.p,{children:"The special variable can be any name.  It's best to choose a name that is descriptive."}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"do_something"})," part of the loop is the ",(0,o.jsx)(t.strong,{children:"body"})," of the loop.  It can contain\nmore than one line but, in the Python format at least (more on this below),\neach item of the loop body must be indented."]}),"\n",(0,o.jsxs)(t.p,{children:["Here's an example that copies the bread types from the ",(0,o.jsx)(t.code,{children:"bread_type"})," list into\nanother list (",(0,o.jsx)(t.code,{children:"good_types"}),").  The if statement in the code makes sure that\n",(0,o.jsx)(t.code,{children:"tip top"})," is not copied across.  At the end of the loop we add a new bread type\nto ",(0,o.jsx)(t.code,{children:"good_types"}),".  Note how that last line is not indented.  That means it is\nnot processed as part of the loop."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-python",children:"good_types = []     # Initialise good_types to an empty list\nfor bread_type in bread_types:\n    if bread_type != 'tip top':\n        good_types.append(bread_type)\ngood_types.append('foccaccia')\n"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["We use for loops to copy one list to another ",(0,o.jsx)(t.strong,{children:"a lot"}),".  It's a very useful\nway of filtering out unwanted elements from lists (like we just did above)."]})}),"\n",(0,o.jsx)(t.h2,{id:"python-format-and-mako-format",children:"Python Format and Mako Format"}),"\n",(0,o.jsxs)(t.p,{children:["So far we have discussed for loop syntax in 'Python format'.  That is, the\nsyntax is something a Python programmer would understand.  Practically, we'll\nsee this syntax in ",(0,o.jsx)(i.DisplayGlossaryItem,{item:"codeblock",plural:!0}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Docassemble provides another way to write for loops.  This ",(0,o.jsx)(t.strong,{children:"Mako Format"}),"\nis usually used in when the loop must be embedded in with other Markdown text,\nsuch as inside a ",(0,o.jsx)(i.DisplayGlossaryItem,{item:"subquestionblock",plural:!0}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Mako format loops work in the same way as regular for loops, and syntactically\nthey are quite similar, but they do contain some differences so Docassemble knows\nto treat them as loops and not just as text."}),"\n",(0,o.jsx)(t.p,{children:"The basic format is as follows:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"  %for item in list:\n  do_something\n  %endfor\n"})}),"\n",(0,o.jsxs)(t.p,{children:["In Mako format we must precede the ",(0,o.jsx)(t.code,{children:"for"})," with a ",(0,o.jsx)(t.code,{children:"%"})," (ie: ",(0,o.jsx)(t.code,{children:"%for"}),").  The ",(0,o.jsx)(t.code,{children:"%"}),"\ncharacter tells Docassemble that what follows is a command and not just the\nword 'for'."]}),"\n",(0,o.jsx)(t.p,{children:"The body of a loop can't be indented in Mako format.  That's because Markdown\ntreats indentation of four spaces or more as a special command."}),"\n",(0,o.jsxs)(t.p,{children:["Because the loop body can't be indented, Mako format introduces a ",(0,o.jsx)(t.code,{children:"%endfor"})," line\nto delimit the end of the loop."]}),"\n",(0,o.jsxs)(t.p,{children:["Similarly to the Python format, everything between ",(0,o.jsx)(t.code,{children:"%for"})," and ",(0,o.jsx)(t.code,{children:"%endfor"})," constitutes\nthe loop body."]}),"\n",(0,o.jsxs)(t.p,{children:["Mako format loops are used most commonly in ",(0,o.jsx)(i.DisplayGlossaryItem,{item:"subquestionblock",plural:!0}),"\nand are usually used to display items in a table, or to 'dress up' items.\nA good example is our original issue - formatting list items as a bullet list!\nWe can do that using this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"  %for bread_type in bread_types:\n  * ${bread_type}\n  %endfor\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The body of the loop adds a ",(0,o.jsx)(t.code,{children:"* "})," before each bread type, which is the\nmarkdown for displaying a line as a bullet list item."]}),"\n",(0,o.jsx)(t.p,{children:"Let's take that example and plug it back into our original code:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yml",metastring:"showLineNumbers",children:"---\nmandatory: True\nquestion: List of bread types\nsubquestion: |\n  List of bread types:\n  \n  %for bread_type in bread_types:\n  * ${bread_type}\n  %endfor\n---\ncode: | \n  bread_types = [\n    'sourdough',\n    'croissant',\n    'tip top',\n    'artisan',\n    'chocolate'\n  ]\n---\n"})}),"\n",(0,o.jsxs)(t.p,{children:["First thing worth noting is that we've cut down the number of lines of code to\ndisplay the bullet list from five to three. More importantly though, those same\nthree lines of code will display a list containing ",(0,o.jsx)(t.em,{children:"any number"})," of bread types.\nMoreso, as we change the number of items in ",(0,o.jsx)(t.code,{children:"bread_types"})," we can leave our\nloop code unchanged."]}),"\n",(0,o.jsx)(t.p,{children:"We are officially in code efficiency nirvana."}),"\n",(0,o.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_05/codeefficiencynirvana.png",size:"65%"}),"\n",(0,o.jsx)(t.h2,{id:"more-on-iteration",children:"More on iteration"}),"\n",(0,o.jsxs)(t.p,{children:["Iteration is one of the most powerful coding concepts you will learn.  We have\nonly touched on iteration in this chapter.  Docassemble provides a rich set of\ntools to iterate over list data, including ",(0,o.jsx)(t.a,{href:"https://docassemble.org/docs/initial.html#table",children:"table blocks"}),"\nand ",(0,o.jsx)(t.a,{href:"https://docassemble.org/docs/groups.html",children:"groups"}),".  We will cover these\nin more detail in ",(0,o.jsx)(i.DisplayChapter,{chapter:"chapter_06"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Iteration and lists go hand-in-hand.  Lists are how data is provided to iterate oveIteration and lists go hand-in-hand.  Lists are how data is provided to iterate over.\nWe will usually go to great lengths to take data that is not in a list and\nsomehow copy, filter or otherwise convert it into a list so that we can take\nadvantage of iteration."}),"\n",(0,o.jsx)(t.admonition,{title:"Finally...",type:"caution",children:(0,o.jsxs)(t.p,{children:["If you are deep in your coding and you find your self copying and pasting the\nsame lines of code over and over while making small changes... ",(0,o.jsx)(t.strong,{children:"Don't!!"}),"\nThat's a good indication that you need to get your data into a list and\nuse iteration to process it."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);