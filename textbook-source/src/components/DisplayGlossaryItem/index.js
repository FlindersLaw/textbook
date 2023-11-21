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
        ['block', {
            text: 'block',
            plural: 'blocks' }
        ],
        ['boolean', { text: 'boolean'} ],
        ['brace', {
            text: 'brace',
            plural: 'braces' }
        ],
        ['bracket', {
            text: 'bracket',
            plural: 'brackets' }
        ],
        ['codeblock', {
            text: 'code block',
            plural: `code blocks` }
        ],
        ['comment', {
            text: 'comment',
            plural: 'comments' }
        ],
        ['curlybrace', {
            text: 'curly brace',
            plural: 'curly braces' }
        ],
        ['datablock', {
            text: 'data block',
            plural: 'data blocks',
            description: 'Remember to include the term "variable name declaration" in this description' }
        ],
        ['dictionary', {
            text: 'dictionary',
            plural: 'dictionaries' }
        ],
        ['field', {
            text: 'field',
            plural: 'fields'}
        ],
        ['fieldlabel', {
            text: 'field label',
            plural: 'field labels'}
        ],
        [ 'function', {
            text: 'function',
            plural: 'functions' }
        ],
        [ 'ifstatement', {
            text: 'if statement',
            plural: 'if statements' }
        ],
        ['jinja', { text: 'jinja' }],
        [ 'list', {
            text: 'list',
            plural: 'lists' }
        ],
        ['mako', { text: 'mako' }],
        ['mandatory', { text: 'mandatory' }],
        ['mandatoryblock', {
            text: 'mandatory block',
            description: 'A block with the tag `mandatory: True` set. This indicates to Docassemble that this block must be executed',
            plural: 'mandatory blocks' }
        ],
        ['mandatoryquestionblock', {
            text: 'mandatory question block',
            plural: 'mandatory question blocks' }
        ],
        ['markdown', { text: 'markdown' }],
        ['method', { text: 'method', plural: 'methods' }],
        ['parentheses', { text: 'parentheses' }],
        ['playground', { text: 'playground' }],
        ['python', { text: 'python' }],
        ['questionblock', {
            text: 'question block',
            plural: `question blocks` }
        ],
        ['reservedword', { text: 'reserved word' }],
        ['squarebracket', {
            text: 'square bracket',
            plural: 'square backets' }
        ],
        ['string', {
            text: 'string',
            plural: 'strings' }
        ],
        ['subquestionblock', {
            text: 'subquestion block',
            plural: `subquestion blocks` }
        ],
        ['table', {
            text: 'table',
            plural: 'tables' }
        ],
        ['tableblock', {
            text: 'table block',
            plural: 'table blocks' }
        ],
        ['variable', {
            text: 'variable',
            plural: 'variables' }
        ],
    ]);

    let glossaryItem = glossaryItemMap.get(props.item);
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