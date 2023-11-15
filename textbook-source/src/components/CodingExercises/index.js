import React from 'react';
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