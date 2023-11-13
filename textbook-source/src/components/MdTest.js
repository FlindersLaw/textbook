import React from 'react';
import Ex1a, * as Ex1a_c from '@site/docs/coding_exercises/ex1a.mdx';
import Ex1b, * as Ex1b_c from '@site/docs/coding_exercises/ex1b.mdx';
import Ex1, * as Ex1_c from '@site/docs/coding_exercises/ex1a.mdx';

export const MdTest = () => {

    // console.log('mdtest: ex1a: ' + JSON.stringify(Ex1a_c));
    // console.log('mdtest: ex1a property names: ' + Object.getOwnPropertyNames(Ex1a_c));
    // console.log('mdtest: ex1a keys: ' + Object.keys(Ex1a_c));
    // console.log('mdtest ex1a.title: ' + Ex1a_c.title);
    // console.log('mdtest ex1a.video: ' + Ex1a_c.video);
    // console.log('mdtest ex1a.metadata: ' + JSON.stringify(Ex1a_c.metadata));
    // console.log('mdtest ex1a.assets: ' + JSON.stringify(Ex1a_c.assets));
    // console.log('mdtest ex1a.frontMatter: ' + JSON.stringify(Ex1a_c.frontMatter));
    // console.log('mdtest: ex1 gOPN: ' + Object.getOwnPropertyNames(Ex1_c));
    // console.log('mdtest: ex1 keys: ' + Object.keys(Ex1_c));
    // console.log('mdtest: ex1 title: ' + Ex1_c.title);
    return (
        <table>
            <tr>
                <th>Exercise</th>
                <th>Video</th>
                <th>Do</th>
            </tr>
            <tr>
                <td>{Ex1a_c.title}</td>
                <td>{Ex1a_c.video}</td>
                <td><Ex1a /></td>
            </tr>
            <tr>
                <td>{Ex1b_c.title}</td>
                <td>{Ex1b_c.video}</td>
                <td><Ex1b /></td>
            </tr>
        </table>
    )
};

export function CreateTableRow ({title, video, children}) {
    return(
        <tr>
            <td>{title}</td>
            <td>{video}</td>
            <td>{children}</td>
        </tr>
    )
}

export const CreateCodingExerciseTable = ({rows}) => {
    const [data, setData] = React.useState(() => [...rows]);
    console.log('MdTest CreateCodingExerciseTable data: ' + data);
    console.log('MdTest CreateCodingExerciseTable data: ' + Object.entries(data));
    console.log('MdTest CreateCodingExerciseTable data[0]: ' + data[0]);
    console.log('MdTest CreateCodingExerciseTable data[0] gOPN ' + Object.getOwnPropertyNames(data[0]));
    console.log('MdTest CreateCodingExerciseTable data[0] key ' + Object.entries(data[0].props));

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


export default MdTest;