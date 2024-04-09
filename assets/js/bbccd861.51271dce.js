"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[711],{5705:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(5893),a=n(1151),o=n(9853);const r={title:"More Advanced Jinja in Docassemble"},s=void 0,l={id:"textbook/chapter_08/00-20",title:"More Advanced Jinja in Docassemble",description:"Now that we have covered how to add Jinja fields to a template in Docassemble, we will consider how to create more advanced templates, and how to integrate these into the features in Word. This section will also cover some more advanced material on groups, which we considered previously in .",source:"@site/docs/textbook/chapter_08/00-20.mdx",sourceDirName:"textbook/chapter_08",slug:"/textbook/chapter_08/00-20",permalink:"/textbook/docs/textbook/chapter_08/00-20",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"More Advanced Jinja in Docassemble"},sidebar:"textbookSidebar",previous:{title:"Creating Documents and Templates in Docassemble",permalink:"/textbook/docs/textbook/chapter_08/00-10"},next:{title:"Chapter 9. Debugging Your Legal Software Application",permalink:"/textbook/docs/textbook/chapter_09/"}},c={},d=[{value:"Creating More Advanced Templates",id:"creating-more-advanced-templates",level:2},{value:"Amending our Flowchart",id:"amending-our-flowchart",level:3},{value:"Amending Our Application",id:"amending-our-application",level:3},{value:"Using If Statements in Jinja",id:"using-if-statements-in-jinja",level:3},{value:"Using Complex Data Structures",id:"using-complex-data-structures",level:3},{value:"Declaring a List of Pleadings",id:"declaring-a-list-of-pleadings",level:4},{value:"Filling In Our List",id:"filling-in-our-list",level:4},{value:"Using Paragraphs",id:"using-paragraphs",level:3},{value:"Using Functions",id:"using-functions",level:3},{value:"Summary",id:"summary",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return o||u("Components",!1),o.DisplayImage||u("Components.DisplayImage",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Now that we have covered how to add Jinja fields to a template in Docassemble, we will consider how to create more advanced templates, and how to integrate these into the features in Word. This section will also cover some more advanced material on groups, which we considered previously in ",(0,i.jsx)(o.DisplayChapter,{chapter:"chapter_05"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"creating-more-advanced-templates",children:"Creating More Advanced Templates"}),"\n",(0,i.jsx)(t.p,{children:"For this section, we will reuse our Form 17 generator application code. We have been asked to extend our application in a number of ways:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Our user should be able to enter a matter number for their application"}),"\n",(0,i.jsx)(t.li,{children:"Our application should be able to display multiple applicants or respondents"}),"\n",(0,i.jsx)(t.li,{children:"Our application should allow a user to enter their pleadings as a numbered list"}),"\n",(0,i.jsxs)(t.li,{children:["If our template is being filed by a lawyer for the applicant or the respondent, our application should allow our user to fill in the following details","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Law Firm"}),"\n",(0,i.jsx)(t.li,{children:"Date of Certification"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["If our templater is ",(0,i.jsx)(t.strong,{children:"not"})," being filled in by a lawyer, the paragraph on"]}),"\n",(0,i.jsxs)(t.li,{children:["Irrespective of who is filing the application, our user should be able to fill in:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Who prepared the form"}),"\n",(0,i.jsx)(t.li,{children:"Telephone Number"}),"\n",(0,i.jsx)(t.li,{children:"Fax Number"}),"\n",(0,i.jsx)(t.li,{children:"Email"}),"\n",(0,i.jsx)(t.li,{children:"Address for service"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"All dates should be formatted in an Australian Guide to Legal Citation format"}),"\n",(0,i.jsx)(t.li,{children:"The user can only download the file as a PDF"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"amending-our-flowchart",children:"Amending our Flowchart"}),"\n",(0,i.jsxs)(t.p,{children:["For these changes, we will need to amend our overall flowchart we developed ",(0,i.jsx)(t.a,{href:"00-10",children:"previously"}),":"]}),"\n",(0,i.jsx)(t.mermaid,{value:"flowchart TD;\n    A[Start]\n    A --\x3e B(Introduction Screen)\n    B -- User Clicks Exit --\x3e C[End]\n    B -- User Clicks Continue --\x3e D(Ask user what court\\n they are filing their\\n application in)\n    D --\x3e E{{Where is the user filing\\n their application?}}\n    E -- Supreme Court,\\n Magistrates Court or\\n District Court --\x3e F[Ineligible Screen]\n    F -- User clicks Exit --\x3e G[End]\n    F -- User clicks Restart --\x3e B\n    E -- Federal Court of Austrlia or\\n Federal Circuit and Family Court of Australia --\x3e H[Question Screen]\n    H --\x3e I(Ask the user to fill in\\n the Matter Number, the Registry,\\n the Division, the Applicant,\\n the Respondent, the date of filing,\\n who is completing the form and\\n in what capacity as well\\n as the statement of claim itself)\n    I -- Generate a document with template\\n using the completed answers --\x3e J[Eligible Screen]\n    J -- User Clicks Exit --\x3e K[End]\n    J -- User Clicks Restart --\x3e B\n\n    %% Define some comments to add to the flowchart\n    commentI(User can enter Law Firm and Date of\\n Certification if they\\n are representing a client.)\n\n    commentI -.- I\n\n    classDef questionClass fill:#ffe6bc\n    classDef commentClass fill:#faffd6,text-align:left\n\n    class E questionClass\n    class commentI commentClass"}),"\n",(0,i.jsx)(t.h3,{id:"amending-our-application",children:"Amending Our Application"}),"\n",(0,i.jsx)(t.p,{children:"Once we have amended our flowchart we will need to amend both our Docassemble application."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yaml",metastring:'showLineNumbers title="Ch8_Form_17_Generator.yml"',children:"# We will define an objects block to store our endpoint DADict object\n# We will also define a new DAList object in this block to store our pleadings\n# We know that our form must have at least one pleading\n---\nobjects: \n  - endpoint: DADict\n  - soc: DAList.using(there_are_any=True, object_type=DAObject, complete_attribute='pleading')\n---\n# Welcome Screen for Form 17 generator app\n# This screen contains information about what the app does, as well as a disclaimer\n# It also contains a continue and exit button\nmandatory: True\nquestion: Federal Court Form 17 generator app\nsubquestion: |\n  Welcome to the Form 17 generator app\n  \n  This application will help you generate a [Form 17](https://www.fedcourt.gov.au/forms-and-fees/forms/federal-court-rules/FCA_form017_20110801.doc). You can then file this form in either the Federal Court of Australia, or the Federal Circuit and Family Court of Australia.\n  \n  *Please note that forms completed by this application should be checked by a lawyer first. This app does not provide any legal advice.*\n  \n  Please click **Continue** to accept these terms. Otherwise, click **Exit**.\n\nbuttons:\n   - Continue: continue\n   - Exit: exit\n---\n# First question block\n# This asks the user in which court they are filing their application\n# Note that they can only choose one court\nquestion: In which court are you filing your application\nfields:\n  - no label: userCourtFiling\n    datatype: radio\n    choices:\n      - Supreme Court\n      - District Court\n      - Magistrates Court\n      - Federal Court of Australia\n      - Federal Circuit and Family Court of Australia\n---\n# Code block\n# This code block directs the user to the eligible or ineligible screen depending on their answers.\nmandatory: True\ncode: |\n  if userCourtFiling == 'Federal Court of Australia' or userCourtFiling == 'Federal Circuit and Family Court of Australia':\n    endpoint['eligible']\n  else:\n    endpoint['ineligible']\n---\n# Ineligible screen\n# This screen is selected if we select either Magistrates, District or Supreme Court\nevent: endpoint['ineligible']\nquestion: You are not eligible\nsubquestion: |\n  This application is meant to help users complete a Form 17 to submit to the Federal Court of Australia or the Federal Circuit and Family Court of Australia.\n  \n  Because you are not submitting a form to either of these courts, you are not eligible to use this application.\n  \n  Please press **Exit** to exit this application or **Restart** to restart.\nbuttons:\n  - Exit: exit\n  - Restart: restart\n---\n# Our question block\n# This is where we gather the details to fill in our form\nquestion: Please fill out these details to complete your Form 17\nfields:\n  - Matter Number: courtMatterNo\n    datatype: integer\n  - State of District Registry: courtRegistry\n    datatype: radio\n    choices:\n      - ACT\n      - NSW\n      - NT\n      - QLD\n      - SA\n      - TAS\n      - VIC\n      - WA\n  - National Practice Area/Division: courtNPA\n    datatype: radio\n    choices:\n      - Administrative, Constitutional Law and Human Rights\n      - Admiralty and Maritime\n      - Commercial Contracts, Banking, Finance and Inusrance \n      - Corporations and Corporate Insolvency\n      - General and Personal Insolvency\n      - Regulatory and Consumer Protection\n      - Economic Regulator, Competition and Access\n      - Commercial Arbitration\n      - Employment and Industrial Relations\n      - Federal Crime and Related Proceedings\n      - Patents and Associated Statutes\n      - Trade Marks\n      - Copyright and Industrial Design\n      - Native Title\n      - Family Law\n      - Migration\n      - Privacy Law\n  - Full Name of the Applicant: applicantFullName\n    datatype: string\n  - Only Applicant?: onlyApplicant\n    datatype: yesnoradio\n  - How many other Applicants?: otherApplicants\n    datatype: radio\n    choices:\n      - One\n      - Two or more\n    show if:\n      variable: onlyApplicant\n      is: False\n  - Full Name of the Respondent: respondentFullName\n    datatype: string\n  - Only Respondent?: onlyRespondent\n    datatype: yesnoradio\n  - How many other Respondents?: otherRespondents\n    datatype: radio\n    choices:\n      - One\n      - Two or more\n    show if:\n      variable: onlyRespondent\n      is: False\n  - Who is completing this Form? : whoFiledForm\n    datatype: string\n  - Who prepared this Form?: whoPreparedForm\n    datatype: string\n  - In what capacity are they Acting?: capacityOfFiler\n    datatype: radio\n    choices:\n      - Applicant\n      - Respondent\n      - Lawyer for the Applicant\n      - Lawyer for the Respondent\n  - Law Firm: lawFirm\n    datatype: string\n    js show if: |\n      val(\"capacityOfFiler\") == \"Lawyer for the Applicant\" || val(\"capacityOfFiler\") == \"Lawyer for the Respondent\"\n  - Telephone Number: telNumber\n    datatype: integer\n  - Fax Number: faxNumber\n    datatype: integer\n  - Email: contactEmail\n    datatype: email\n  - Address for Service: addressForService\n  - Date of filing: dateOfFiling\n    datatype: date\n  - Date of certification: dateOfCert\n    datatype: date\n    js show if: |\n      val(\"capacityOfFiler\") == \"Lawyer for the Applicant\" || val(\"capacityOfFiler\") == \"Lawyer for the Respondent\"\n---\n# Pleadings initial question\n# This question asks for the first pleading\nquestion: |\n  What is the ${ ordinal(i) } pleading in your statement of claim?\nfields:\n  - Pleading: soc[i].pleading\n---\n# This question asks if there is another pleading\nquestion: |\n  Is there another pleading?\nyesno: soc.there_is_another\n---\n# Eligible screen\nevent: endpoint['eligible']\nquestion: You are eligible\nsubquestion: |\n  Thank you for completing this form\n  \n  Please find attached your answers:\n  \n  Questions | Your Answers\n  ----------|-------------\n  Court | ${userCourtFiling}\n  Matter Number | ${courtMatterNo}\n  District Registry | ${courtRegistry}\n  NPA/Division | ${courtNPA}\n  Applicant | ${applicantFullName}\n  % if onlyApplicant:\n  Only Applicant? | Yes\n  % else:\n  Only Applicant? | No\n  % endif\n  Respondent | ${respondentFullName}\n  % if onlyRespondent:\n  Only Respondent? | Yes\n  % else:\n  Only Respondent? | No\n  % endif\n  Who Completed the Form | ${whoFiledForm}\n  Who Prepared this Form | ${whoPreparedForm}\n  Capacity of Filer | ${capacityOfFiler}\n  % if capacityOfFiler == 'Lawyer for the Applicant' or capacityOfFiler == 'Lawyer for the Respondent':\n  Law Firm | ${lawFirm}\n  % endif\n  Telephone Number | ${telNumber}\n  Fax Number | ${faxNumber}\n  Contact Email | ${contactEmail}\n  Address for Service | ${addressForService}\n  Date of Filing | ${dateOfFiling}\n  % if capacityOfFiler == 'Lawyer for the Applicant' or capacityOfFiler == 'Lawyer for the Respondent':\n  Date of Certification | ${dateOfCert}\n  % endif\n  \n  Your statement of claim:\n  \n  % for x in soc:\n  1. ${ x.pleading }\n  % endfor\n  \nattachment:\n  docx template file: Federal_Court_Form_17_Final.docx\n  valid formats:\n    - pdf\nbuttons:\n  - Exit: exit\n  - Restart: restart\n---\n# In this code block, we turn the date of filing (and the date of certification, if the matter is being filed by a lawyer) into an AGLC compliant date\n# We also strip out the year so we can record the matter year\ncode: |\n  dateOfFilingAGLC = format_date(dateOfFiling, format='d MMMM YYYY')\n  matterYear = format_date(dateOfFiling, 'YYYY')\n  if capacityOfFiler == 'Lawyer for the Applicant' or capacityOfFiler == 'Lawyer for the Respondent':\n    dateOfCertAGLC = format_date(dateOfCert, format='d MMMM YYYY')\n---\n"})}),"\n",(0,i.jsxs)(t.p,{children:["We also have a new template to include, which you can donwload ",(0,i.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(3501).Z+"",children:"here"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["As with the previous code, you can copy and paste this application directly into your Docassemble playground. You can also upload the template above into your Docassemble playground. Legal Aid NSW has a ",(0,i.jsx)(t.a,{href:"https://www.legalaid.nsw.gov.au/content/dam/legalaidnsw/documents/pdf/my-problem-is-about/my-job/wages-and-entitlements-forms/Sample%20-%20Form%2017%20-%20Statement%20of%20Claim%20-%20unpaid%20wages%20and%20entilements.pdf",children:"sample statement of claim"})," that you can use to help test your application as well."]})}),"\n",(0,i.jsx)(t.h3,{id:"using-if-statements-in-jinja",children:"Using If Statements in Jinja"}),"\n",(0,i.jsx)(t.p,{children:"The first thing different that we have implemented in this version is a series of if statements in our Jinja template. These if statements allow us to control the content that we insert into our template."}),"\n",(0,i.jsxs)(t.p,{children:["Jinja if statements are similar to Mako if statements which we previously considered in ",(0,i.jsx)(o.DisplayChapter,{chapter:"chapter_04"}),", except:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The if statement needs to be encased in ",(0,i.jsx)(t.em,{children:"braces"}),", or curly brackets"]}),"\n",(0,i.jsxs)(t.li,{children:["The if statement clause should start and end with a ",(0,i.jsx)(t.code,{children:"%"})," symbol"]}),"\n",(0,i.jsxs)(t.li,{children:["There needs to be an ",(0,i.jsx)(t.code,{children:"endif"})," clause encased in a single set of curly brackets and a set of ",(0,i.jsx)(t.code,{children:"%"})," symbols."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For example, if our form is being prepared by a lawyer, we only want certain content to be displayed, such as the name of the law firm. We can do this using Jinja if statements. We have implemented this in our template in the following manner:"}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_08/ch08_jinja_if_statement_law_firm_template.PNG",altText:"A screenshot of our final template with if statements included. In particular, note the if statements for {{lawFirm}}"}),"\n",(0,i.jsxs)(t.p,{children:["Note that in this screenshot we can also can see that for the variable next to Filed on behalf of, we have an ",(0,i.jsx)(t.code,{children:"if-elif"})," statement block. We can use this block if we always want some text to be displayed."]}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_08/ch08_jinja_if_statement_law_firm_complete.PNG",altText:"A screenshot of a completed version of our template where the user has indicated that the matter is being filed by a law firm."}),"\n",(0,i.jsx)(t.p,{children:"We can also use if statements to insert or not insert whole paragraphs of text. For example, in our template we have a certificate signed by the lawyer that the form has been completed on Page 2:"}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_08/ch08_jinja_if_statement_certificate_template.PNG",altText:"A screenshot of a completed version of our template where the user has indicated that the matter is being filed by a law firm."}),"\n",(0,i.jsx)(t.p,{children:"We can see from this screenshot that the entire paragraph is encased in an if statement. Therefore, if we state that the person signing this form is either the lawyer for the applicant or the lawyer for the respondent, this text will be displayed. Otherwise, it will not."}),"\n",(0,i.jsx)(t.h3,{id:"using-complex-data-structures",children:"Using Complex Data Structures"}),"\n",(0,i.jsx)(t.p,{children:"One of the requests for us to modify our application has been to allow the user to enter each pleading as a numbered list in our complete template. We can do this using for loops and objects."}),"\n",(0,i.jsxs)(t.p,{children:["You might recall that in ",(0,i.jsx)(o.DisplayChapter,{chapter:"chapter_05"}),", we covered data structures such as Lists and Dictionaries. These data structures are Python data structures. Docassemble has its own inbuilt data structures as well. These are donated by the prefix ",(0,i.jsx)(t.code,{children:"DA-"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["In this section, we will be covering one of those data structures types called ",(0,i.jsx)(t.code,{children:"DAList"}),". An object of ",(0,i.jsx)(t.code,{children:"DAList"})," is like a regular Python list, but it also has certain properties."]}),"\n",(0,i.jsx)(t.h4,{id:"declaring-a-list-of-pleadings",children:"Declaring a List of Pleadings"}),"\n",(0,i.jsxs)(t.p,{children:["In our application, we will use our list to store each of our pleadings. We first need to declare our list of pleadings. We do this in the ",(0,i.jsx)(t.code,{children:"objects"})," block on Line 7 of our application."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:'language-yaml"',children:"---\nobjects: \n  - endpoint: DADict\n  - soc: DAList.using(there_are_any=True, object_type=DAObject, complete_attribute='pleading')\n---\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You might have noticed that ",(0,i.jsx)(t.code,{children:"soc"})," (which stands for 'statement of claim') is declared a little differently to ",(0,i.jsx)(t.code,{children:"endpoint"})," immediately above it. Specifically:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["A ",(0,i.jsx)(t.code,{children:"DAList"})," is an object with methods. One of those methods is ",(0,i.jsx)(t.code,{children:".using"}),", which we use when we create the object."]}),"\n",(0,i.jsx)(t.li,{children:"When we use a method, we follow the method keyword with a set of parentheses or brackets. We can then put in parameters into these brackets."}),"\n",(0,i.jsxs)(t.li,{children:["Our first parameter is ",(0,i.jsx)(t.code,{children:"there_are_any"}),". This sets a Boolean attribute for our object on whether there are any values to gather. Because our statement of claim will have at least one pleading, we set this to True.]"]}),"\n",(0,i.jsxs)(t.li,{children:["Our second parameter is our object type. This will be the object which will be contained in our list. We will set this to a ",(0,i.jsx)(t.code,{children:"DAObject"}),", which is a special Docassemble object type."]}),"\n",(0,i.jsxs)(t.li,{children:["Our third parameter is ",(0,i.jsx)(t.code,{children:"complete_attribute"}),". This sets the name of an attribute for each object in our ",(0,i.jsx)(t.code,{children:"DAList"}),". To gather an object and add it to a list, we need to set the value for this attribute. In our application, we are setting our ",(0,i.jsx)(t.code,{children:"complete_attribute"})," to 'pleading'."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["If you do not know what all of these terms mean, do not worry. For now, this is all you need to know in order to create a ",(0,i.jsx)(t.code,{children:"DAList"})," in Docassemble."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If you want to learn more about how to use lists, you can read the sections on ",(0,i.jsx)(t.a,{href:"https://docassemble.org/docs/objects.html",children:"Objects"})," and ",(0,i.jsx)(t.a,{href:"https://docassemble.org/docs/groups.html",children:"Groups"})," Docassemble developers manual."]})}),"\n",(0,i.jsx)(t.h4,{id:"filling-in-our-list",children:"Filling In Our List"}),"\n",(0,i.jsxs)(t.p,{children:["Now that we have declared our ",(0,i.jsx)(t.code,{children:"DAList"})," obiject, the next step is to fill our list. We can do that with the two question blocks that we have defined on Lines 153 to 164."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:'language-yaml"',children:"---\n# Pleadings initial question\n# This question asks for the first pleading\nquestion: |\n  What is the ${ ordinal(i) } pleading in your statement of claim?\nfields:\n  - Pleading: soc[i].pleading\n---\n# This question asks if there is another pleading\nquestion: |\n  Is there another pleading?\nyesno: soc.there_is_another\n---\n"})}),"\n",(0,i.jsxs)(t.p,{children:["What will these two question blocks do? We know that because we have declared our ",(0,i.jsx)(t.code,{children:"DAList"})," with ",(0,i.jsx)(t.code,{children:"there_are_any"})," set to ",(0,i.jsx)(t.code,{children:"True"}),", there must always be one pleading. Therefore, the first question block asking our user to set the pleading will be fired first."]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"i"})," in our code refers to the current index (or position) our ",(0,i.jsx)(t.code,{children:"DAList"}),", as we discussed in ",(0,i.jsx)(o.DisplayChapter,{chapter:"chapter_05"}),". When we use the words ",(0,i.jsx)(t.code,{children:"ordinal"}),", we are using an inbuilt Docassemble function which turns an integer into that integer plus one expressed as a word."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["As we covered in ",(0,i.jsx)(o.DisplayChapter,{chapter:"chapter_05"}),", the first index for a list in Python (or any programming language) is position 0."]})}),"\n",(0,i.jsx)(t.p,{children:"Therefore, the question block from Lines 154 to 160 will be executed first, which will ask for the first pleading in the statement of claim."}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_08/ch08_federal_court_first_pleading_screen.PNG",altText:"A screenshot of the question screen which asks for the user to enter in the first pleading."}),"\n",(0,i.jsx)(t.p,{children:"Once we have entered this pleading, the application will then fire the question on Lines 160 to 165. This question screen will ask the user to indicate whether there is another pleading."}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_08/ch08_federal_court_is_another_pleading_screen.PNG",altText:"A screenshot of the question screen which is displayed once the user enters a pleading. This screen will be continually displayed until the presses no."}),"\n",(0,i.jsxs)(t.p,{children:["If the user presses Yes, they will be prompted to enter a statement of claim. This process continues until the user presses No, which will set the attribute ",(0,i.jsx)(t.code,{children:"there_is_another"})," to ",(0,i.jsx)(t.code,{children:"False"}),". At this point, the final eligible screen will be displayed, along with the full list of pleadings presented in a numbered list, which is generated by the for loop on Lines 209 to 211 of our application."]}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_08/ch08_federal_court_complete_pleadings_docassemble.PNG",altText:"A screenshot of the final eligible screen with our completed list of pleadings."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Note that we only have one numbered item on Line 210 of our application. However, Markdown will automatically number this list for us."})}),"\n",(0,i.jsx)(t.h3,{id:"using-paragraphs",children:"Using Paragraphs"}),"\n",(0,i.jsx)(t.p,{children:"If you look at our template, you will see that we have replicated the logic of our if statement."}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_08/ch08_federal_court_template_pleadings_for_loop.PNG",altText:"A screenshot of our template with the for loop which will be used to generate a list of pleadings."}),"\n",(0,i.jsx)(t.p,{children:"We can see that there are some differences between the for loop syntax we use in Mako and Jinja:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Like an if statement in Jinja, our for loop must be encased in a single pair of curly brackets or braces"}),"\n",(0,i.jsx)(t.li,{children:"The variable that we are referring to must be encased in a double pair of brackets"}),"\n",(0,i.jsxs)(t.li,{children:["Our ",(0,i.jsx)(t.code,{children:"for"})," loop and ",(0,i.jsx)(t.code,{children:"endfor"})," statements need to be encased in a pair of ",(0,i.jsx)(t.code,{children:"%"})," symbols."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["However, we want to make sure that we avoid extra line breaks. We do this by putting a ",(0,i.jsx)(t.code,{children:"p"})," immediately after our first ",(0,i.jsx)(t.code,{children:"%"})," symbol and before the start of our for loop clause. This tells Docassemble that we need to remove the paragraph where our ",(0,i.jsx)(t.code,{children:"for"})," loop clause is located."]}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_08/ch08_federal_court_template_pleadings_for_loop_output.PNG",altText:"The output from our template using the pleadings we previously entered. Note that the paragraph where our if statement would be has been removed."}),"\n",(0,i.jsx)(t.h3,{id:"using-functions",children:"Using Functions"}),"\n",(0,i.jsx)(t.p,{children:"Our final instruction to improve our application was to ensure that the date of filing and the date of certificate are formatted in an AGLC format. We also need to extract the date from the date of filing to insert the matter year."}),"\n",(0,i.jsxs)(t.p,{children:["To do so, we need to format our dates using another inbuilt function in Docassemble - ",(0,i.jsx)(t.code,{children:"format_date"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:'language-yaml"',children:"---\ncode: |\n  dateOfFilingAGLC = format_date(dateOfFiling, format='d MMMM YYYY')\n  matterYear = format_date(dateOfFiling, 'YYYY')\n  if capacityOfFiler == 'Lawyer for the Applicant' or capacityOfFiler == 'Lawyer for the Respondent':\n    dateOfCertAGLC = format_date(dateOfCert, format='d MMMM YYYY')\n---\n"})}),"\n",(0,i.jsxs)(t.p,{children:["First, we need to declare a new variable, ",(0,i.jsx)(t.code,{children:"dateOfFilingAGLC"}),". We then use the ",(0,i.jsx)(t.code,{children:"format_date"})," function. We pass ",(0,i.jsx)(t.code,{children:"dateOfFiling"})," as the variable that we want to format as the first parameter. We then pass the date format we want to use as the second parameter. Dates in ",(0,i.jsx)(t.a,{href:"https://law.unimelb.edu.au/__data/assets/pdf_file/0005/3181325/AGLC4-with-Bookmarks-1.pdf",children:"AGLC"})," are formatted in a Day-Month-Year format, and the day should not be an ordinal number. Therefore, we use the format 'd MMMM YYYY'."]}),"\n",(0,i.jsxs)(t.p,{children:["Second, we declare another new variable, ",(0,i.jsx)(t.code,{children:"matterYear"}),". The only difference here is that we extract just the year of filing by using the ",(0,i.jsx)(t.code,{children:"YYYY"})," format."]}),"\n",(0,i.jsxs)(t.p,{children:["Third, we only declare a new variable called ",(0,i.jsx)(t.code,{children:"dateOfCertAGLC"})," if ",(0,i.jsx)(t.code,{children:"capacityOfFiler"})," is set to 'Lawyer for the Applicant' or 'Lawyer for the Respondent'. Note that ",(0,i.jsx)(t.code,{children:"dateOfCert"})," will only be assigned a value if ",(0,i.jsx)(t.code,{children:"capacityOfFiler"})," is set to 'Lawyer for the Applicant' or 'Lawyer for the Respondent'."]}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["If we want to use variables that would only be displayed in certain circumstances, it is good coding practice to use ",(0,i.jsx)(t.code,{children:"show if"})," clauses and ",(0,i.jsx)(t.code,{children:"if statements"})," in both our question block and our templates."]})}),"\n",(0,i.jsx)(t.p,{children:"When we run our application, our dates will be formatted in an AGLC style:"}),"\n",(0,i.jsx)(o.DisplayImage,{imageURL:"/img/textbook/chapter_08/ch08_federal_court_template_pleadings_date_highlighted.PNG",altText:"The output from our template using the pleadings we previously entered, with the date highlighted in an AGLC compliant format."}),"\n",(0,i.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(t.p,{children:"In this section we have covered:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"How to use if statements in Jinja"}),"\n",(0,i.jsx)(t.li,{children:"How to insert for loops into a Jinja template"}),"\n",(0,i.jsx)(t.li,{children:"How to create paragraphs using Jinja"}),"\n",(0,i.jsx)(t.li,{children:"When and how to use functions to format the output from our application"}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},3501:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/Federal_Court_Form_17_Final-6642d4b4013188d46257fd1a89fa8a89.docx"}}]);