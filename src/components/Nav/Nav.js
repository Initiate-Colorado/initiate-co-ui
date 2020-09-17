import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "./logo.png";
import { connect } from "react-redux";

const Nav = () => {
	let user = JSON.parse(localStorage.getItem("user"));

	if (!user) {
		user = { name: "" };
	}

	return (
		<div className="Nav">
			<link
				href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap"
				rel="stylesheet"
			/>
			<header className="Nav-header">
				<NavLink to={"/"}>
					<img src={logo} alt="logo" className="logo" data-testid="logo"/>
				</NavLink>
				{user.name !== "" && (
					<div className="user-name">Welcome back {user.name}</div>
				)}
			</header>
		</div>
	);
};

export default Nav;
