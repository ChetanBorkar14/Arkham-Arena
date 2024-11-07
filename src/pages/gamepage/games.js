import React from "react";
import "./Games.css";

function Games() {
  return (
    <div className="games-grid">
      {[...Array(9)].map((_, index) => (
        <div key={index} className="game-option">
          <span>Option {index + 1}</span>
        </div>
      ))}
    </div>
  );
}

export default Games;
