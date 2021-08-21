import React, { useState, useEffect } from "react";

function TimerDisplay({ endGame }) {
  const [timeRemaining, setTimeRemaining] = useState(60);

  useEffect(() => {
    const timeout = setTimeout(() => setTimeRemaining(t => t - 1), 1000);
    if (timeRemaining === 0) endGame();
    return () => clearTimeout(timeout);
  });

  return (
    <h2>
      <span id="timer" style={timeRemaining <= 10 ? { color: "red" } : null}>
        Time remaining: {timeRemaining}
      </span>
    </h2>
  );
}

export default TimerDisplay;
