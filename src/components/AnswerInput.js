import React, { useState, useEffect } from "react";

function AnswerInput({ bonus, answers, changePrevScore }) {
  const [answer, setAnswer] = useState("");
  const [score, setScore] = useState(0);

  function formatAnswer(a) {
    a = a.replace(/[.,/#!$%^&*;:'{}=\-_`~()]/g, "");
    a = a.replace(/\s/g, "");
    a = a.toLowerCase();
    return a;
  }

  useEffect(() => {
    if (answers.includes(answer)) {
      if (answer === bonus) {
        answers.splice(answers.indexOf(answer), 1);
        setScore((s) => s + 5);
      } else {
        answers.splice(answers.indexOf(answer), 1);
        setScore((s) => s + 1);
      }
      setAnswer("");
    }
  }, [answer, answers, bonus]);

  useEffect(() => () => changePrevScore(score));

  return (
    <div>
      <h2>Current Score: {score}</h2>
      <input
        type="text"
        onChange={(e) => setAnswer(formatAnswer(e.target.value))}
        value={answer}
      />
    </div>
  );
}

export default AnswerInput;
