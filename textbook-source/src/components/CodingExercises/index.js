import React from 'react';

/**
 * This is used to display the coding exercises inline. It was written
 * to be used in /pages/coding_exercises.mdx.  It does the following
 * - Displays the title of each exercise as a h3 (###)
 * - Displays the video(s) to watch
 * - Renders the coding exercise
 * 
 * TODO: Style the returned code appropriately
 * 
 * @param {title} 'title' string from coding exercise
 * @param {video} 'video' string from coding exercise
 * @param {children} Default coding exercise component to render 
 * @returns  <div> containing the coding exercise appropriately styled
 */
export function DisplayInlineExercise({title, video, children}) {
    return(
        <div id="codexInline">
            <h3 id={title} class="anchor">
                Exercise {title}
                <a
                    class="hash-link"
                    href={`#${title}`}
                    aria-label={`Direct link to ${title}`}
                    title={`Direct link to ${title}`}>
                </a>
            </h3>
            <div className='video-section'>
                <div className='bordered-label'>
                    Videos:
                </div>
                <div className='bordered-text'>
                    {video}
                </div>
            </div>

            {children}
        </div>
    )
}

/**
 * Displays a <h2> tag appropriately styled for the coding exercises page
 * and with correct links etc
 * Coding Exercises styles are in the #codexInline CSS 
 * @param {children} content of <h2> tag 
 * @returns <h2> appropriately styled
 */
 export function DisplayInlineExerciseH2({title}) {
    return(
        <div id="codexInline">
            <h2 id={title} class="anchor anchorWithStickyNavbar_node_modules-@docusaurus-theme-classic-lim-theme-Headaing-styles-module">
                {title}
                <a
                    class="hash-link"
                    href={`#${title}`}
                    aria-label={`Direct link to ${title}`}
                    title={`Direct link to ${title}`}>
                </a>
            </h2>
        </div>
    )
 }

/**
 * Creates a table row to be passed into CodingExerciseTable 
 * to enable display of coding exercise in the table
 * 
 * @param {title} 'title' string from coding exercise
 * @param {video} 'video' string from coding exercise
 * @param {children} Default coding exercise component to render 
 * @returns  <tr> containing table row to display the coding exercise
 */
export function CreateTableRow ({title, video, children}) {
    return(
        <tr>
            <td>{title}</td>
            <td>{video}</td>
            <td>{children}</td>
        </tr>
    )
}

/**
 * Displays the supplied coding exercises in an appropriately
 * styled table.
 *  
 * @param {rows} a list of <CreateTableRow /> components 
 * @returns <table> displaying each coding exercise as a row in that table
 */
export const CreateCodingExerciseTable = ({rows}) => {
    const [data, setData] = React.useState(() => [...rows]);

    return(
        <table id="codexTable">
            <tr>
                <th>ID</th>
                <th>Watch</th>
                <th>Exercise</th>
            </tr>
            {data}
        </table>
    )
}

/**
 * 
 */