import React from "react";
import './navbar.scss'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="frontend/src/components/navbar/empty-logo-for-swqap-recipe.jpg" alt="Logo" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button className="search-button">
          <span role="img" aria-label="Search">
            🔍
          </span>
        </button>
      </div>
      <div className="buttons">
        <button>About Us</button>
        <button>Login</button>
      </div>
    </div>
  );
};

export default NavBar;