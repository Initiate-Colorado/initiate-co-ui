import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';


function Nav() {
  return (
    <div className="Nav">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap" rel="stylesheet" />
      <NavLink to={"/"}>
        <img src= "../public/logo.png" />
      </NavLink>    
      <header className="Nav-header">
        <p className="Nav-p">
          INITIATE COLORADO
        </p>
        <p className="logged">
          Logged In
        </p>
      </header>
    </div>
  );
}

export default Nav;
