// AnswerComponent.jsx
import React from 'react';

// export const Answer = ({ children, isCorrect, onSelect, selected, selectedIsCorrect }) => {
export const Answer = ({ children, isCorrect, onSelect, selected, id }) => {
  // Set the style for the div depending on whether we have a correct or
  // incorrect answer
  let answerClass = 'answerButton';
  if (selected) {
    answerClass += isCorrect ? ' correctAnswer' : ' incorrectAnswer';
  }
  return (
    <div onClick={() => onSelect({ id, isCorrect })} className={answerClass}>
      {children}
    </div>
  );
};

export default Answer;
