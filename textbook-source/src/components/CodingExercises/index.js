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
 * @returns  <tr> containing table row to display the coding exercise
 */
export function DisplayInlineExercise({title, video, children}) {
    return(
        <div>
            <h3 id={title} class="anchor">
                Exercise {title}
                <a
                    class="hash-link"
                    href={`#${title}`}
                    aria-label={`Direct link to ${title}`}
                    title={`Direct link to ${title}`}>
                </a>
            </h3>
            <div className='codexInline-video-section'>
                <div className='codexInline-bordered-label'>
                    <strong>Videos:</strong>
                </div>
                <div className='codexInline-bordered-text'>
                    {video}
                </div>
            </div>

            {children}
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