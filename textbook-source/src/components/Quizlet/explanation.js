import React from 'react';

/**
 * A simple component to render explanations.  We should usually provide
 * one for a correct answer and one for an incorrect answer
 * @param {*} correctAnswer - set if this is to be displayed when the correct
 *                            answer is selected
 * @param {*} incorrectAnswer - set if this is to be displayed when the
 *                            incorrect answer is selected 
 */
export const Explanation = ({ children, correctAnswer, incorrectAnswer}) => {
  return (
    // Not doing too much right now but we might want to style this at some stage
    <div>
      {children}
    </div>
  );
};

export default Explanation;
