"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[238],{9585:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>T,contentTitle:()=>E,default:()=>I,frontMatter:()=>C,metadata:()=>D,toc:()=>q});var s=t(5893),i=t(1151),o=t(9853);function c(e){const n={a:"a",li:"li",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.DisplayChapter,{chapter:"chapter_04",pinpoint:"00-20",text:"If Statements"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(o.DisplayChapter,{chapter:"chapter_04",pinpoint:"00-40",text:"Nested if Statements"}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/recipes/templates",children:"Templates"})}),"\n"]})}function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Coding Exercise 4c\n#\n# Displaying a list of templates\n---\ninclude:\n  - cw4c_code.yml\n  - cw4c_questions.yml\n  - cw4c_templates.yml\n---\n# Our welcome screen\nmandatory: True\nquestion: Coding Workshop 4b\nsubquestion: |\n  In this exercise we look at a `checkboxes` data type and use iteration\n  to display each element in our variable.\n\n  Checkboxes are dictionaries.  Each checkbox item is the key and the value of\n  each item is `True` or `False` depening on whether that item has been checked or not.\n\n  Even though a checkbox is a dictionary, we can still treat it as a list by iterating\n  over its keys.\nbuttons:\n  - Continue: continue\n---\n# Our mandatory code block. It just calls the final screen\nmandatory: True\ncode: |\n  final_screen\n---\n# Our final screen\nevent: final_screen\nquestion: Final Screen\nsubquestion: |\n  Display each favourite thing\n\n  ${favourite_things}\nbuttons:\n  - Exit: exit\n  - Restart: restart\n---\n"})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}function l(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Coding Exercise 4c\n#\n# Displaying a list of templates\n---\ncode: |\n  temp = []\n  # We iterate over all of the favourite things\n  for item in favourite_things.keys():\n    # First we check if this favourite thing is selected\n    if favourite_things[item]:\n      # If it is selected we add the appropriate template to temp\n      if item == 'a_raindrops':\n        temp.append(t_raindrops)\n      elif item == 'b_kittens':\n        temp.append(t_kittens)\n      # Add the rest of the elifs here\n\n      else:\n        # Add a call to t_error as a fallback\n        pass\n\n  # Always assigne the temp variable to the 'real' variable last. \n  # This guarantees that Docassemble always runs the entire code block\n  template_list = temp\n---\n"})})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}function h(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Coding Exercise 4c\n#\n# Displaying a list of templates\n---\ninclude:\n  - cw4c_code.yml\n  - cw4c_questions.yml\n  - cw4c_templates.yml\n---\n# Our welcome screen\nmandatory: True\nquestion: Coding Workshop 4b\nsubquestion: |\n  In this exercise we look at a `checkboxes` data type and use iteration\n  to display each element in our variable.\n\n  Checkboxes are dictionaries.  Each checkbox item is the key and the value of\n  each item is `True` or `False` depening on whether that item has been checked or not.\n\n  Even though a checkbox is a dictionary, we can still treat it as a list by iterating\n  over its keys.\nbuttons:\n  - Continue: continue\n---\n# Our mandatory code block. It just calls the final screen\nmandatory: True\ncode: |\n  final_screen\n---\n# Our final screen\nevent: final_screen\nquestion: Final Screen\nsubquestion: |\n  Display each favourite thing\n\n  % for item in template_list:\n  #### ${item.subject}\n  ${item}\n  % endfor\nbuttons:\n  - Exit: exit\n  - Restart: restart\n---\n"})})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}function m(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"# Coding Exercise 4c\n#\n# Displaying a list of templates\n---\ncode: |\n  temp = []\n  # We iterate over all of the favourite things\n  for item in favourite_things:\n    # First we check if this favourite thing is selected\n    if favourite_things[item]:\n      # If it is selected we add the appropriate template to temp\n      if item == 'a_raindrops':\n        temp.append(t_raindrops)\n      elif item == 'b_kittens':\n        temp.append(t_kittens)\n      elif item == 'c_kettles':\n        temp.append(t_kettles)\n      elif item == 'd_mittens':\n        temp.append(t_mittens)\n      elif item == 'e_packages':\n        temp.append(t_packages)\n      else:\n        error_subject = 'Unknown item'\n        error_content = 'Do not have a template for item: `{}`'.format(item)\n        temp.append(t_error)\n\n  # Always assigne the temp variable to the 'real' variable last. \n  # This guarantees that Docassemble always runs the entire code block\n  template_list = temp\n---\n"})})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}const x=[];function j(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:"---\nquestion: Things you like\nfields:\n  - What are a few of your favourite things?: favourite_things\n    datatype: checkboxes\n    choices:\n      - Raindrops on roses: a_raindrops\n      - Whiskers on kittens: b_kittens\n      - Bright copper kettles: c_kettles\n      - Warm woollen mittens: d_mittens\n      - Brown paper packages tied up with strings: e_packages\n---\n"})})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}const f=[];function b(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yml",children:'# Each of these templates downloads an image from the internet and sizes it to\n# be 200 pixels tall. This is not part of your course and you don\'t need to \n# know how this works. I just thought displaying pictures was less boring than\n# displaying text - MJF\n---\ntemplate: t_raindrops\nsubject: Raindrops on roses\ncontent: |\n  <img src="https://i.pinimg.com/originals/ff/94/99/ff9499300b6b09c000d6553f3ce686c9.jpg" height="200px">\n---\ntemplate: t_kittens\nsubject: Whiskers on kittens\ncontent: |\n  <img src="https://i.pinimg.com/736x/78/0e/d5/780ed526f1b2234971534827c9788cb8.jpg" height="200px">\n---\ntemplate: t_kettles\nsubject: Bright copper kettles\ncontent: |\n  <img src="https://i.pinimg.com/originals/2b/7f/5f/2b7f5ffe1bc9a2611d0e25900bb217e4.jpg" height="200px">\n---\ntemplate: t_mittens\nsubject: Warm woolen mittens\ncontent: |\n  <img src="https://www.woolblankets.ca/media/catalog/product/cache/1/image/600x600/9df78eab33525d08d6e5fb8d27136e95/e/k/eksharad-gra-wool-mittens-canada-1.jpg" height="200px">\n---\ntemplate: t_packages\nsubject: Brown paper packages tied up with strings\ncontent: |\n  <img src="https://i.pinimg.com/originals/e2/5a/31/e25a3122da9a3936b10d3be36de14c0b.jpg" height="200px">\n---\n# This template requires error_subject and error_content to be set before it\'s\n# called. Otherwise we\'ll get an error\ntemplate: t_error\nsubject: |\n  ${error_subject}\ncontent: |\n  ${error_content}\n---\n'})})}function y(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(b,{...e})}):b(e)}const k=(0,s.jsx)((function(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}),{}),w=[{value:"Background",id:"background",level:2},{value:"Steps",id:"steps",level:2},{value:"Completing the code block",id:"completing-the-code-block",level:4},{value:"Displaying the selected templates",id:"displaying-the-selected-templates",level:4},{value:"Code",id:"code",level:2},...x,...f,{value:"Solution Code",id:"solution-code",level:2},...x,...f];function _(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,s.jsxs)(n.p,{children:["In this exercise we are going to select ",(0,s.jsx)(o.DisplayGlossaryItem,{item:"template",plural:!0})," for each selected favourite thing."]}),"\n",(0,s.jsx)(n.p,{children:"We are going to build on our code from Exercise 4b and display text from templates instead of our table."}),"\n",(0,s.jsx)(n.p,{children:"Because our user can choose more than one favourite thing we may need to display more than one template on our final screen.\nSounds like a job for iteration!!"}),"\n",(0,s.jsx)(n.p,{children:"Now that we're introducing templates our code is going to get rather big, so we'll also split our code out into multiple files."}),"\n",(0,s.jsx)(n.p,{children:"Your program should display something like this"}),"\n",(0,s.jsx)(o.DisplayImage,{imageURL:"/img/coding_exercises/cw4c-1.png",size:"70%"}),"\n",(0,s.jsx)(n.h2,{id:"steps",children:"Steps"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the ",(0,s.jsx)(n.a,{href:"#code",children:"example code"})," below into files in your ",(0,s.jsx)(n.code,{children:"CodingWorkshop4"})," playground"]}),"\n",(0,s.jsxs)(n.li,{children:["Complete the code in ",(0,s.jsx)(n.code,{children:"cw4c_code.yml"})," so that all the templates are part of the ",(0,s.jsx)(n.code,{children:"if/elif"})," statement."]}),"\n",(0,s.jsxs)(n.li,{children:["Update ",(0,s.jsx)(n.code,{children:"final_screen"})," to display ",(0,s.jsx)(n.code,{children:"template_list"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["You must use ",(0,s.jsx)(n.strong,{children:"exactly the same file names"}),", otherwise the ",(0,s.jsx)(n.code,{children:"include"}),"s will break."]})}),"\n",(0,s.jsxs)(n.admonition,{title:"hints",type:"tip",children:[(0,s.jsx)(n.h4,{id:"completing-the-code-block",children:"Completing the code block"}),(0,s.jsxs)(n.p,{children:["All the templates have been completed for you and are in ",(0,s.jsx)(n.code,{children:"templates.yml"}),". You don't need to create these.\nJust make sure each of the five templates forms part of the ",(0,s.jsx)(n.code,{children:"if/elif"})," statement in ",(0,s.jsx)(n.code,{children:"cw4c_code.yml"}),"."]}),(0,s.jsx)(n.h4,{id:"displaying-the-selected-templates",children:"Displaying the selected templates"}),(0,s.jsxs)(n.p,{children:["The code block adds a template to ",(0,s.jsx)(n.code,{children:"template_list"})," ",(0,s.jsx)(n.strong,{children:"only if"})," the relevant checkbox was checked.\nIn our final screen we need to display each of the templates listed in ",(0,s.jsx)(n.code,{children:"template_list"}),"."]}),(0,s.jsxs)(n.p,{children:["You will notice that each template has a ",(0,s.jsx)(n.code,{children:"subject"})," as well as ",(0,s.jsx)(n.code,{children:"content"}),".  We can use the ",(0,s.jsx)(n.code,{children:"subject"})," as a heading above the content.  To display a template's subject we do something like this (for example):"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  t_kettles.subject\n"})}),(0,s.jsxs)(n.p,{children:["We will use iteration to display each template in our ",(0,s.jsx)(n.code,{children:"template_list"}),".  The ",(0,s.jsx)(n.code,{children:"% for"})," loop line will look something like this:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  % for item in template_list:\n"})}),(0,s.jsx)(n.p,{children:"Therefore, to display each template's subject we can use:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  ${item.subject}\n"})}),(0,s.jsx)(n.p,{children:"and to display each template's content we can use:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"  ${item}\n"})}),(0,s.jsx)(n.p,{children:"(as the content is always displayed by default)"})]}),"\n",(0,s.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.p,{children:"Copy this code into your playground as a starting point for this exercise."}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cw4c_main.yml"})})}),(0,s.jsx)(a,{})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cw4c_code.yml"})})}),(0,s.jsx)(d,{})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cw4c_questions.yml"})})}),(0,s.jsx)(g,{})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cw4c_templates.yml"})})}),(0,s.jsx)(y,{})]}),"\n",(0,s.jsx)(n.h2,{id:"solution-code",children:"Solution Code"}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cw4c_main.yml"})})}),(0,s.jsx)(p,{})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cw4c_code.yml"})})}),(0,s.jsx)(u,{})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cw4c_questions"})})}),(0,s.jsx)(g,{})]}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"cw4c_templates"})})}),(0,s.jsx)(y,{})]})]})}function v(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_,{...e})}):_(e)}const C={title:"Exercise 4c"},E=void 0,D={id:"coding_exercises/coding_workshop_4/cw4c",title:"Exercise 4c",description:"",source:"@site/docs/coding_exercises/coding_workshop_4/cw4c.mdx",sourceDirName:"coding_exercises/coding_workshop_4",slug:"/coding_exercises/coding_workshop_4/cw4c",permalink:"/textbook/docs/coding_exercises/coding_workshop_4/cw4c",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Exercise 4c"},sidebar:"codingExercisesSidebar",previous:{title:"Exercise 4b",permalink:"/textbook/docs/coding_exercises/coding_workshop_4/cw4b"},next:{title:"Coding Workshop 5",permalink:"/textbook/docs/coding_exercises/coding_workshop_5/"}},T={},q=[...w];function W(e){return(0,s.jsx)(o.DisplayInlineExercise,{video:k,children:(0,s.jsx)(v,{})})}function I(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(W,{...e})}):W()}}}]);