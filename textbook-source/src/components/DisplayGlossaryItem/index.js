import React from "react";
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

    // Add glossary items here.  This may get removed out to constants.js or
    // its own data file eventually but here will do for now.
    // Also for now, the map contains a key and a text value which is
    // what will be displayed.  I envisage this data structure will be 
    // expanded in future
    const glossaryItemMap = new Map([
        ['block', { text: 'block' }],
        ['comment', { text: 'comment' }],
        ['mandatory', { text: 'mandatory' }],
        ['mandatoryblock', {
            text: 'mandatory block',
            description: 'A block with the tag `mandatory: True` set. This indicates to Docassemble that this block must be executed'
        }],
        ['mandatoryquestionblock', { text: 'mandatory question block' }],
        ['playground', { text: 'playground' }],
    ]);

    let glossaryItem = glossaryItemMap.get(props.item);
    let display_text;

    if (glossaryItem) {
    display_text = glossaryItem.text;
    } else {
    display_text = props.item + ' - NOT DEFINED';
    }

    if ( props.upper ) {
        display_text = display_text.charAt(0).toUpperCase() + display_text.slice(1);
    }
    return <b>{display_text}</b>
}