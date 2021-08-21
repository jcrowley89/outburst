import React from "react";
import Button from "./Button";

function StartView({ handleClick, prevScore }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "2rem, 0", fontSize: "4rem" }}>BURT STOUT!</h1>
      {prevScore > 0 ? (
        <h2>Previous Score: {prevScore}</h2>
      ) : (
        <div>
          <p>
            Burt Stout is a super <strong>FUN</strong> game that is in no way
            affiliated with Outburst
            <sup>
              <small>TM</small>
            </sup>{" "}
            or any other product sold by Hasbro, Inc. or any of its
            subsidiaries!
          </p>
          <h3>How It Works</h3>
          <p>
            Burt Stout (a totally original game that is not inspired by or
            affiliated with any other game!) is a game of top-ten lists. Once
            you click start, you will have 60 seconds to come up with as many
            items as possible that match the given category. If any of your
            answers match an item on the top-ten list, you get a point! One
            randomly selected answer in each round will get a 4-point bonus for
            a total of 14 possible points per round.
          </p>
          <p>
            There is no button to submit your answers, as soon as the input
            detects a correct answer your points will be added to the scoreboard
            and the input will clear. The answers are not sensitive to case,
            punctutation, or spacing. Ready to play?
          </p>
        </div>
      )}
      <Button
        onClick={handleClick}
        text={prevScore === 0 ? "Start Game!" : "Play Again!"}
      />
    </div>
  );
}

export default StartView;
