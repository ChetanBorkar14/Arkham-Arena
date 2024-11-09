import React from "react";
import { Link } from "react-router-dom";
import "./Games.css";
import Rps from "../game/rps";

function Games() {
  const gamesList = [
    {
      name: "Tic Tac Toe",
      path: "/games/tic-tac-toe",
      icon: "🎲",
    },
    {
      name: "Rock Paper Scissors",
      path: "/rps",
      icon: "✋",
    },
    {
      name: "2048",
      path: "/games/2048",
      icon: "🔢",
    },
    {
      name: "Sudoku",
      path: "/games/sudoku",
      icon: "🧩",
    },
    {
      name: "Chess",
      path: "/games/chess",
      icon: "♟️",
    },
    {
      name: "Snake and Ladder",
      path: "/games/snake-ladder",
      icon: "🐍",
    },
    {
      name: "Ludo",
      path: "/games/ludo",
      icon: "🎲",
    },
    {
      name: "Bubble Shooter",
      path: "/games/bubble-shooter",
      icon: "🫧",
    },
    {
      name: "Memory Game",
      path: "/games/memory",
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
