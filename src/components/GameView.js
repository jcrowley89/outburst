import React, { useState, useEffect } from "react";
import TimerDisplay from "./TimerDisplay.js";
import AnswerInput from "./AnswerInput.js";

const bonusIndex = Math.floor(Math.random() * 10);

function GameView({ endGame, currentCard, changePrevScore }) {
  console.log("why");

  const [bonus, setBonus] = useState("");

  useEffect(() => {
    setBonus(currentCard.answers[bonusIndex].toString());
  }, [currentCard.answers]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{currentCard.name}</h1>
      <TimerDisplay endGame={endGame} />
      <AnswerInput
        bonus={bonus}
        answers={currentCard.answers}
        changePrevScore={changePrevScore}
      />
    </div>
  );
}

export default GameView;
