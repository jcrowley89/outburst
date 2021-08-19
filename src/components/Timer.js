import React, {useState, useEffect} from 'react'

function Timer({ changePrevScore }) {
    const [timeDisplay, setTimeDisplay] = useState(60)
    const timer = setTimeout(() => setTimeDisplay(timeDisplay - 1), 1000);
    useEffect(() => () => clearTimeout(timer));

    return (
        <h2>
            <span id="timer" style={timeDisplay <= 10 ? {color: "red"} : null}>Time remaining: {timeDisplay}</span>
        </h2>
    )
}

export default Timer
