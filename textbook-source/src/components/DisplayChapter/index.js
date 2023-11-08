import React from "react";

export function DisplayChapter(props) {
    // Expect: props.chapter - name of chapter folder eg: 'chapter_1'
    //         props.upper   - optional, displays the chapter name in UPPERCASE
    //         props.lower   - optional, displays the chapter anme in lowercase
    //         props.number  - Displays the chapter text as a number is 'Chater 1' (instead of 'Chapter One')
    //         props.nourl   - Displays the chapter text and not as a link. Can use along with 'upper', 
    //                         'lower' and 'number'
    // Return: an <a> tag with appropriate CSS styling for displaying a
    //         link to a chapter
    // By default will return a link with link text as eg: 'Chapter One' (ie:
    // each word capitalised and numbers converted to words). Use 
    // props.upper, lower, number as described above to modify display
    // of output
    // TODO: Check if chapter exists and display an error otherwise.
    // TODO: Allow for chapters to exist in paths other than chapterDocPath

    // We'll set up some constants in here
    const chapterDocPath = '/docs/textbook';
    const chapterPrefix  = 'chapter_';
    const chapterTextPrefix  = 'chapter';

    // Need to map chapter identifiers to numbers and numbers
    // as words
    // The key to the map should be the folder name as it exists
    // in chapterDocPath.
    // NOTE: All chapters must be in chapterDocPath for this to work
    const chapter_map = {
        // The map key
        'chapter_1' : {
            number: '1',
            word : "one",  // Always enter as lower case.  Will sort out formatting in the method
        },
        'chapter_2' : {
            number: '2',
            word : "two",
        },
        'chapter_3' : {
            number: '3',
            word : "three",
        },
        'chapter_4' : {
            number: '4',
            word : "four",
        },
        'chapter_5' : {
            number: '5',
            word : "five",
        },
        'chapter_6' : {
            number: '6',
            word : "six",
        },
    }

    // First check this chapter exists.  Otherwise return an error
    let chapterPath = chapterDocPath + '/' + props.chapter;

    if ( ! chapter_map.hasOwnProperty(props.chapter) ) {
        return <a href={chapterPath} className="TODOerror"> Error: path to {chapterPath} does not exist</a>
    }

    // First, get the record from the map
    let chapterRecord = chapter_map[props.chapter];
    let linkText = `${chapterTextPrefix} ${chapterRecord['word']}`;
    if (props.upper) {
        linkText = linkText.toUpperCase();
    } else if ( props.lower ) {
        linkText = linkText.toLowerCase();
    } else if ( props.number ) {
        // Reconstruct the link text if it's a number
        linkText = `${chapterTextPrefix} ${chapterRecord['number']}`;
        linkText = capitalizeWords(linkText);
    } else {
        // Default is first letter capitalised
        linkText = capitalizeWords(linkText);
    }

    if ( props.nourl ) {
        return <span class="displayChapterSpan">{linkText}</span>
    } else {
        return <a href={chapterPath} className="displayChapterSpan">{linkText}</a>
    }
}

function capitalizeWords(inputString) {
    // Split the input string into words based on spaces
    const words = inputString.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        if (word.length > 0) {
            return word.charAt(0).toUpperCase() + word.slice(1);
        } else {
            return word; // Preserve empty words (e.g., multiple spaces)
        }
    });

    // Join the capitalized words back into a single string
    const result = capitalizedWords.join(' ');

    return result;
}