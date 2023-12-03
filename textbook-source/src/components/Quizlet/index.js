// Quiz.jsx
import React, { useState, Children, cloneElement } from 'react';
import Answer from './answer';
import Explanation from './explanation';

export const Quiz = ({ children, title }) => {

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
  let quizTitle = title || 'Quiz';

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
      console.log("Explanation");
      console.log(child)
      console.log(child.props.correctAnswer);
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

  return (
    <div className='quizlet'>
      <div className='title'>
        <img src="/img/quiz-icon.svg" height='30px' />
        {quizTitle}
      </div>
      <div className='question'>
        {quizQuestions}
      </div>
      <div className='answers'>
        {quizAnswers}
      </div>
      {selectedAnswer && (
        <div>{selectedAnswer.isCorrect ? correctExplain : incorrectExplain}</div>
      )}
    </div>
  );
};

export default Quiz;
