import React from "react";
import * as Constants from '@site/src/constants';

export function DisplayConstants(props) {
    // Expect: props.data - key to constant to display
    //         props.text - optional text to display in <a> tag
    // Return: JSX with information requested
    // Displays constants that we have set, such as the 
    // name and URL of the docassemble server

    // Display the name or href of the DA server
    if (props.data == 'daurl') {
        return Constants.docassemble_server_url;
    } else if ( props.data == 'dahref') {
        // return an <a> tag.  
        let display_text = props.text || Constants.docassemble_server_name;
        return <a href={Constants.docassemble_server_url}>{display_text}</a>
    } else if ( props.data == 'daorghref' ) {
        // Return link to docassemble.org
        let display_text = props.text || 'Docassemble'
        return <a href={Constants.da_website_url}>{display_text}</a>
    } else if ( props.data == 'github' ) {
        return <a href={Constants.github_server_url}>{Constants.github_server_name}</a>
    } else if ( props.data == 'damanual' ) {
        return <a href={Constants.da_manual_url}>{Constants.da_manual_name}</a>
    } else {
        return <span className="TODOerror">Unknown data supplied: {props.data}</span>
    }
}

export function DisplayDAManualParts(props) {
    // Expect: props.endpoint - path to part of docs manual to display.
    //         this will be added to Constants.da_manual_url_root
    //      
}