import React, {useState} from "react";
// import outburst from "./outburst.png"
import "./App.css"
import data from "./utils/data"
import Button from "./components/Button"
import Timer from "./components/Timer.js"
import AnswerInput from "./components/AnswerInput.js"

function App() {
  const [gameActive, setGameActive] = useState(false)
  const [currentCard, setCurrentCard] = useState({})

  function handleClick() {
    setGameActive(!gameActive)
    setCurrentCard(data.cards[Math.floor(Math.random() * data.cards.length)])
    setTimeout(() => setGameActive(false), 60000);
  }

  return (
    <div className="App">
      <h1 style={{margin: "2rem, 0",fontSize:"4rem"}}>OUTBURST!</h1>
      {/* <img id="outburstLogo" src={outburst} alt="outburst-logo"></img> */}
      <h2>{gameActive ? currentCard.name : null}</h2>
      {gameActive ? <Timer /> : <Button onClick={handleClick} text="Start Game" />}
      {gameActive ? <AnswerInput card={currentCard} /> : null}
    </div>
  );
}

export default App;
