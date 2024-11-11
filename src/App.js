import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./components/images/1.png";

function App() {
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      const newOpacity = 0.3 + (x + y) / 200;
      setOpacity(Math.min(Math.max(newOpacity, 0.3), 0.6));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="App">
      <div className="background-overlay" style={{ opacity: opacity }}></div>
      <div className="content">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />{" "}
        </div>
        <h1 className="title show">
          <span>A</span>
          <span>r</span>
          <span>k</span>
          <span>h</span>
          <span>a</span>
          <span>m</span>
          <br />
          <span>A</span>
          <span>r</span>
          <span>e</span>
          <span>n</span>
          <span>a</span>
        </h1>
        <Link to="/nextPage">
          <button className="start-button">Enter the Arena</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
