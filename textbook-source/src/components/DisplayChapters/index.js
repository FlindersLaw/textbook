import React from "react";

export function DisplayChapter(props) {
    // Expect: a chapter number ie: '1', '2', etc.  The number should correspond
    //         to 'chapter_n' in docs/textbook.  We will append the number as a string
    //         to the literal 'chapter_'
    // Return: an <a> tag with appropriate CSS styling for displaying a
    //         link to a chapter
    // TODO: Check if chapter exists and display an error otherwise.

    // We'll set up some constants in here
    let chapterDocPath = '/docs/textbook';
    let chapterPrefix  = 'chapter_';
    let chapterText    = 'Chapter';

    let chapterURL = chapterDocPath + '/' + chapterPrefix + props.chapter;
    let chapterDescription = chapterText + ' ' + props.chapter;

    return <a href={chapterURL} className="displayChapterURL">{chapterDescription}</a>
}