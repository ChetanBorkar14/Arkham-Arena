import React from "react";
import { Link } from "react-router-dom";
import "./Games.css";

function Games() {
  const gamesList = [
    {
      name: "Tic Tac Toe",
      path: "/ttt",
      icon: "🎲",
    },
    {
      name: "Rock Paper Scissors",
      path: "/rps",
      icon: "✋",
    },
    {
      name: "2048",
      path: "/a",
      icon: "🔢",
    },
    {
      name: "Sudoku",
      path: "/sudoko",
      icon: "🧩",
    },
    {
      name: "Chess",
      path: "/chess",
      icon: "♟️",
    },
    {
      name: "Snake and Ladder",
      path: "/snl",
      icon: "🐍",
    },
    {
      name: "Ludo",
      path: "/ludo",
      icon: "🎲",
    },
    {
      name: "Bubble Shooter",
      path: "/bs",
      icon: "🫧",
    },
    {
      name: "Memory Game",
      path: "/mg",
      icon: "🃏",
    },
  ];

  return (
    <div className="games-container">
      <h1>Game Hub</h1>
      <div className="games-grid">
        {gamesList.map((game, index) => (
          <Link to={game.path} key={index} className="game-option">
            <span className="game-name">{game.name}</span>
            <div className="game-icon">{game.icon}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Games;
