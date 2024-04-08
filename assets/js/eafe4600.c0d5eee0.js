"use strict";(self.webpackChunktextbook_source=self.webpackChunktextbook_source||[]).push([[2040],{6663:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var n=t(4848),s=t(8453);const a={title:"Application Source Code"},r=void 0,i={id:"textbook/chapter_07/00-30",title:"Application Source Code",description:"This page contains the final code for our app.  As you've noticed, the code is spread across two files and",source:"@site/docs/textbook/chapter_07/00-30.mdx",sourceDirName:"textbook/chapter_07",slug:"/textbook/chapter_07/00-30",permalink:"/textbook/docs/textbook/chapter_07/00-30",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Application Source Code"},sidebar:"textbookSidebar",previous:{title:"Making the changes",permalink:"/textbook/docs/textbook/chapter_07/00-20"},next:{title:"Chapter 8. How to Create Attachments",permalink:"/textbook/docs/textbook/chapter_08/"}},l={},h=[{value:"<code>chapter7.yml</code>",id:"chapter7yml",level:2},{value:"<code>styles.css</code>",id:"stylescss",level:2},{value:"<code>flinders_logo.png</code>",id:"flinders_logopng",level:2}];function d(e){const o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"This page contains the final code for our app.  As you've noticed, the code is spread across two files and\ndepends on a Flinders logo file as well."}),"\n",(0,n.jsx)(o.p,{children:"Unlike the code snippets in this chapter, this complete code has been extensively commented."}),"\n",(0,n.jsx)(o.h2,{id:"chapter7yml",children:(0,n.jsx)(o.code,{children:"chapter7.yml"})}),"\n",(0,n.jsxs)(o.p,{children:["Copy this file into ",(0,n.jsx)(o.code,{children:"chapter7.yml"})," in your Playground"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-yml",metastring:"showLineNumbers",children:"---\n# A wide range of metadata can be set for your code.  In this example\n# we set the title, short title and (potentially)disable login prompts.\n# For more information on metadata visit\n# https://docassemble.org/docs/initial.html#metadata\nmetadata:\n  title: |\n    Look and Feel Demonstrator\n  short title: |\n    Style Demonstrator\n  show login: True\n---\n# Declare your logo as an object.  This is required to display the\n# logo in the navbar along with the title (by default, Docassemble\n# displays *either* the Title text or the logo)).  The image file\n# is in the 'Static' folder in the Playground\nobjects:\n  - MJFlogo: DAStaticFile.using(filename='flinders_logo.png')\n---\n# We want to set a logo also.  The Docassemble manual (Initial Blocks [1])\n# says we can use a 'logo' key.  That only works when using an image file\n# that's not in the package (ie: on the internet somewhere).  As our logo is\n# uploaded in our package we need this code block to set our logo.\n#\n# Note also at the end of set_parts() below we control the height of our logo\n# using the 'height' style\nmandatory: True\ncode: |\n  set_parts(logo='<img src=\"' + MJFlogo.url_for() + '\" style=\"height: 50px;\">')\n---\n# Features can turn on or off many, well, features in Docassemble.  \n# Our example includes a CSS file and (potentially) turns off the menus in the navbar.\n# The CSS file is in the 'Static' folder in the playground.\n# For more information on features visit\n# https://docassemble.org/docs/initial.html#features\nfeatures:\n  css: styles.css\n  debug: True\n  hide standard menu: False\n---\n# Customising the look and feel\nmandatory: True\nquestion: Look and Feel Demonstrator\nsubquestion: |\n  This question block demonstrates how to perform basic customisations to the look and feel\n  of your app.  Most of the customisation is done using **Cascading Stylesheets**, or [CSS](https://www.w3schools.com/Css/).\n  CSS is the standard way of customising the look and feel of webapps.  Have a look at\n  the CSS file in the `static` forlder for this app to see more information about how we've used\n  CSS to customise this app.\n\n  You can also use [HTML](https://www.w3schools.com/html/) together CSS to improve the display\n  of your app.  In many cases HTML can be\n  mixed with markdown.  You can use CSS to control how your raw HTML looks.  For example, the `div`\n  block below is linked to a CSS style called `MJFbox`.  If you find `MJFbox` in the CSS\n  file you will see the commands that set the border, text colour and font style.\n\n  <div class=\"MJFbox\">\n  <p>This text appears in a <code>div</code> block and is formatted according to\n  the <code>MJFbox</code> style.</p>\n  \n  <p><span class=\"MJFbolder\">Note:</span> It's not always possible to use Markdown in <code>div</code>\n  blocks.  In this block we've formatted our text using HTML.  Check out the source code to see\n  which HTML tags we have used.</p>\n  </div>\nbuttons:\n  - Exit: exit\n  - Restart: restart\n  - Continue: continue\n---\n"})}),"\n",(0,n.jsx)(o.h2,{id:"stylescss",children:(0,n.jsx)(o.code,{children:"styles.css"})}),"\n",(0,n.jsxs)(o.p,{children:["Copy this code into ",(0,n.jsx)(o.code,{children:"styles.css"})," in the 'Static Files' folder of your Playground."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-css",metastring:"showLineNumbers",children:"/* This file is a CSS or Cascading Style Sheet.  It is how\n   the look and feel of web pages is controlled.  You don't need know\n   too much about how CSS works.  We only use a little of it to contol\n   the look and feel of our apps.  If you are interested in CSS there\n   are many online references \n   (eg: https://developer.mozilla.org/en-US/docs/Web/CSS)\n*/\n\n/* The :root class is a special style, or 'class' in CSS.  We won't go\n * into detail here but, amongst other things it is used to store colour\n * definitions */\n:root {\n    /* All colours in IT are set using RGB (ie: Red, Green, Blue) values.\n       Each value of red, green and blue is a number between 0 and 255.\n       Comon colour values are:\n       - red:    rgb(255, 0, 0)\n       - blue:   rgb(0, 255, 0)\n       - green:  rgb(0, 0, 255)\n       - yellow: rgb(255, 255, 0)\n       - black:  rgb(0, 0, 0)\n       - white:  rgb(255, 255, 255)\n       The whole spectrum of colours can be represented by any combination\n       of RGB values.  To choose a colour you need to know its RGB value.\n       To work that out, use MS Paint or Excel to set a colour.  Most software\n       comes with colour picking software that will show you the RGB values\n       for any colour you pick\n    */\n    /* All our variable names start with two dashes ('--'). This is required\n       by CSS so our custom properties can be distinguished from regular properties */\n    --flinders-blue: rgb(34,45,75);\n    --flinders-yellow: rgb(252,212,6);\n    /* the rgba() function works just like rgb in that\n     * it sets a colour.  But the fourth element sets an\n     * 'alpha' or transaparency value.  Here we are saying\n     * to set the transparency to 30%.\n     */\n    --flinders-yellow-30: rgba(252,212,6,0.3);\n    --flinders-yellow-50: rgba(252,212,6,0.5); \n    --continue-button-hover: rgba(151,201,255,0.3);\n}\n\n/* This is a style or a 'class'.  This class is part of a 'Bootstrap' theme.\n * Docassemble makes use of Bootstrap themes.  Bootstrap is what provides the\n * navbar at the top and the style of the buttons.  It is also what allows the\n * website to run on computers and iPads and smartphones.  We can customise\n * elements of the theme to suit our needs.  That is what the next few classes\n * do.  For more information on Bootstrap check out https://getbootstrap.com\n */\n.navbar{\n    /* We're setting our navbar to be 'Flinders blue'*/\n    background-color: var(--flinders-blue) !important;\n}\n\n/* This sets the colour of the right hand side menu (usually the login menu)\n * We're setting the menu to 'Flinders Yellow' so it contrasts against the \n * Flinders blue navbar background. We also make the text a bit bolder\n * so it stands out better against the background */\n.navbar .nav-link {\n    color: var(--flinders-yellow);\n    font-weight: bolder;\n}\n/* This sets the colour of the text of the menu items.  We're going to have\n * Flinders blue items for our text */\n.navbar .dropdown-item {\n    color: var(--flinders-blue);\n}\n\n/* These next two items set the colour of the menu.  We've decided to go\n * with (a rather garish!) Flinders yellow.  The first style sets the\n * background colour of the menu.  We use Flinders Yellow but we set an 'alpha'\n * or transparency, of 30%. This means when the menu is dropped down we can see\n * the background colours behind it.*/ \n.navbar .dropdown-menu{\n    background-color: var(--flinders-yellow-30);\n}\n/* This second class sets the 'hover' property ie: when we hover the mouse\n * over a menu item.  In this case we want the item to 'highlight' or, technically,\n * to appear a darker yellow.  So, we set the same colour but with an 'alpha'\n * of 50% here, making the colour more opaque. */\n.dropdown-item:hover{\n    background-color: var(--flinders-yellow-50);\n}\n\n/* The Continue button is set by a class called 'bton-primary'.  We \n * customise its appearance here to use Flinders blue as its \n * background colour.\n * This style sets the button... */\n.btn-primary{\n  color: white;\n  background-color: var(--flinders-blue);\n  border-color: black;\n}\n/* ...and this style sets when hovering over it */\n.btn-primary:hover{\n  color: black;\n  background-color: rgba(151,201,255,0.3);\n  border-color: black;\n}\n\n/* You can make your own styles from scratch if you wish.  There's a lot\n * you can do with styles - much more than setting font sizes and colours.\n * Here's a brief example.  Feel free to explore this further.  Search online\n * or refer to the Mozilla link at the top of this file\n *\n * This MJFbox style, or 'class', is used to format a <div> block on our\n * webpage.  A <div> is used in HTML to separate content, or 'divide' particular\n * content from the reset of the web page.  It's specifically used so we can apply\n * special styles to particular content, much like we're doing here.\n *\n * Our MJFbox class displays our text in in red and in a larger font.\n * It also creates a border around the text and creates a nice shadow\n * around the border.\n */\n.MJFbox{\n    /* Let's start with the border first. We're going to set the border\n     * to be two pixels wide and for it to have the same colour as our \n     * Navbar. */\n    border: 2px solid var(--flinders-blue);\n    /* This next line sets the 'radius' of the corners of our <div>.  The\n     * bigger the number the 'smoother' the corner radius.  10 pixels\n     * should do in our case.  Feel free to experiment though. */\n    border-radius: 10px;\n    /* This line sets our shadow.  The first three parameters set the \n     * size of the shadow.  The last parameter sets the shadow colour.\n     * We're using black with an 'alpha' or transparency applied.  Our\n     * 'alpha' is 25%, or 0.25.  That turns our black into more of a grey\n     * but also makes it appear transparent against the background. */\n    box-shadow: 0px 2px 5px rgba(0,0,0,0.25); \n    /* This line puts a bit of padding *outside* our <div>.  You can see that\n     * our box appears offset to the right of the text and also there's a gap\n     * between our div and the buttons below.  \n     * Try setting this to 0px and see what happens. */\n    margin: 10px;\n    /* This line puts a bit of padding *inside* our <div>. Without it our\n     * text would but up against the box border.\n     *\n     * Both margin and padding have more fine-grained versions of themselves.\n     * For example, to just adjust the left padding for the text, we could have\n     * used padding-left of padding.*/  \n    padding: 8px;\n    /* This line sets the text colour to a rather bright red! */\n    color: rgb(255,0,0);\n    /* This line increases the font size by 20% over the regular font size.*/\n    font-size: 1.2em;\n}\n\n/* We use this class to make some of our text bolder.  Note that this\n * class is a subclass of MJFbox.  This means that it will only be applied when\n * to elements that exist inside any text that is already covered by MJFbox.  In \n * our example that's our div.  We use this and a HTML <span> tag to make some of\n * the text in our div appear bolder than other text. */\n.MJFbox .bolder {\n    font-weight: bolder;\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"flinders_logopng",children:(0,n.jsx)(o.code,{children:"flinders_logo.png"})}),"\n",(0,n.jsxs)(o.p,{children:["Download ",(0,n.jsx)(o.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:t(1295).A+"",children:(0,n.jsx)(o.code,{children:"flinders_logo.png"})})," and save it to your\n'Static Files' folder in your Playground."]})]})}function c(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1295:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/files/flinders_logo-a99fd10a2b1e1919e070a50be33180ea.png"}}]);