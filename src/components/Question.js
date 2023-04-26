import React, { useState, useEffect } from "react";

export const Question=({ question, onAnswered })=> {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [timeRemaining]);
//added the top part

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  //added another use effect
useEffect(() => {
  if (timeRemaining === 0) {
    setTimeRemaining(10);
    onAnswered(false);
  }
}, [timeRemaining, onAnswered]);
//Added the top code

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}


