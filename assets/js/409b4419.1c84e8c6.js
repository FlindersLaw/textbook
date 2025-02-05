"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[2300],{6e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>d});const o=JSON.parse('{"id":"textbook/chapter_09/00-10","title":"Learning How to Debug and Resolve Errors","description":"What we will do in this section is work through a legal software application which has bugs. We will work out how to spot these errors and how to fix them.","source":"@site/docs/textbook/chapter_09/00-10.mdx","sourceDirName":"textbook/chapter_09","slug":"/textbook/chapter_09/00-10","permalink":"/textbook/docs/textbook/chapter_09/00-10","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Learning How to Debug and Resolve Errors"},"sidebar":"textbookSidebar","previous":{"title":"Chapter 9. Debugging Your Legal Software Application","permalink":"/textbook/docs/textbook/chapter_09/"},"next":{"title":"Chapter 10. How to Write a Legal Software Application","permalink":"/textbook/docs/textbook/chapter_10/"}}');var r=t(4848),a=t(8453),i=t(2487);const s={title:"Learning How to Debug and Resolve Errors"},l=void 0,h={},d=[{value:"Our Broken Code",id:"our-broken-code",level:2},{value:"How should this code work?",id:"how-should-this-code-work",level:3},{value:"Fixing Our Broken Code",id:"fixing-our-broken-code",level:2},{value:"Syntax Errors",id:"syntax-errors",level:3},{value:"Finding Errors by Counting Line Numbers",id:"finding-errors-by-counting-line-numbers",level:4},{value:"Mapping Errors",id:"mapping-errors",level:3},{value:"Logical Errors",id:"logical-errors",level:3},{value:"Missing Variables",id:"missing-variables",level:3},{value:"Tidying Up Our Application",id:"tidying-up-our-application",level:3},{value:"Summary and Next Steps",id:"summary-and-next-steps",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return i||g("Components",!1),i.DisplayImage||g("Components.DisplayImage",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"What we will do in this section is work through a legal software application which has bugs. We will work out how to spot these errors and how to fix them."}),"\n",(0,r.jsx)(n.h2,{id:"our-broken-code",children:"Our Broken Code"}),"\n",(0,r.jsx)(n.p,{children:"First, let's look at our broken code."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"To work your way through this chapter, you can copy this code in a new file in your Docassemble playground."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'showLineNumbers title="Ch9_Buggy_Code.yml"',children:"---\nobjects:\n  - events: DADict\n---\nmetadata:\n  title: |\n    The Means Testinator\n---\nmandatory: True\nquestion: Welcome to the Means Testinator\nsubquestion: |\n  The Means Testinator App \n  \n  Press **Continue** to use the app.\nbuttons:\n  -Continue: continue\n---\nmandatory: True\nquestion: Thank you for Completing the Means Testinator\nsubquestion: |\n  Hello **${userSalutation} ${userFirstname} ${userLastname}**,\n  \n  Looks like you are:\n  % if userAgeCategory = 'adult:\n    *an adult*\n  % elif userAgeCategory = 'child':\n  *just a child!*\n  % elif userAgeCategory == 'pensioner':\n  *a pensioner*\n  % else:\n  - Sorry, I don't know what you are (and you're not getting welfare)!\n  % endif\n  \n  Anyway, let's move on\nbuttons:\n  - Let's move on indeed!: continue\n  - Nope, I'm done with this: exit\n---\n# We display different endpoints based on the age category\nmandatory: True\ncode: |\n  if userAgeCategory == 'child' or userAgeCategory == 'pensioner'\n  endpoint['get_welfare']\n  elif userAgeCategory == 'adult\n  endpoint['no_welfare_for_you']\n  else:\n    endpoint['should_not_be_here']\n---\nevent: endpoint['get_welfare']\nquestion: You are eligible for welfare\nsubquestion: |\n  You are eligible for welfare.\n  \n  Go to [Services Australia](https://www.servicesaustralia.gov.au/) to see what you might be eligible for.\nbuttons:\n  - Exit: exit\n  - I want to see how people who are not eligible for welfare live: restart\n---\nevent: endpoint['no_welfare_for_you']\nquestion: You are not eligible for welfare\nsubquestion: |\n  The government thinks you don't deserve welfare. \nbuttons:\n  - Fair enough: exit\n  - I want to change my age and try again: restart\n---\nquestion: Please enter your details\nfields: \n  - First name: userFirstname\n      default: John\n      - Last name: userLastname\n        default: Smith\n  - Age: userAge\ndefault: 20\ndatatype: integer\n---\ncode: |\n  if 18 <= userAge < 65:\n    userAgeCategory = adult\n  elif userAge < 18:\n    userAgeCategory = 'child'\n  else userAgeCategory == 'pensioner:\n    userAgeCategory = 'pensioner'\n---\n"})}),"\n",(0,r.jsx)(n.h3,{id:"how-should-this-code-work",children:"How should this code work?"}),"\n",(0,r.jsx)(n.p,{children:"We are attempting to implement the following flowchart in our code:"}),"\n",(0,r.jsx)(n.mermaid,{value:"flowchart LR;\n    A[Start the Application] --\x3e |Ask the user for their name and age| B{How old is the user?}\n    B --\x3e |18 or younger| C[User is Eligible]\n    B --\x3e |65 or older| C\n    B --\x3e |Between 18 and 65| D[User is Not Eligible]"}),"\n",(0,r.jsx)(n.p,{children:"In other words, if the user is either 18 or younger, or 65 or older, they are eligible for welfare. Otherwise, they are not."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["As per what we covered in ",(0,r.jsx)(n.a,{href:"/docs/textbook/chapter_04",children:"Chapter Four"}),", note that this is not actually how welfare works in Australia. If you are developing an app to help someone with welfare, you will need to do your own research to make sure that you correctly interpret the law!"]})}),"\n",(0,r.jsx)(n.h2,{id:"fixing-our-broken-code",children:"Fixing Our Broken Code"}),"\n",(0,r.jsx)(n.p,{children:"The best place to start with when we want to fix broken code is to run it."}),"\n",(0,r.jsx)(n.h3,{id:"syntax-errors",children:"Syntax Errors"}),"\n",(0,r.jsxs)(n.p,{children:["If we press ",(0,r.jsx)(n.strong,{children:"Save and Run"})," from the Docassemble playground, we immediately get the following error:"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_unterminated_string_literal.PNG",altText:"This is the first error that we encounter."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsx)(n.p,{children:"It's a good idea to read through any errors generated by Docassemble to sees if you can figure out what they mean."})}),"\n",(0,r.jsxs)(n.p,{children:["What does 'unterminated string literal mean'? We know from ",(0,r.jsx)(n.a,{href:"/docs/textbook/chapter_03",children:"Chapter Three"})," that a string is a type of variable in Python and Docassemble. Specifically, a string stands for a ",(0,r.jsx)(n.strong,{children:"string of characters"}),". We normally put strings in a set of single quotes. That suggests we should be looking for a missing set of quotes."]}),"\n",(0,r.jsxs)(n.p,{children:["Sure enough, our Mako if statement on line 24 is missing a single quote afrer the string ",(0,r.jsx)(n.code,{children:"adult"}),"."]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_unterminated_string_source.PNG",altText:"This is the source of our unterminated string literal error"}),"\n",(0,r.jsxs)(n.p,{children:["Let's add in a single quote at the end of line 24 after 'adult. If we press ",(0,r.jsx)(n.strong,{children:"Save"})," again, we see that we still have a syntax error. Let's press ",(0,r.jsx)(n.strong,{children:"Save and Run"})," again. This time we will get a different syntax error:"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_invalid_syntax.PNG",altText:"This is the next error that we encounter - it looks like it has something to do with our if statements"}),"\n",(0,r.jsxs)(n.p,{children:["Again, reading this if statement, it appears that there is a problem with our if statements. We know from ",(0,r.jsx)(n.a,{href:"/docs/textbook/chapter_04",children:"Chapter Four"})," that for a valid Mako if statement, we need two equals signs, not just one. Again, if we look at lines 24 and 26, we can see the error."]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_invalid_syntax_source.PNG",altText:"This is the source of our invalid syntax error"}),"\n",(0,r.jsxs)(n.p,{children:["We can fix this by adding in an extra ",(0,r.jsx)(n.code,{children:"="})," after the first one on Lines 24 and 26."]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_invalid_syntax_fix.PNG",altText:"As you can see, we have fixed our invalid syntax error."}),"\n",(0,r.jsx)(n.p,{children:"If we press save though, we can still see that we have a syntax error. However, this time our playground has changed ever so slightly:"}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_invalid_playground_changes.PNG",altText:"We are still running into a syntax error, but we can see that four of our variables are undefined."}),"\n",(0,r.jsx)(n.h4,{id:"finding-errors-by-counting-line-numbers",children:"Finding Errors by Counting Line Numbers"}),"\n",(0,r.jsx)(n.p,{children:"Let's try running this code again."}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_unterminated_string_literal_line_3.PNG",altText:"This is another unterminated string literal error message."}),"\n",(0,r.jsxs)(n.p,{children:["Docassemble has generated another unterminated string literal. This means that we have another incomplete string somewhere. Rather than try to search for it manually, we are going to use the message on the first line of our error message, ",(0,r.jsx)(n.code,{children:"(detected at line 3) (<code block>, line 3)"})," to find the error. We can see after this message, there is a snippet of our first code block. This code block starts on line 38:"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_unterminated_string_source_line_38.PNG",altText:"This screenshot shows us the start of our code block."}),"\n",(0,r.jsxs)(n.p,{children:["However, what Docassemble is telling us is that the error is in line 3 of our code block. What we need to do then is to look (quite literally) for line 3 in our code block, which is the third line after the ",(0,r.jsx)(n.code,{children:"code: |"})," tag - that is, Line 44. Sure enough, we can see that our ",(0,r.jsx)(n.code,{children:"elif"})," statement clause is missing a quote at the end of ",(0,r.jsx)(n.code,{children:"adult"}),". Let's add that in:"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_unterminated_string_fix_line_38.PNG",altText:"We have fixed our syntax error - or have we?"}),"\n",(0,r.jsxs)(n.p,{children:["We might think that this is enough, but alas if we press ",(0,r.jsx)(n.strong,{children:"Save"})," our celebrations are premature - there is still a syntax error! This time it's a different syntax error:"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_expected.PNG",altText:"Another syntax error, this time telling us that there is a problem in Line 1 of our code"}),"\n",(0,r.jsxs)(n.p,{children:["By using the same technique as what we did previously, we can see that the error is on Line 1 of our code block (that is, Line 42). We can then read the above error message to see that we are missing an ",(0,r.jsx)(n.code,{children:":"})," at the end of Line 42 (and Line 44, for that matter). Let's add those in."]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_expected_fix.PNG",altText:"We have fixed our expected : syntax error message. Of course, there are still more syntax errors to fix. "}),"\n",(0,r.jsx)(n.p,{children:"Nevertheless, if we run our code again, we will still get a syntax error!"}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_expected_indented.PNG",altText:"Another syntax error, related to another expected feature."}),"\n",(0,r.jsx)(n.p,{children:"This time, we know that the syntax error is on Line 1 of our code block (that is, Line 42). However, the error message indicates that Docassemble expected the contents of the if statement to be indented. Let's go ahead and do that."}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_expected_indented_fix.PNG",altText:"Another syntax error, related to another expected feature."}),"\n",(0,r.jsx)(n.p,{children:"That will fix this syntax error in our first question block and our code block."}),"\n",(0,r.jsx)(n.h3,{id:"mapping-errors",children:"Mapping Errors"}),"\n",(0,r.jsx)(n.p,{children:"We can see now that Docassemble is displaying that we have a syntax error. However, if we run our code, we will see that we have a mapping error:"}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_mapping_error.PNG",altText:"A mapping error when we try and run our last question block."}),"\n",(0,r.jsxs)(n.p,{children:["What is a mapping error? Somewhat confusingly, Docassemble is actually referring to a set of key errors here. You might recall that we covered keys and data structures in ",(0,r.jsx)(i.DisplayChapter,{chapter:"chapter_05"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"You will note that our fields tab is not aligned correctly. Therefore, Docassemble cannot find the labels (that is, the keys) which map to the values (that is, the fields we are setting), so we need to align them properly. As a rule:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["We start each ",(0,r.jsx)(n.code,{children:"field"})," in a ",(0,r.jsx)(n.code,{children:"fields"})," block with a ",(0,r.jsx)(n.code,{children:"-"})]}),"\n",(0,r.jsxs)(n.li,{children:["Any tags after the field label and variable (such as ",(0,r.jsx)(n.code,{children:"datatypes"})," and ",(0,r.jsx)(n.code,{children:"default values"}),") should be indented two lines to the right"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"We can see how we have fixed these in the following screenshot:"}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_mapping_error_fixed.PNG",altText:"Our code block on lines 76 to 84 with the indenting fixed."}),"\n",(0,r.jsx)(n.h3,{id:"logical-errors",children:"Logical Errors"}),"\n",(0,r.jsx)(n.p,{children:"So far we have considered errors that arise when we try and run Docassemble code where the syntax is not correct. However, these syntax errors might mask some deeper, underlying logic issues with our application. We can see some of these with our application."}),"\n",(0,r.jsx)(n.p,{children:"For example, let's look at the following chunk of code:"}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_final_if_statement.PNG",altText:"This is the final if statement in our application on lines 77 to 83"}),"\n",(0,r.jsx)(n.p,{children:"When we run this if statement, it generates a syntax error."}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_final_if_statement_error.PNG",altText:"This is the syntax error generated by this code if we run it"}),"\n",(0,r.jsx)(n.p,{children:"We have an unterminated string on this line as well but, more fundmentally, this line of code does not make any sense."}),"\n",(0,r.jsxs)(n.p,{children:["First, we have combined an ",(0,r.jsx)(n.code,{children:"else"})," clause with an equality test on line 82.  As we discussed in ",(0,r.jsx)(i.DisplayChapter,{chapter:"chapter_04"}),", an ",(0,r.jsx)(n.code,{children:"else"})," clause is meant to be a catch all clause for anything that does not match the ",(0,r.jsx)(n.code,{children:"if"})," or ",(0,r.jsx)(n.code,{children:"elif"})," clauses above it."]}),"\n",(0,r.jsxs)(n.p,{children:["Second, the point of this if statement is to assign a value for ",(0,r.jsx)(n.code,{children:"userAgeCategory"}),". However, in this ",(0,r.jsx)(n.code,{children:"else"})," statement we are evaluating a value for ",(0,r.jsx)(n.code,{children:"userAgeCategory"}),". Therefore, we should get rid of the if statement test on line 82, and just have an else clause:"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_final_if_statement_else_fix.PNG",altText:"This is the syntax error generated by this code if we run it"}),"\n",(0,r.jsx)(n.p,{children:"Once we make these changes, you will see that our red syntax error message has disappeared. Hooray!"}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_final_if_statement_else_fix.PNG",altText:"This is the syntax error generated by this code if we run it"}),"\n",(0,r.jsx)(n.h3,{id:"missing-variables",children:"Missing Variables"}),"\n",(0,r.jsxs)(n.p,{children:["However, we still have a few errors. Based on what we covered in ",(0,r.jsx)(i.DisplayChapter,{chapter:"chapter_08"}),", you should know that these errors are being caused by missing variables, or variables which we are referring to in a mandatory code block but which have not been defined. You need to review your code to see where we evaluate ",(0,r.jsx)(n.code,{children:"userAgeCategory"}),". We do so twice; once on lines 24 to 32, and once on lines 42 to 47:"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_lines_24_to_32.PNG",altText:"Our first  (Mako) if statement on lines 24 to 32 that references `userAgeCategory`"}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_lines_24_to_32.PNG",altText:"Our second if statement on lines 42 to 47 that references `userAgeCategory`"}),"\n",(0,r.jsxs)(n.p,{children:["You can see in these if statements we are evaluating whether ",(0,r.jsx)(n.code,{children:"userAgeCategory"})," contains a string. However, on line 79, we are not placing the string 'adult' in single quotes. Therefore, our if statements will not evaluate properly."]}),"\n",(0,r.jsxs)(n.p,{children:["In addition, on line 21, we are referring to a variable called ",(0,r.jsx)(n.code,{children:"userSalutation"}),". However, we do not have a question block asking for this variable anywhere. Therefore, when we run our application, we will see this error immediately after we press continue:"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_no_salutation",altText:"The error that we will see once we run our new code and press **Continue**"}),"\n",(0,r.jsx)(n.p,{children:"Therefore, we need to make a few changes to our code:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="Ch9_Buggy_Code.yml"',children:"---\nquestion: Please enter your details\nfields:\n  - Salutation: userSalutation\n    default: Mr\n  - First name: userFirstname\n    default: John\n  - Last name: userLastname\n    default: Smith\n  - Age: userAge\n    default: 20\n    datatype: integer\n---\ncode: |\n  if 18 <= userAge < 65:\n    userAgeCategory = 'adult'\n  elif userAge < 18:\n    userAgeCategory = 'child'\n  else:\n    userAgeCategory = 'pensioner'\n---\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Saving this code now will remove two of our undefined variables - ",(0,r.jsx)(n.code,{children:"userSalutation"})," and ",(0,r.jsx)(n.code,{children:"adult"}),". However, we still have one undefined variable:"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_buggy_code_undefined_endpoint.PNG",altText:"The error that we get with one undefined endpoint"}),"\n",(0,r.jsxs)(n.p,{children:["Sure enough, we have defined our ",(0,r.jsx)(n.code,{children:"DADict"})," object on line three as ",(0,r.jsx)(n.code,{children:"events"})," rather than ",(0,r.jsx)(n.code,{children:"endpoint"}),". If we change that, our application should work."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'showLineNumbers title="Ch9_Buggy_Code_All_Fixed.yml"',children:"---\nobjects:\n  - endpoint: DADict\n---\nmetadata:\n  title: |\n    The Means Testinator\n---\nmandatory: True\nquestion: Welcome to the Means Testinator\nsubquestion: |\n  The Means Testinator App \n  \n  Press **Continue** to use the app.\nbuttons:\n  -Continue: continue\n---\nmandatory: True\nquestion: Thank you for Completing the Means Testinator\nsubquestion: |\n  Hello **${userSalutation} ${userFirstname} ${userLastname}**,\n  \n  Looks like you are:\n  % if userAgeCategory == 'adult':\n    *an adult*\n  % elif userAgeCategory == 'child':\n  *just a child!*\n  % elif userAgeCategory == 'pensioner':\n  *a pensioner*\n  % else:\n  - Sorry, I don't know what you are (and you're not getting welfare)!\n  % endif\n  \n  Anyway, let's move on\nbuttons:\n  - Let's move on indeed!: continue\n  - Nope, I'm done with this: exit\n---\n# We display different endpoints based on the age category\nmandatory: True\ncode: |\n  if userAgeCategory == 'child' or userAgeCategory == 'pensioner':\n    endpoint['get_welfare']\n  elif userAgeCategory == 'adult':\n    endpoint['no_welfare_for_you']\n  else:\n    endpoint['should_not_be_here']\n---\nevent: endpoint['get_welfare']\nquestion: You are eligible for welfare\nsubquestion: |\n  You are eligible for welfare.\n  \n  Go to [Services Australia](https://www.servicesaustralia.gov.au/) to see what you might be eligible for.\nbuttons:\n  - Exit: exit\n  - I want to see how people who are not eligible for welfare live: restart\n---\nevent: endpoint['no_welfare_for_you']\nquestion: You are not eligible for welfare\nsubquestion: |\n  The government thinks you don't deserve welfare. \nbuttons:\n  - Fair enough: exit\n  - IO want to change my age and try again: restart\n---\nquestion: Please enter your details\nfields:\n  - Salutation: userSalutation\n    default: Mr\n  - First name: userFirstname\n    default: John\n  - Last name: userLastname\n    default: Smith\n  - Age: userAge\n    default: 20\n    datatype: integer\n---\ncode: |\n  if 18 <= userAge < 65:\n    userAgeCategory = 'adult'\n  elif userAge < 18:\n    userAgeCategory = 'child'\n  else:\n    userAgeCategory = 'pensioner'\n---\n"})}),"\n",(0,r.jsx)(n.h3,{id:"tidying-up-our-application",children:"Tidying Up Our Application"}),"\n",(0,r.jsx)(n.p,{children:"Almost there! Even though our code runs, you can still see that we have a few things that might be worthwhile fixing."}),"\n",(0,r.jsxs)(n.p,{children:["First, our opening screen just says 'The Means Testinator App' without any further description. There is also a dash right before the ",(0,r.jsx)(n.code,{children:"Continue"})," button. Although this will not stop our application from running, it is not pretty!"]}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_continue_dash_ugly.PNG",altText:"Our continue button screen, with a dash added to the continue button. Although it does work, it is not pretty."}),"\n",(0,r.jsx)(n.p,{children:"Also, as a best practice, we should include an exit button as well."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="Ch9_Buggy_Code.yml"',children:"---\nmandatory: True\nquestion: Welcome to the Means Testinator\nsubquestion: |\n  The Means Testinator App helps tell whether you are eligible for welfare.\n  \n  Press **Continue** to use the app.\nbuttons:\n  - Continue: continue\n  - Exit: exit\n---\n"})}),"\n",(0,r.jsx)(n.p,{children:"Our welcome screen should now look like this:"}),"\n",(0,r.jsx)(i.DisplayImage,{imageURL:"/img/textbook/chapter_09/ch09_new_welcome_screen.PNG",altText:"Our new welcome screen, with the correct continue button and application description."}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(i.DisplayChapter,{chapter:"chapter_10"}),", we will cover how to fix up our application to make it more presentable in more detail."]}),"\n",(0,r.jsxs)(n.p,{children:["Another logical issue we should tidy up concerns our Mako if statement on lines 25 to 33 and our if statement in our mandatory code block on line 41 to 49. Each of those if statements has an else clause. However, our if statement on lines 79 to 87 only sets ",(0,r.jsx)(n.code,{children:"userAgeCategory"})," to one of three values - 'adult', 'child' or 'pensioner'. In our mandatory code block, we are referring to an ",(0,r.jsx)(n.code,{children:"endpoint"})," block that does not exist. Therefore, we could clean up our code to remove those else clauses:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'showLineNumbers title="Ch9_Buggy_Code_Final.yml"',children:"---\nobjects:\n  - endpoint: DADict\n---\nmetadata:\n  title: |\n    The Means Testinator\n---\nmandatory: True\nquestion: Welcome to the Means Testinator\nsubquestion: |\n  The Means Testinator App helps tell whether you are eligible for welfare.\n  \n  Press **Continue** to use the app.\nbuttons:\n  - Continue: continue\n  - Exit: exit\n---\nmandatory: True\nquestion: Thank you for Completing the Means Testinator\nsubquestion: |\n  Hello **${userSalutation} ${userFirstname} ${userLastname}**,\n  \n  Looks like you are:\n  % if userAgeCategory == 'adult':\n    *an adult*\n  % elif userAgeCategory == 'child':\n  *just a child!*\n  % elif userAgeCategory == 'pensioner':\n  *a pensioner*\n  % endif\n  \n  Anyway, let's move on\nbuttons:\n  - Let's move on indeed!: continue\n  - Nope, I'm done with this: exit\n---\n# We display different endpoints based on the age category\nmandatory: True\ncode: |\n  if userAgeCategory == 'child' or userAgeCategory == 'pensioner':\n    endpoint['get_welfare']\n  elif userAgeCategory == 'adult':\n    endpoint['no_welfare_for_you']\n---\nevent: endpoint['get_welfare']\nquestion: You are eligible for welfare\nsubquestion: |\n  You are eligible for welfare.\n  \n  Go to [Services Australia](https://www.servicesaustralia.gov.au/) to see what you might be eligible for.\nbuttons:\n  - Exit: exit\n  - I want to see how people who are not eligible for welfare live: restart\n---\nevent: endpoint['no_welfare_for_you']\nquestion: You are not eligible for welfare\nsubquestion: |\n  The government thinks you don't deserve welfare. \nbuttons:\n  - Fair enough: exit\n  - IO want to change my age and try again: restart\n---\nquestion: Please enter your details\nfields:\n  - Salutation: userSalutation\n    default: Mr\n  - First name: userFirstname\n    default: John\n  - Last name: userLastname\n    default: Smith\n  - Age: userAge\n    default: 20\n    datatype: integer\n---\ncode: |\n  if 18 <= userAge < 65:\n    userAgeCategory = 'adult'\n  elif userAge < 18:\n    userAgeCategory = 'child'\n  else:\n    userAgeCategory = 'pensioner'\n---\n"})}),"\n",(0,r.jsx)(n.h2,{id:"summary-and-next-steps",children:"Summary and Next Steps"}),"\n",(0,r.jsx)(n.p,{children:"In this section, we have:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Discussed the main causes of syntax errors"}),"\n",(0,r.jsx)(n.li,{children:"Discussed how to distinguish between syntax, scanner and mapping errors"}),"\n",(0,r.jsx)(n.li,{children:"Discussed how to identify logical errors"}),"\n"]})]})}function c(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}function g(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);