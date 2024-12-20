import React from "react";
import useBaseURL from '@docusaurus/useBaseUrl';
import {Link} from 'react-router-dom';
import chapter_list from './chapter_list.js';
import {capitalizeWords} from './utilities.js';
import styles from './styles.module.css';

/**
 * DisplayChapter component displays a link or text for a chapter.
 * 
 * By default will return a link with link text as eg: 'Chapter One' (ie:
 * each word capitalised and numbers converted to words). Use 
 * props upper, lower, number as described to modify display
 * of output.
 *
 * @param {Object} props - Component props.
 * @param {string} props.chapter - Name of the chapter folder, e.g., 'chapter_01'.
 * @param {string} props.pinpoint - Identifier of pinpoint referents in that chapter.
 *                                  This should be a path to a page (eg: '00-20') or a
 *                                  path to a page and a target (eg: '00-20#line-6'). 
 *                                  This is appended to the chapter path with a slash
 *                                  (eg: .../chapter_03/00-20#line6)
 * @param {boolean} [props.upper] - Optional. Displays the chapter name in UPPERCASE.
 * @param {boolean} [props.lower] - Optional. Displays the chapter name in lowercase.
 * @param {boolean} [props.number] - Displays the chapter text as a number like 'Chapter 1' (instead of 'Chapter One').
 * @param {boolean} [props.nourl] - Displays the chapter text and not as a link. Can be used along with 'upper', 'lower', and 'number'.
 * @param {string}  [props.text]  - If exist is the text displayed in the anchor, otherwise the chapter name is used
 *
 * @returns {JSX.Element} - React component with appropriate CSS styling for displaying a link to a chapter or plain text.
 */
export function DisplayChapter(props) {

    // We'll set up some constants in here
    const chapterDocPath = useBaseURL('/docs/textbook');
    const chapterTextPrefix  = 'chapter';

    // First check this chapter exists.  Otherwise return an error
    let chapterPath = chapterDocPath + '/' + props.chapter;
    // console.log('chapterDocPath', chapterDocPath);
    // console.log('chapterTextPrefix:', chapterTextPrefix)
    // console.log('props.chapter:', props.chapter);
    // console.log('chapterPath:', chapterPath);
    // console.log('props.target:', props.target);

    // Add the target if it exists
    let chapterTarget = ''
    if ( props.pinpoint ) {
        chapterTarget = '/' + props.pinpoint;
    } 
    chapterPath = chapterPath + chapterTarget

    // console.log('chapterTarget:', chapterPath)
    // console.log('chapterPath2:', chapterPath)

    if ( ! chapter_list.hasOwnProperty(props.chapter) ) {
        return(
            <a href={chapterPath} className={styles.DCError}>
             Error: path to {chapterPath} does not exist
            </a>
        );
    }

    // First, get the record from the map
    let chapterRecord = chapter_list[props.chapter];
    let linkText = props.text || `${chapterTextPrefix} ${chapterRecord['word']}`;
    if (props.upper) {
        linkText = linkText.toUpperCase();
    } else if ( props.lower ) {
        linkText = linkText.toLowerCase();
    } else if ( props.number && !props.text ) {
        // Reconstruct the link text if it's a number
        linkText = `${chapterTextPrefix} ${chapterRecord['number']}`;
        linkText = capitalizeWords(linkText);
    } else {
        // Default is first letter capitalised
        linkText = capitalizeWords(linkText);
    }

    // console.log('chapterRecord:', chapterRecord);
    // console.log('props.text:', props.text);
    // console.log('linkText:', linkText);

    if ( props.nourl ) {
        return <span class="displayChapterSpan">{linkText}</span>
    } else {
        return <Link to={chapterPath} className="displayChapterSpan">{linkText}</Link>
    }
}