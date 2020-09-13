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
        <div className="signup-login">
          <NavLink to={"/signup"} style={{ textDecoration: 'none' }}>
          Signup
          </NavLink> 
          <NavLink to={"/login"} style={{ textDecoration: 'none' }}>
          Login
          </NavLink> 
        </div>
      </header>
    </div>
  );
}

export default Nav;
