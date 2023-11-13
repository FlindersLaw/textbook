import React from 'react';

export const CodingExercisesTable = ({ codingExercises }) => {

  const [data, setData] = React.useState(() => [...codingExercises]);

  return(
    <table id="codexTable">
      <tr>
        <th>ID</th>
        <th>Watch</th>
        <th>Exercise</th>
      </tr>
      {data.map((codingExercise) => (
        <tr>
          <td>{codingExercise.title}</td>
          <td>{codingExercise.video}</td>
          <td><Markdown>{codingExercise.body}</Markdown></td>
        </tr>
      ))}
    </table>
  )
};

export default CodingExercisesTable;