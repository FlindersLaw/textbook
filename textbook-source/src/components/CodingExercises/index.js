import React from 'react';

/**
 * This is used to display the coding exercises inline. It was written
 * to be used in /pages/coding_exercises.mdx.  It does the following
 * - Displays the video(s) to watch
 * - Renders the coding exercise
 * 
 * Note: Original version of this attempted to return an appropriately 
 *       styled <h3> but this is not possible as Docusaurus will not add
 *       non-markdown headings to the table of contents.  So, we must 
 *       use markdown in coding_exercises.mdx directly.  
 *  
 *       The <h3> generating code has been removed but is available in a 
 *       previous commit of this file.
 * 
 * @param {video} 'video' string from coding exercise
 * @param {children} Default coding exercise component to render 
 * @returns  <div> containing the coding exercise appropriately styled
 */
export function DisplayInlineExercise({video, children}) {
    return(
        <div id="codexInline">
            <div className='video-section'>
                <div className='bordered-label'>
                    References:
                </div>
                <div className='bordered-text'>
                    {video}
                </div>
            </div>
            <div className='exercise'>
                {children}
            </div>
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