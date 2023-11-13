import CodingExercisesTable from '../CodingExercisesTable';
import {ex1} from './ex1'
export const CodingExercisesPage = () => {

  return (
    <div>
      <h1>Coding Exercises</h1>
      <CodingExercisesTable codingExercises={ex1} />
    </div>
  );
};

export default CodingExercisesPage;

// const readMarkdownFile = async (filePath) => {
//   const fileContent = await fs.promises.readFile(filePath, 'utf8');
//   const markdown = await marked.parse(fileContent);

//   return markdown;
// };

