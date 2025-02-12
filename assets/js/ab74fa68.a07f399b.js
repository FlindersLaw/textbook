"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[4190],{8831:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"recipes/uploading_docassemble_code","title":"Uploading your Docassemble code to FLO","description":"Some assessments may require you to upload Docassemble code to FLO (Canvas) and","source":"@site/docs/recipes/uploading_docassemble_code.mdx","sourceDirName":"recipes","slug":"/recipes/uploading_docassemble_code","permalink":"/textbook/docs/recipes/uploading_docassemble_code","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Uploading your Docassemble code to FLO"},"sidebar":"recipesSidebar","previous":{"title":"Template blocks","permalink":"/textbook/docs/recipes/templates"}}');var n=o(4848),t=o(8453),i=o(1428),l=o(8958);const r={title:"Uploading your Docassemble code to FLO"},d=void 0,c={},u=[{value:"Create a Project",id:"create-a-project",level:2},{value:"Add your assessment files",id:"add-your-assessment-files",level:2},{value:"Create a Package for export",id:"create-a-package-for-export",level:2},{value:"Set Package metadata",id:"set-package-metadata",level:3},{value:"Add files to your package",id:"add-files-to-your-package",level:3},{value:"Interview files",id:"interview-files",level:4},{value:"Template files",id:"template-files",level:4},{value:"Static files",id:"static-files",level:4},{value:"Source files",id:"source-files",level:4},{value:"Modules",id:"modules",level:4},{value:"Save and download your package",id:"save-and-download-your-package",level:3},{value:"Test your Package",id:"test-your-package",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Some assessments may require you to upload Docassemble code to FLO (Canvas) and\nmay instruct you to create a Docassemble ",(0,n.jsx)(s.a,{href:"https://docassemble.org/docs/packages.html",children:"package"}),"\nto do so.  This document explains one way to do this."]}),"\n",(0,n.jsx)(s.p,{children:"Docassemble packages are essentially a zip file containing all your code and other\ninformation to run your app.  This document takes you the the process of creating\nthat package Zip file, downloading it and testing it to make sure it works."}),"\n",(0,n.jsx)(s.p,{children:"This document does not cover how to upload a zip to Canvas.  You upload zip files like\nyou would upload any file."}),"\n",(0,n.jsx)(s.h2,{id:"create-a-project",children:"Create a Project"}),"\n",(0,n.jsx)(s.p,{children:"If you haven't already done so create a Playground Project for your assessment."}),"\n",(0,n.jsxs)(s.p,{children:["Click on your Playground menu and select ",(0,n.jsx)(s.em,{children:"Manage Projects"})]}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload1.png"}),"\n",(0,n.jsx)(s.p,{children:"Create a Project for your assessment by:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"clicking on Add Project"}),"\n",(0,n.jsx)(s.li,{children:"Entering a name for your Project; and"}),"\n",(0,n.jsxs)(s.li,{children:["clicking ",(0,n.jsx)(i.DisplayDAButtons,{button:l.K1}),"."]}),"\n"]}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload2.png"}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload3.png"}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsx)(s.p,{children:"A Project name must:"}),(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"start with a letter"}),"\n",(0,n.jsx)(s.li,{children:"contain only letters and numbers"}),"\n"]}),(0,n.jsx)(s.p,{children:"You will get an error if you try to enter a project name with\nspaces or dashes or underscores."}),(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload4.png"})]}),"\n",(0,n.jsx)(s.h2,{id:"add-your-assessment-files",children:"Add your assessment files"}),"\n",(0,n.jsx)(s.p,{children:"After you save your project you're taken to your Playground Project and\nyou'll see it has no files."}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload5.png",caption:"Empty Playground :-("}),"\n",(0,n.jsx)(s.p,{children:"Now create your assessment files.  If you already had your assessment files somewhere\nelse you'll need to copy and paste your existing files into files in this project."}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload6.png",caption:"Playground with project files"}),"\n",(0,n.jsx)(s.h2,{id:"create-a-package-for-export",children:"Create a Package for export"}),"\n",(0,n.jsx)(s.p,{children:"Go to Folders -> Packages"}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload7.png"}),"\n",(0,n.jsx)(s.h3,{id:"set-package-metadata",children:"Set Package metadata"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Give your package a name"}),"\n",(0,n.jsx)(s.li,{children:"Check the other information fields are correct."}),"\n"]}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload8.png"}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsx)(s.p,{children:"Your Assessment Instructions should tell you:"}),(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"how to name your package; and"}),"\n",(0,n.jsx)(s.li,{children:"which other fields must be checked and set."}),"\n"]})]}),"\n",(0,n.jsx)(s.h3,{id:"add-files-to-your-package",children:"Add files to your package"}),"\n",(0,n.jsxs)(s.admonition,{title:"WARNING",type:"caution",children:[(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"You must complete this step otherwise your pacakage export will be empty!!"})}),(0,n.jsx)(s.p,{children:"Just because you have code in your Playground it does not mean that code will\nautomatically be added to your Packages.  Packages and Playgrounds are two separate\nand unrelated things in Docassemble."}),(0,n.jsxs)(s.p,{children:["You ",(0,n.jsx)(s.strong,{children:"must explicity"})," add ",(0,n.jsx)(s.strong,{children:"all"})," your assessment files to your package"]})]}),"\n",(0,n.jsx)(s.p,{children:"Scroll down until you see the different file selector dialogs."}),"\n",(0,n.jsxs)(s.p,{children:["Check each of the ",(0,n.jsx)(s.em,{children:"Interview files"}),", ",(0,n.jsx)(s.em,{children:"Template files"}),", ",(0,n.jsx)(s.em,{children:"Static files"})," and ",(0,n.jsx)(s.em,{children:"Modules"})," for\nfiles to add to your package."]}),"\n",(0,n.jsxs)(s.p,{children:["You can click, control-click and shift-click to select the files you need.  In the example\nbelow only the Interview files ",(0,n.jsx)(s.code,{children:"main.yml"}),", ",(0,n.jsx)(s.code,{children:"questions.yml"})," and ",(0,n.jsx)(s.code,{children:"screens.yml"})," are being\nadded to this package.  Your file names and number of files may vary from assessment to assessment."]}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload9.png"}),"\n",(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsx)(s.h4,{id:"interview-files",children:"Interview files"}),(0,n.jsxs)(s.p,{children:["This is where the ",(0,n.jsx)(s.code,{children:".yml"})," files you create in your Playground are listed."]}),(0,n.jsx)(s.h4,{id:"template-files",children:"Template files"}),(0,n.jsxs)(s.p,{children:["This is where any attachment templates (eg files used for ",(0,n.jsx)(s.code,{children:"docx template file"}),") are listed."]}),(0,n.jsx)(s.h4,{id:"static-files",children:"Static files"}),(0,n.jsx)(s.p,{children:"This is where any CSS files and image files are listed"}),(0,n.jsx)(s.h4,{id:"source-files",children:"Source files"}),(0,n.jsx)(s.p,{children:"This is not usually used in the topics taught using this textbook"}),(0,n.jsx)(s.h4,{id:"modules",children:"Modules"}),(0,n.jsx)(s.p,{children:"This is not usually used in the topics taught in this textbook but it is where custom\npython modules are listed."})]}),"\n",(0,n.jsx)(s.h3,{id:"save-and-download-your-package",children:"Save and download your package"}),"\n",(0,n.jsxs)(s.p,{children:["Scroll down to the bottom of the screen.  Press ",(0,n.jsx)(i.DisplayDAButtons,{button:l.K1}),"\nand then press ",(0,n.jsx)(i.DisplayDAButtons,{button:l.Vo}),".  A zip file will be saved\nto your computer."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"This zip file is the file you must upload to FLO."})}),"\n",(0,n.jsx)(s.h2,{id:"test-your-package",children:"Test your Package"}),"\n",(0,n.jsx)(s.p,{children:"You can test your exported Package before you submit it.  Do the following:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Create another empty Playground project"}),"\n",(0,n.jsx)(s.li,{children:"Go to Folders -> Packages in your new Project"}),"\n",(0,n.jsxs)(s.li,{children:["Select ",(0,n.jsx)(s.strong,{children:"Upload"})]}),"\n"]}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload10.png"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Upload your zip file"}),"\n",(0,n.jsx)(s.li,{children:"In the package window you should see your package information"}),"\n"]}),"\n",(0,n.jsx)(i.DisplayImage,{imageURL:"/img/textbook/Assessments/upload11.png"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["Click on the ",(0,n.jsx)(s.code,{children:"<Back"})," button at the top left of the Navbar to go back to your Playground"]}),"\n",(0,n.jsx)(s.li,{children:"Check all your files"}),"\n",(0,n.jsx)(s.li,{children:"Run your app and make sure it works."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"If your upload hasn't worked then it means that your Package was not created properly.  Run through\nthe Package creation process described above again and follow the steps carefully."})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);