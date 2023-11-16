import React from "react";
import * as Constants from '@site/src/constants';

/** Link to Flinders Docassemble Server */
export const dahref = 'dahref';
/** Link to Docassemble.org */
export const daorghref = 'daorghref';
/** Link to GitHub */
export const github = 'github';
/** Link to Docassemble manual */
export const damanual = 'damanual';
/** URL to teaching code repository in <code> block */
export const teachingcodeurl = 'teachingcodeurl';

/** Default name for daorghref */
const daOrgServerName = 'Docassemble'

/**
 * DisplayConstants - displays <a> for selected constants, such as GitHub URL
 * or link to Docassemble server
 * @param {Object} props - Component props
 * @param {string} props.data - key to constant to display. See constants in component
 * @param {string} [props.text] - Optional text to display in <a> tag
 * @returns {JSX.Element} - React component <a> link with
 */
export function DisplayConstants(props) {
    // Display the name or href of the DA server
    if ( props.data == dahref) {
        // return an <a> tag.  
        let display_text = props.text || Constants.flinders_da_server_name;
        return <a href={Constants.flinders_da_server_url}>{display_text}</a>
    } else if ( props.data == daorghref ) {
        // Return link to docassemble.org
        let display_text = props.text || daOrgServerName;
        return <a href={Constants.da_website_url}>{display_text}</a>
    } else if ( props.data == github ) {
        return <a href={Constants.github_server_url}>{Constants.github_server_name}</a>
    } else if ( props.data == damanual ) {
        return <a href={Constants.da_manual_url}>{Constants.da_manual_name}</a>
    } else if ( props.data == teachingcodeurl ) {
        return <code>{Constants.github_teaching_code}</code>
    } else {
        return <span className="TODOerror">Unknown data supplied: {props.data}</span>
    }
}

export function DisplayDAManualParts(props) {
    // Expect: props.endpoint - path to part of docs manual to display.
    //         this will be added to Constants.da_manual_url_root
    //      
}