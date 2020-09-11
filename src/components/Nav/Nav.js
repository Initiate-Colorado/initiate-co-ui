import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import logo from './logo.png'


function Nav() {
  return (
    <div className="Nav">
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap" rel="stylesheet" />
      <header className="Nav-header">
        <NavLink to={"/"}>
         <img src= {logo} alt="logo" className="logo"/>
        </NavLink>    
        <p className="Nav-p">
          INITIATE COLORADO
        </p>
        <button className="log-button">
          LogIn/LogOut
        </button>
      </header>
    </div>
  );
}

export default Nav;
