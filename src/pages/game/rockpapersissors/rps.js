import React, { useState, useEffect } from "react";
import styles from "./rps.module.css";
import rock from "../../../components/images/rock.png";
import paper from "../../../components/images/paper.png";
import scissors from "../../../components/images/scissors.png";

function Rps() {
  const [score, setScore] = useState(
    JSON.parse(localStorage.getItem("score")) || { wins: 0, losses: 0, ties: 0 }
  );
  const [result, setResult] = useState("");
  const [moves, setMoves] = useState({ playerMove: "", computerMove: "" });

  useEffect(() => {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "white";
    document.body.style.margin = "0";

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
      document.body.style.margin = "";
    };
  }, []);

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
    <div className={styles.nextPage}>
      <nav className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <a href="/" className={styles.websiteName}>
            ARKHAM ARENA
          </a>
        </div>
        <div className={styles.navbarRight}>
          <div className={styles.profileSection}>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className={styles.profilePic}
            />
            <span className={styles.profileName}>Profile</span>
          </div>
        </div>
      </nav>

      <div className={styles.rpsContainer}>
        <p className={styles.title}>Rock Paper Scissors</p>

        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => playGame("rock")}>
            <img src={rock} className={styles.moveIcon} alt="Rock" />
          </button>
          <button className={styles.button} onClick={() => playGame("paper")}>
            <img src={paper} className={styles.moveIcon} alt="Paper" />
          </button>
          <button
            className={styles.button}
            onClick={() => playGame("scissors")}
          >
            <img src={scissors} className={styles.moveIcon} alt="Scissors" />
          </button>
        </div>

        <p
          className={styles.jsResult}
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
        <p className={styles.jsMoves}>
          You picked {moves.playerMove}. Computer picked {moves.computerMove}.
        </p>
        <p className={styles.jsScore}>
          <span style={{ color: "green" }}>Wins: {score.wins}</span> ,{" "}
          <span style={{ color: "red" }}>Losses: {score.losses}</span> ,{" "}
          <span style={{ color: "white" }}>Ties: {score.ties}</span>
        </p>

        <button className={styles.reset} onClick={resetScore}>
          Reset Score
        </button>
      </div>
    </div>
  );
}

export default Rps;
