import React from "react";
import Games from "./games";
import "./NextPage.css";
import { Link } from "react-router-dom";

function NextPage() {
  return (
    <div className="next-page">
      <nav className="navbar">
        <div className="navbar-left">
          <h1 className="website-name">
            <Link to="/">Arkham Arena</Link>
          </h1>
        </div>
        <div className="navbar-right">
          <div className="profile-section">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="profile-pic"
            />
            <span className="profile-name">Profile</span>
          </div>
        </div>
      </nav>
      <Games />
    </div>
  );
}

export default NextPage;
