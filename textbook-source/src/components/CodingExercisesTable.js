import React from 'react';
import { Table } from '@docusaurus/react-table';

export const CodingExercisesTable = ({ codingExercises }) => {
  const columns = [
    {
      header: 'Title',
      key: 'title',
      align: 'left',
    },
    {
      header: 'Video',
      key: 'video',
      align: 'center',
    },
    {
      header: 'Instructions',
      key: 'body',
      align: 'left',
    },
  ];

  const rows = codingExercises.map((codingExercise) => ({
    title: codingExercise.title,
    video: codingExercise.video,
    body: codingExercise.body,
  }));

  return (
    <Table columns={columns} rows={rows} />
  );
};
