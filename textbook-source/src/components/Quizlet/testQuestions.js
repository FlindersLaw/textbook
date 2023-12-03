// quizData.js
export const quizQuestions = [
  {
    text: "What is the capital of France?",
    answers: [
      { text: "Paris", isCorrect: true },
      { text: "London", isCorrect: false },
      { text: "Berlin", isCorrect: false },
      { text: "Madrid", isCorrect: false }
    ],
    correctAnswerText: "Paris" // Text of the correct answer for feedback
  },
  {
    text: "Which element's chemical symbol is 'O'?",
    answers: [
      { text: "Gold", isCorrect: false },
      { text: "Oxygen", isCorrect: true },
      { text: "Hydrogen", isCorrect: false },
      { text: "Helium", isCorrect: false }
    ],
    correctAnswerText: "Oxygen"
  },
  // Add more questions as needed
];

export default quizQuestions;
