import React, { useState, useEffect } from "react";

function TimerDisplay({ endGame }) {
  const [timeRemaining, settimeRemaining] = useState(60);
  const timeout = setTimeout(() => settimeRemaining(timeRemaining - 1), 1000);

  useEffect(() => {
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
