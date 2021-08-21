import React, { useState } from "react";
import "./App.css";
import Data from "./utils/data";
import StartView from "./components/StartView.js";
import GameView from "./components/GameView.js";

function App() {
  const [gameActive, setGameActive] = useState(false);
  const [prevScore, setPrevScore] = useState(0);
  const [currentCard, setCurrentCard] = useState({});

  const data = new Data();

  function handleClick() {
    setGameActive(!gameActive);
    setCurrentCard(data.cards[Math.floor(Math.random() * data.cards.length)]);
  }

  function endGame() {
    setGameActive(false);
  }

  function changePrevScore(s) {
    setPrevScore(s);
  }

  return (
    <div className="App">
      {gameActive ? (
        <GameView
          endGame={endGame}
          currentCard={currentCard}
          changePrevScore={changePrevScore}
        />
      ) : (
        <StartView handleClick={handleClick} prevScore={prevScore} />
      )}
    </div>
  );
}

export default App;
