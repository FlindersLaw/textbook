"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[2778],{5077:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>h,contentTitle:()=>d,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>m});const t=JSON.parse('{"id":"textbook/chapter_03/00-40","title":"Code Blocks","description":"Now that we\'ve learnt what variables are, what to store in them and how to test","source":"@site/docs/textbook/chapter_03/00-40.mdx","sourceDirName":"textbook/chapter_03","slug":"/textbook/chapter_03/00-40","permalink":"/textbook/docs/textbook/chapter_03/00-40","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Code Blocks"},"sidebar":"textbookSidebar","previous":{"title":"Testing Variables","permalink":"/textbook/docs/textbook/chapter_03/00-30"},"next":{"title":"Code and Mako","permalink":"/textbook/docs/textbook/chapter_03/00-50"}}');var s=n(4848),a=n(8453),r=n(2487);function i(e){const o={mermaid:"mermaid",...(0,a.R)(),...e.components};return(0,s.jsx)(o.mermaid,{value:"flowchart TD\n  id0(Ask for the user's name<br>and store in <code>MJFname</code>)\n  id0 --\x3e id1(Ask the user to input a chapter number<br>and store in <code>MJFchapter</code>)\n  id1 --\x3e id2{{Is <code>MJFname</code> one of the authors?}}\n  id2 -- Yes --\x3e id2a(Set <code>MJFauthor</code> to <code>True</code>)\n  id2 -- No --\x3e id4(Set <code>MJFauthor</code> to <code>False</code>)\n  id2a --\x3e id4a{{\"Is <code>MJFname</code> an author?<br>(ie: is <code>MJFauthor == True</code>)\"}}\n  id4 --\x3e id4a\n  id4a -- Yes --\x3e id3{{Does <code>MJFchapter</code> contain the<br>number of chapter written by <code>MJFname</code>?}}\n  id4a -- No --\x3e id4b(We won't deal with this for now)\n\n  id3 -- Yes --\x3e id5(Set <code>MJFchapter</code> to <code>True</code>)\n  id3 -- No --\x3e id6(Set <code>MJFchapter</code> to <code>False</code>)\n\n  %% Define styles for flowchart items.  We want to make comments yellow\n  %% and have a larger font size for regular items\n  classDef commentClass fill:#faffd6,text-align:left\n  classDef questionClass fill:#ffe6bc\n  classDef boundaryClass fill:#eeeeee,text-fill-color:#fff\n  classDef itemClass font-size:16pt\n  classDef leftListClass text-align:left\n\n  class id2,id3 questionClass\n  class if4b boundaryClass"})}function c(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}const l={title:"Code Blocks"},d=void 0,h={},m=[{value:"Introducing Code Blocks",id:"introducing-code-blocks",level:2},{value:"Writing good code blocks",id:"writing-good-code-blocks",level:2},{value:"One variable one block",id:"one-variable-one-block",level:3},{value:"Idempotence",id:"idempotence",level:3}];function u(e){const o={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.p,{children:"Now that we've learnt what variables are, what to store in them and how to test\nthem, how do we bring this all together?  How do we use variables 'in the real world'?"}),"\n",(0,s.jsxs)(o.p,{children:["Docassemble has two ways for us to use variables.  One is in ",(0,s.jsx)(r.DisplayGlossaryItem,{item:"codeblock",plural:!0}),"\nand another is by using ",(0,s.jsx)(r.DisplayGlossaryItem,{item:"mako",upper:!0}),"."]}),"\n",(0,s.jsx)(o.p,{children:"We will cover code blocks in this part of this chapter.  Mako is covered in the next part."}),"\n",(0,s.jsx)(o.h2,{id:"introducing-code-blocks",children:"Introducing Code Blocks"}),"\n",(0,s.jsxs)(o.p,{children:["We are already familiar with the idea of ",(0,s.jsx)(o.strong,{children:"blocks"}),".  A block is some code that\nis enclosed by ",(0,s.jsx)(o.code,{children:"---"})," characters.  For example:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-yml",children:"---\nquestion: Title\nsubquestion: |\n  This is a question block\n---\n"})}),"\n",(0,s.jsxs)(o.p,{children:["So far we have worked with ",(0,s.jsx)(r.DisplayGlossaryItem,{item:"questionblock",plural:!0}),". As we know,\nquestion blocks are used to display information to a user and to ask the user for information.\nAs we have also already discussed, we use Python to implement the decision-making part of our apps.\nThe way we tell Docassemble to carry out our decision-making logic is to place it into a code block."]}),"\n",(0,s.jsxs)(o.p,{children:["Code blocks are blocks containing Python code.  Like question blocks, code blocks can also be\n",(0,s.jsx)(r.DisplayGlossaryItem,{item:"mandatory"}),".  Also like question blocks, Docassemble will look for\na variable name inside a code block as part of its ",(0,s.jsx)(o.a,{href:"/docs/textbook/chapter_02/00-20#execution-order",children:"execution order"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Here's an example code block that sets the value of ",(0,s.jsx)(o.code,{children:"MJFauthor"})," to ",(0,s.jsx)(o.code,{children:"True"})," depending on what is in\nthe variable ",(0,s.jsx)(o.code,{children:"MJFname"}),"."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"---\ncode: |\n  if MJFname == 'Mark Ferraretto' or MJFname == 'James Scheibner':\n    MJFauthor = True\n  else:\n    MJFauthor = False\n---\n"})}),"\n",(0,s.jsxs)(o.p,{children:["If our app was looking for the value of ",(0,s.jsx)(o.code,{children:"MJFauthor"})," it would find this code block and execute it,\nmuch like how Docassemble looks for a variable in a question block and executes that block."]}),"\n",(0,s.jsx)(o.h2,{id:"writing-good-code-blocks",children:"Writing good code blocks"}),"\n",(0,s.jsx)(o.p,{children:"There are two basic principles to be mindful of when writing code blocks."}),"\n",(0,s.jsx)(o.h3,{id:"one-variable-one-block",children:"One variable one block"}),"\n",(0,s.jsxs)(o.p,{children:["Firstly, you should only contain enough code to set ",(0,s.jsx)(o.em,{children:"one"})," variable in a code block.  This means\nthat code blocks are usually short, maybe 10 lines or tens of lines.  If you find yourself writing\na 100-line code block that's probably a good indication you're doing too much work in one block."]}),"\n",(0,s.jsx)(o.p,{children:"For example, let's say we want to implement this logic flow:"}),"\n",(0,s.jsx)(c,{}),"\n",(0,s.jsx)(o.p,{children:"We could do this in a single code block, however we shouldn't do this:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",metastring:"showLineNumbers",children:"---\ncode: |\n  # There are the chapters that Mark wrote\n  # We assume that James wrote everything else\n  marks_chapters = [1, 2, 3, 5, 6, 7];\n  \n  # Check if MJFname is one of the authors\n  if MJFname == 'Mark Ferraretto' or MJFname == 'James Scheibner':\n    # Set MJFauthor to true if so\n    MJFauthor = True\n  else:\n    # If we're here then MJFname is not an author\n    MJFauthor = False\n  \n  # Now check the chapter numbers\n  # If we're an author and we're Mark\n  if MJFauthor and MJFname == 'Mark Ferraretto':\n      # ... and the chapter is one of ours\n      if MJFchapternumber in marks_chapters:\n        # ...then set to true\n        MJFchapter = True\n      else:\n        # ...otherwise set to false\n        MJFchapter = False\n  # Otherwise we might be an author and we're James\n  elif MJFauthor and MJFname == 'James Scheibner':\n    # We're here if we're James (ie: not Mark)\n    # So, if we're James and the chapter is not one of Mark's...\n    if MJFchapternumber not in marks_chapters:\n      # ...then it must be one of James' chapters\n      MJFchapter = True\n    else:\n      # ...otherwise, it's not\n      MJFchapter = False\n"})}),"\n",(0,s.jsxs)(o.p,{children:["The most imortant reason for not coding this way is that the code blocks sets two\nvariables: ",(0,s.jsx)(o.code,{children:"MJFauthor"})," and ",(0,s.jsx)(o.code,{children:"MJFchapter"}),".  This means the code block may be run twice\nand, clearly, it makes for a rather hard to read code block."]}),"\n",(0,s.jsxs)(o.admonition,{type:"note",children:[(0,s.jsxs)(o.p,{children:["This code block contains nested if statements which we discuss in ",(0,s.jsx)(r.DisplayChapter,{chatper:"chapter_04"}),"\nand also uses a ",(0,s.jsx)(r.DisplayGlossaryItem,{item:"list"}),", which is discussed in ",(0,s.jsx)(r.DisplayChapter,{chapter:"chapter_05"}),"."]}),(0,s.jsx)(o.p,{children:"The comments should provide you with enough commentary to describe the code without you having to read\nthese other chapters, although you are welcome to do so if you wish."})]}),"\n",(0,s.jsxs)(o.p,{children:["The better way to address this logic would be to break it out into two code blocks, one that sets\n",(0,s.jsx)(o.code,{children:"MJFauthor"}),", one that sets ",(0,s.jsx)(o.code,{children:"MJFchapter"}),".  For example, we would deal with ",(0,s.jsx)(o.code,{children:"MJFauthor"})," in this\ncode block:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",metastring:"showLineNumbers",children:"---\n# A lovely, short easy to read code block\ncode: |\n  # Check if MJFname is one of the authors\n  if MJFname == 'Mark Ferraretto' or MJFname == 'James Scheibner':\n    # Set MJFauthor to true if so\n    MJFauthor = True\n  else:\n    # If we're here then MJFname is not an author\n    MJFauthor = False\n"})}),"\n",(0,s.jsxs)(o.p,{children:["and then deal with ",(0,s.jsx)(o.code,{children:"MJFchapter"})," in a separate block:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",metastring:"showLineNumbers",children:"---\n# Long but not as long as before.  And at\n# least it deals with just one piece of logic\n# (and it would be much shorter without these comments)\ncode: |\n  # Our list of chapters as before\n  marks_chapters = [1, 2, 3, 5, 6, 7]\n\n  # If we're an author and we're Mark\n  if MJFauthor and MJFname == 'Mark Ferraretto':\n      # ... and the chapter is one of ours\n      if MJFchapternumber in marks_chapters:\n        # ...then set to true\n        MJFchapter = True\n      else:\n        # ...otherwise set to false\n        MJFchapter = False\n  # Otherwise we might be an author and we're James\n  elif MJFauthor and MJFname == 'James Scheibner':\n    # We're here if we're James (ie: not Mark)\n    # So, if we're James and the chapter is not one of Mark's...\n    if MJFchapternumber not in marks_chapters:\n      # ...then it must be one of James' chapters\n      MJFchapter = True\n    else:\n      # ...otherwise, it's not\n      MJFchapter = False\n  # Catchall if, for example MJFauthor is false or\n  # MJFname is not Mark or James.\n  else:\n    MJFchapter = False\n---\n"})}),"\n",(0,s.jsxs)(o.p,{children:["This makes for clearer coding and for more efficient execution as, in our example, Docassemble doesn't\nneed to go to the trouble of determining ",(0,s.jsx)(o.code,{children:"MJFchapter"})," when all it needs is the value of ",(0,s.jsx)(o.code,{children:"MJFauthor"}),"."]}),"\n",(0,s.jsx)(o.h3,{id:"idempotence",children:"Idempotence"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"https://en.wikipedia.org/wiki/Idempotence",children:"Idempotence"})," is a rather advanced IT concept that\nis often encountered in declarative languages such as Docassemble."]}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["See ",(0,s.jsx)(o.a,{href:"/docs/recipes/minimising_mandatory_blocks",children:"this discussion"})," on mandatory blocks and declarative sysystems."]})}),"\n",(0,s.jsx)(o.p,{children:"From our perspective this means two things:"}),"\n",(0,s.jsx)(o.p,{children:"Firstly, Docassemble may run our code block more than once 'behind the scenes' as it does what it needs to do\nto get the information it means."}),"\n",(0,s.jsx)(o.p,{children:"Secondly, because of this first point, we need to make sure that our code always yields the same result\nregardless of how many times our code block is run."}),"\n",(0,s.jsxs)(o.p,{children:["Idempotence becomes an issue when we deal with complex data structures, particularly\n",(0,s.jsx)(r.DisplayGlossaryItem,{item:"list",plural:!0}),", as we discuss in ",(0,s.jsx)(r.DisplayChapter,{chapter:"chapter_05"}),".  It\nusually becomes a problem when we add an item to a list.  For example this code block:"]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"---\ncode: |\n  # Do some stuff\n  # Do some more stuff\n  an_item = something\n\n  # Add an item to our list\n  our_list.append(an_item)\n\n  # Do some more stuff etc\n"})}),"\n",(0,s.jsxs)(o.p,{children:["We may expect this code block to run once only, but Docassemble may run it three or four times internally.\nAs a result ",(0,s.jsx)(o.code,{children:"an_item"})," may get added to our list three or four times instead of the one time we expected."]}),"\n",(0,s.jsx)(o.p,{children:"We usually guard against this by initialising our lists at the beginning of the code block ie:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-python",children:"---\ncode: |\n  # Initialise our list\n  our_list = [] # [] means an empty list\n\n  # Do some stuff\n  # Do some more stuff\n  an_item = something\n\n  # Add an item to our list\n  our_list.append(an_item)\n\n  # Do some more stuff etc\n"})}),"\n",(0,s.jsxs)(o.p,{children:["Now, each time this code block is run the list is initialised to an empty list, so we always know\nwhere we're starting from.  as a result we'll always end up with only one ",(0,s.jsx)(o.code,{children:"an_item"})," in our list."]}),"\n",(0,s.jsx)(o.p,{children:"Idempotence is rather complex and we don't need to go into it in more detail than this. For\npractical purposes keep this in mind, especially when working with code blocks and lists."}),"\n",(0,s.jsx)(o.admonition,{type:"info",children:(0,s.jsxs)(o.p,{children:["For more information on idempotence and a more complex discussion please\nrefer to the ",(0,s.jsx)(o.a,{href:"https://docassemble.org/docs/logic.html#idempotency",children:"Docassemble manual"})]})})]})}function p(e={}){const{wrapper:o}={...(0,a.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}}}]);