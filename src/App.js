import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="title">
        <div>
          <h1 className="titleText">
            ArKham <br /> AreNa
          </h1>
        </div>
        <Link to="/nextPage">
          <button className="startButton">Start</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
