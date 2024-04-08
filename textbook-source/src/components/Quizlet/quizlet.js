// Quizlet.jsx
import React, { useState, Children, cloneElement } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Answer from './answer';
import Explanation from './explanation';

export const Quizlet = ({ children, title }) => {

  // Use to track the state and correctness of selected answer
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const handleSelectAnswer = (answerData) => {
    setSelectedAnswer(answerData);
  }

  // We split the questions and answers out from each other so we can
  // display the questions first and then all the answers.
  // Note: There should only ever be one question but we don't care as 
  // we don't do anything fancy with questions - just display them.
  let quizQuestions = [];
  let quizAnswers = [];
  let correctExplain = [];  // Store explanation(s) for correct answers here
  let incorrectExplain = [] // Store incorrect explanation(s) here

  // Set a default title if one isn't passed in
  let quizTitle = title || 'Quizlet';

  // We'll push answerID into each answer so we can track selection state
  // Note: the ID is incremented for each iteration of the forEach() loop
  // but we only push IDs to Answers
  let answerID = 0;
  Children.forEach(children, child => {
    if (child.type === Answer ) {
      // How we test if an answer is currently selected
      let isSelected = false;
      if ( selectedAnswer ) {
        isSelected = answerID == selectedAnswer.id;
      }

      // Push the onClick handler, the answer ID and the selected status to
      // each Answer
      quizAnswers.push(cloneElement(child, {
        // We always push the ID for purposes of the isSelected test above.
        // Every answer must have an id
        id: answerID,
        onSelect: handleSelectAnswer,
        selected: isSelected })
      );
    } else if ( child.type == Explanation ) {
      if ( child.props.correctAnswer) {
        correctExplain.push(child);
      } else {
        // We'll assume that all explanations are incorrect unless 
        // the correctExplain flag is set
        incorrectExplain.push(child);
      }
    } else {
      quizQuestions.push(child);
    }
    answerID += 1;
  });

  let quizletIcon = useBaseUrl('/img/quiz-icon.svg');

  return (
    <div className='quizlet'>
      <div className='title'>
        <img src={quizletIcon} height='30px' />
        {quizTitle}
      </div>
      <div className='question'>
        {quizQuestions}
      </div>
      <div className='answers'>
        {quizAnswers}
      </div>
      {selectedAnswer && (
        <div>
          {selectedAnswer.isCorrect
            ? (correctExplain.length > 0 ? correctExplain : 'Correct!')
            : (incorrectExplain.length > 0 ? incorrectExplain : 'Incorrect. Try again.')
          }
        </div>
      )}
    </div>
  );
};

export default Quizlet;
