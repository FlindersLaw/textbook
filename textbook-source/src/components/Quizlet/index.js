import React, { useState } from 'react';

export const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  const question = questions[currentQuestionIndex];

  const handleAnswerSelect = (event) => {
    const answer = question.answers.find(a => a.text === event.target.value);
    setSelectedAnswer(answer);
  };

  const handleSubmit = () => {
    setIsAnswerSubmitted(true);
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div>
      <h3>{question.text}</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        {question.answers.map((answer, index) => (
          <div key={index}>
            <label>
                <input
                type="radio"
                name="quiz-answer"
                value={answer.text}
                onChange={handleAnswerSelect}
                disabled={isAnswerSubmitted}
                />
                {answer.text}
            </label>
          </div>
        ))}
        <button onClick={handleSubmit} disabled={isAnswerSubmitted}>Submit</button>
      </form>
      {isAnswerSubmitted && (
        <div>
          {selectedAnswer && selectedAnswer.isCorrect ? (
            <div>
              <p>Congratulations! That's correct.</p>
            </div>
          ) : (
            <div>
              <p>Incorrect. The correct answer is: {question.correctAnswerText}</p>
            </div>
          )}
          <button onClick={nextQuestion}>Next Question</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
