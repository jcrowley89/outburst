import React, { useState, useEffect } from 'react'

const bonusAnswer = Math.floor(Math.random() * 10);

function AnswerInput({card, changePrevScore}) {
    const [answer, setAnswer] = useState("");
    const [score, setScore] = useState(0);
    const {answers} = card;
    
    console.log(answers[bonusAnswer])

    function formatAnswer(a) {
        a = a.replace(/[.,\/#!$%\^&\*;:'{}=\-_`~()]/g,"");
        a = a.replace(/\s/g,"");
        a = a.toLowerCase()
        return a;
    }

    useEffect(() => {
        if (answers.includes(answer)) {
            if (answer === answers[bonusAnswer]) {
                setScore(score + 5)
            } else {
                setScore(score + 1)
            }
            setAnswer("");
        }
    }, [answer]);

    useEffect(() => () => changePrevScore(score));

    return (
        <div>
            <h2>Current Score: {score}</h2>
            <input type="text" onChange={e => setAnswer(formatAnswer(e.target.value))} value={answer} />
        </div>
    )
}

export default AnswerInput
