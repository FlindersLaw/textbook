"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[361],{9921:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"textbook/chapter_04/00-40","title":"Nested if statements","description":"In the previous section, we mentioned that there are two ways we can create an if block with multiple conditions:","source":"@site/docs/textbook/chapter_04/00-40.mdx","sourceDirName":"textbook/chapter_04","slug":"/textbook/chapter_04/00-40","permalink":"/textbook/docs/textbook/chapter_04/00-40","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Nested if statements"},"sidebar":"textbookSidebar","previous":{"title":"If-Elif-Else Statements","permalink":"/textbook/docs/textbook/chapter_04/00-30"},"next":{"title":"Mako if statements","permalink":"/textbook/docs/textbook/chapter_04/00-50"}}');var i=n(4848),a=n(8453),o=(n(4054),n(1428));const r={title:"Nested if statements"},l=void 0,d={},h=[{value:"Nested If statements",id:"nested-if-statements",level:2},{value:"Nested If Statement Rules",id:"nested-if-statement-rules",level:3},{value:"An Example of a Nested If Statement",id:"an-example-of-a-nested-if-statement",level:2},{value:"Flow of Control",id:"flow-of-control",level:3},{value:"Docassemble Code",id:"docassemble-code",level:3},{value:"Lines 19 to 25",id:"lines-19-to-25",level:3},{value:"Lines 26 to 33",id:"lines-26-to-33",level:3},{value:"Lines 8 to 17",id:"lines-8-to-17",level:3},{value:"When Should We Not Use Nested If Statements?",id:"when-should-we-not-use-nested-if-statements",level:2},{value:"Improving Our Application",id:"improving-our-application",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return o||m("Components",!1),o.DisplayImage||m("Components.DisplayImage",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["In the previous ",(0,i.jsx)(t.a,{href:"./00-30",children:"section"}),", we mentioned that there are two ways we can create an if block with multiple conditions:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Using an if-elif clause; and,"}),"\n",(0,i.jsx)(t.li,{children:"Using nested if statements"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"In this section, we will cover how to use nested if statements. We will first consider the code that we designed for Adelaide Community Legal Centre. We will then create a new set of nested if statement rules from scratch."}),"\n",(0,i.jsx)(t.h2,{id:"nested-if-statements",children:"Nested If statements"}),"\n",(0,i.jsx)(t.p,{children:"If statements aren't usually used in isolation, much like decisions aren't made in isolation. Usually we make a set of decisions to arrive at a conclusion. Sometimes we need to segment the flow of control of our application, so that we can ask a series of questions in a particular order."}),"\n",(0,i.jsx)(t.p,{children:"The best way to do this is using a nested if statement. A nested if statement is an if statement encased inside another if statement."}),"\n",(0,i.jsx)(t.h3,{id:"nested-if-statement-rules",children:"Nested If Statement Rules"}),"\n",(0,i.jsxs)(t.p,{children:["In addition to the ",(0,i.jsx)(t.a,{href:"./00-20",children:"rules"})," about if statements we discussed previously:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"All nested if statements need to start on an indented line below the original if statement; and,"}),"\n",(0,i.jsx)(t.li,{children:"All lines of the nested if statement need to be aligned with one another."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["That is, if our original if statement is indented two spaces, the first line of the nested if statement should be indented four spaces. If we include an elif or an else statement in our nested if statement, this should be aligned ",(0,i.jsx)(t.em,{children:"exactly"})," with the original if statement. If we were to include another nested if statement inside an nested if statement, the first line of that nested if statement should be indented six spaces."]})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Watch how your if statements are aligned! A large and complicated program might have multiple nested if statements. It can be easy to miss a space when creating your if statements. Therefore, it is best to test each nested if statement individually before adding a new one."})}),"\n",(0,i.jsx)(t.h2,{id:"an-example-of-a-nested-if-statement",children:"An Example of a Nested If Statement"}),"\n",(0,i.jsx)(t.p,{children:"Let's consider the application that we developed in the previous section for the Adelaide Community Legal Centre. We were told that if a user answers that they are between the ages of 18 and 65, we should recommend that they attend the ACLC for further advice."}),"\n",(0,i.jsx)(t.p,{children:"However, what if when our user answers that they are between 18 and 65, we want to ask a series of follow up questions? We could ask whether they have a disability, or whether they are currently studying. If they are, they might be eligible for other forms of welfare, such as the disability support pension, AusStudy or JobSeeker."}),"\n",(0,i.jsx)(t.h3,{id:"flow-of-control",children:"Flow of Control"}),"\n",(0,i.jsxs)(t.p,{children:["We could modify our flowchart from the previous ",(0,i.jsx)(t.a,{href:"./00-30",children:"section"})," to include the following questions:"]}),"\n",(0,i.jsx)(t.mermaid,{value:"flowchart LR;\n    id1{{How old are you?}}\n    id1 -- 18 or younger --\x3e id2(Family Tax A or B)\n    id1 -- 65 or older --\x3e id3(Aged Care Pension)\n    id1 -- Between 18 and 65  --\x3e id4{{Do you meet any of the following?}}\n    id4 -- I have a disability --\x3e id5(Disability Support Pension)\n    id4 -- I am currently studying --\x3e id6(AusStudy)\n    id4 -- I am unemployed --\x3e id7(JobSeeker)\n    id4 -- None of the above --\x3e id8(Not eligible)"}),"\n",(0,i.jsxs)(t.p,{children:["From this diagram, you can see that we can pretty much recycle the code that we used in ",(0,i.jsx)(t.code,{children:"Ch4_Welfare_Elif.yml"}),". The key change will be to add in a nested if statement in our else block."]}),"\n",(0,i.jsx)(t.h3,{id:"docassemble-code",children:"Docassemble Code"}),"\n",(0,i.jsx)(t.p,{children:"The following code below shows how we have implemented the flowchart."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'showLineNumbers title="Ch4_Welfare_Nested.yml" showLineNumbers',children:"---\nquestion: |\n  What is your age?\nfields:\n  - no label: userAge\n    datatype: integer\n---\nquestion: |\n  Do you meet any of the following?\nfields:\n  - no label: userStatus\n    datatype: radio\n    choices:\n      - I suffer from a disability: disability\n      - I am studying at University or TAFE: studying\n      - I am unemployed: unemployed\n      - None of the above: none\n---\nmandatory: True \ncode: |\n  if userAge < 18:\n    familyTaxAB\n  elif userAge >= 65:\n    agedPension\n  else:\n    if userStatus == 'disability':\n      dsPension\n    elif userStatus == 'studying':\n      ausStudy\n    elif userStatus == 'unemployed':\n      jobSeeker\n    else:\n      contactUs\n---\n# This is the endpoint for familyTaxAB\nevent: familyTaxAB\nquestion: You Are Eligible for Family Tax A and B\nsubquestion: |\n  Thank you for completing this questionnaire\n\n  Because you are under 18, your parents may be eligible for [Family Tax A and B](https://www.dss.gov.au/families-and-children/benefits-payments/family-tax-benefit)\n\n  Please contact Services Australia to understand more.\n\nbuttons:\n  - Restart: restart\n  - Exit: exit\n---\nevent: agedPension\nquestion: You are Eligible for the Aged Pension\nsubquestion: |\n  Thank you for completing this questionnaire\n\n  Because you are older than 65, you may be eligible for the [Aged Pension](https://www.servicesaustralia.gov.au/age-pension)\n\n  Please contact Services Australia to understand more.\n\nbuttons:\n  - Restart: restart\n  - Exit: exit\n---\nevent: dsPension\nquestion: You are Eligible for the Disability Support Pension\nsubquestion: |\n  Thank you for completing this questionnaire\n\n  Because you have indicated that you are disabled, you may be eligible for the [Aged Pension](https://www.servicesaustralia.gov.au/disability-support-pension)\n\n  Please contact Services Australia to understand more.\n\nbuttons:\n  - Restart: restart\n  - Exit: exit\n---\nevent: ausStudy\nquestion: You are Eligible for AustStudy\nsubquestion: |\n  Thank you for completing this questionnaire\n\n  Because you are studying at University or TAFE, you may be eligible for [AusStudy](https://www.servicesaustralia.gov.au/austudy)\n\n  Please contact Services Australia to understand more.\n\nbuttons:\n  - Restart: restart\n  - Exit: exit\n---\nevent: jobSeeker\nquestion: You are Eligible for the Aged Pension\nsubquestion: |\n  Thank you for completing this questionnaire\n\n  Because you are unemployed, you may be eligible for [JobSeeker](https://www.servicesaustralia.gov.au/jobseeker-payment)\n\n  Please contact Services Australia to understand more.\n\nbuttons:\n  - Restart: restart\n  - Exit: exit\n---\nevent: contactUs\nquestion: Please contact us\nsubquestion: |\n  Thank you for completing this questionnaire\n  \n  Based on your answers, you may not be eligible for welfare support.\n\n  Please contact us using one of the following methods to understand more and to discuss your individual circumstances.\n\n  Phone Number: (08) XXXX XXXX\n  Email Address: contact@adelaideclc.org.au\n  Address: 1 Gouger Street Adelaide 5000\n\nbuttons:\n  - Restart: restart\n  - Exit: exit\n---\n"})}),"\n",(0,i.jsx)(t.h3,{id:"lines-19-to-25",children:"Lines 19 to 25"}),"\n",(0,i.jsxs)(t.p,{children:["As with ",(0,i.jsx)(t.code,{children:"Ch4_Welfare_Elif.yml"}),", Docassemble first starts by executing the ",(0,i.jsx)(t.code,{children:"mandatory"})," code block. If the user enters a value for ",(0,i.jsx)(t.code,{children:"userAge"})," between 18 and 65, the ",(0,i.jsx)(t.code,{children:"if"})," statement nested in the ",(0,i.jsx)(t.code,{children:"else"})," block on line 25 is executed."]}),"\n",(0,i.jsx)(t.h3,{id:"lines-26-to-33",children:"Lines 26 to 33"}),"\n",(0,i.jsxs)(t.p,{children:["To evaluate the nested if statement, Docassemble needs a value for ",(0,i.jsx)(t.code,{children:"userStatus"}),". It finds that in the question block on line 18."]}),"\n",(0,i.jsx)(t.h3,{id:"lines-8-to-17",children:"Lines 8 to 17"}),"\n",(0,i.jsx)(t.p,{children:"The user must then select one of the values presented in this options list."}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_04/welfare_nested_between_18_and_65.png",altText:"The options displayed to the user if they say their age is between 18 and 65"}),"\n",(0,i.jsxs)(t.p,{children:["Note that we have a None of the above option. Although we have not included this option in our if statement, it will be captured by the ",(0,i.jsx)(t.code,{children:"else"})," clause on line 32. Depending"]}),"\n",(0,i.jsxs)(t.p,{children:["The value that is assigned to ",(0,i.jsx)(t.code,{children:"userStatus"})," is then used to evaluate the nested if statement."]}),"\n",(0,i.jsx)(t.p,{children:"This will change what endscreen is displayed. For example, let's say the user selects that they have a disability. The disability endpoint screeen will be displayed:"}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_04/welfare_nested_between_18_and_65.png",altText:"The text displayed to the user if they say they suffer from a disability."}),"\n",(0,i.jsxs)(o.Quizlet,{title:"Nested If Statement Quiz",children:[(0,i.jsx)(t.p,{children:"Consider the following code fragment from Docassemble:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",children:"---\nquestion: | \n  Do you live in Adelaide?\nyesno: userIsFromAdelaide\n---\nquestion: |\n  Where do you live?\nfields:\n  - no label: userLocation\n    datatype: radio\n    choices:\n      - Western Adelaide: west\n      - Northern Adelaide: north\n      - North-East Adelaide: northeast\n      - Adelaide CBD: cbd\n      - Southern Adelaide: south\n---\nmandatory: True\ncode: |\n  if userIsFromAdelaide:\n    if userLocation == 'west':\n      ## Do something in Docassemble\n      elif userLocation == 'north':\n      ## Do something in Docassemble\n      else:\n      ## Do something else in Docassemble\n---\n"})}),(0,i.jsx)(t.p,{children:"When we attempt to execute this application, Docassemble will generate a syntax error. Why?"}),(0,i.jsx)(o.Answer,{children:(0,i.jsxs)(t.p,{children:["There is not an ",(0,i.jsx)(t.code,{children:"elif"})," clause for each option in our radio buttons question."]})}),(0,i.jsx)(o.Answer,{children:(0,i.jsxs)(t.p,{children:["The tests for evaluating whether ",(0,i.jsx)(t.code,{children:"userLocation"})," contains a value are incorrect."]})}),(0,i.jsx)(o.Answer,{isCorrect:!0,children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"elif"})," and ",(0,i.jsx)(t.code,{children:"else"})," statement clauses are incorrectly indented"]})}),(0,i.jsx)(o.Explanation,{correctAnswer:!0,children:(0,i.jsxs)(t.p,{children:["That's right. The ",(0,i.jsx)(t.code,{children:"elif"})," statement clause and the ",(0,i.jsx)(t.code,{children:"else"})," statement clause need to be aligned with the else statement. Otherwise Docassemble will generate a syntax error."]})}),(0,i.jsx)(o.Explanation,{children:(0,i.jsxs)(t.p,{children:["That's not quite right. Specifically, Docassemble will still execute a nested ",(0,i.jsx)(t.code,{children:"if"})," statement even if all cases are not included. Likewise, if we want to check whether a particular variable (such as ",(0,i.jsx)(t.code,{children:"userLocation"}),") contains a string we use the ",(0,i.jsx)(t.code,{children:"=="})," symbol."]})})]}),"\n",(0,i.jsx)(t.h2,{id:"when-should-we-not-use-nested-if-statements",children:"When Should We Not Use Nested If Statements?"}),"\n",(0,i.jsxs)(t.p,{children:["Now that we've learned about how great nested if statements are, let's learn about when we should ",(0,i.jsx)(t.em,{children:"not"})," use nested if statements."]}),"\n",(0,i.jsx)(t.p,{children:"Nested if statements are great when we want to control the flow of our application. They are also great if we do not know the answer to a particular question yet. In our ACLC application, we do not know whether the person is disabled when we ask what their age is. Therefore, it makes sense to use a nested if statement."}),"\n",(0,i.jsxs)(t.p,{children:["However, if we were to ask their age ",(0,i.jsx)(t.em,{children:"and"})," whether they were disabled at the same time, it would not make sense to use a nested if statement."]}),"\n",(0,i.jsx)(t.h2,{id:"improving-our-application",children:"Improving Our Application"}),"\n",(0,i.jsxs)(t.p,{children:["Another example lies in the AusStudy branch of our application. An eagle eyed reader, upon examining the link for AusStudy, might note that this is available for students who are over 25. To help make a condition for this, we will need to use ",(0,i.jsx)(t.a,{href:"./00-60",children:"and and or statements"}),"."]})]})}function u(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}function m(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);