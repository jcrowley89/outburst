import React, {useState} from "react";
import "./App.css"
import data from "./utils/data"
import Button from "./components/Button"
import Timer from "./components/Timer.js"
import AnswerInput from "./components/AnswerInput.js"

function App() {
  const [gameActive, setGameActive] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [prevScore, setPrevScore] = useState(0);

  function handleClick() {
    setGameActive(!gameActive)
    setCurrentCard(data.cards[Math.floor(Math.random() * data.cards.length)])
  }

  return (
    <div className="App">
      <h1 style={{margin: "2rem, 0",fontSize:"4rem"}}>OUTBURST!</h1>
      <h2>{gameActive ? currentCard.name : null}</h2>
      {gameActive ? null : <h2>Previous Score: {prevScore}</h2>}
      {gameActive ? <Timer endGame={() => setGameActive(false)} /> : <Button onClick={handleClick} text="Start Game" />}
      {gameActive ? <AnswerInput card={currentCard} changePrevScore={s => setPrevScore(s)} /> : null}
    </div>
  );
}

export default App;
