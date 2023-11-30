import React from "react";
import glossary from "./glossary";
import * as Constants from '@site/src/constants';

export function DisplayGlossaryItem(props) {
    // Expect: props.data - key to item to display
    //         props.upper - if it exists then the first letter of the term
    //         is capitalised
    // Return: JSX with information required
    // 31 May 2023: Just a shell for now.  Will display the text bolded.
    // The final version of this function should display the item in a 
    // particular style and also link that item to a glossary.
    // at least by making this shell it will be easy to convert
    // glossary items to proper ones in future

    let glossaryItem = glossary.get(props.item);
    let display_text;

    if (glossaryItem) {
        if (props.plural) {
            display_text = glossaryItem.plural || glossaryItem.text + ' - NO PLURAL';
        } else {
            display_text = glossaryItem.text;
        }
    } else {
        display_text = props.item + ' - NOT DEFINED';
    }

    if ( props.upper ) {
        display_text = display_text.charAt(0).toUpperCase() + display_text.slice(1);
    }
    return <b>{display_text}</b>
}