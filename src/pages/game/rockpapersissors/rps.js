import React, { useState, useEffect } from "react";
import "./rps.css";

function Rps() {
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || { wins: 0, losses: 0, ties: 0 }
  );
  const [result, setResult] = useState("");
  const [moves, setMoves] = useState({ playerMove: "", computerMove: "" });

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let outcome = "";

    if (playerMove === computerMove) {
      outcome = "Tie";
    } else if (
      (playerMove === "rock" && computerMove === "scissors") ||
      (playerMove === "paper" && computerMove === "rock") ||
      (playerMove === "scissors" && computerMove === "paper")
    ) {
      outcome = "You Win";
    } else {
      outcome = "You Lose";
    }

    if (outcome === "You Win") {
      setScore((prevScore) => ({ ...prevScore, wins: prevScore.wins + 1 }));
    } else if (outcome === "You Lose") {
      setScore((prevScore) => ({ ...prevScore, losses: prevScore.losses + 1 }));
    } else {
      setScore((prevScore) => ({ ...prevScore, ties: prevScore.ties + 1 }));
    }

    setResult(outcome);
    setMoves({ playerMove, computerMove });
  }

  function pickComputerMove() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return moves[randomIndex];
  }

  function resetScore() {
    setScore({ wins: 0, losses: 0, ties: 0 });
    localStorage.removeItem("score");
    alert("Score has been reset!");
  }

  return (
    <div className="container dark">
      <p className="title">Rock Paper Scissors</p>

      <div className="buttons">
        <button className="button" onClick={() => playGame("rock")}>
          <img src="" className="move-icon" alt="Rock" />
        </button>
        <button className="button" onClick={() => playGame("paper")}>
          <img src="images/paper.png" className="move-icon" alt="Paper" />
        </button>
        <button className="button" onClick={() => playGame("scissors")}>
          <img src="" className="move-icon" alt="Scissors" />
        </button>
      </div>

      <p
        className="js-result"
        style={{
          color:
            result === "You Win"
              ? "green"
              : result === "You Lose"
              ? "red"
              : "white",
        }}
      >
        {result}
      </p>
      <p className="js-moves">
        You picked {moves.playerMove}. Computer picked {moves.computerMove}.
      </p>
      <p className="js-score">
        <span style={{ color: "green" }}>Wins: {score.wins}</span> ,{" "}
        <span style={{ color: "red" }}>Losses: {score.losses}</span> ,{" "}
        <span style={{ color: "white" }}>Ties: {score.ties}</span>
      </p>

      <button className="reset" onClick={resetScore}>
        Reset Score
      </button>
    </div>
  );
}

export default Rps;
