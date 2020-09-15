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

	// class Nav extends Component {
	// 	constructor(props) {
	// 		super(props);
	// 		this.state = {
	// 			loggedIn: false,
	// 		};
	// 	}

	// componentDidMount() {
	// 	const loggedIn = localStorage.getItem("loggedIn");
	// 	if (loggedIn) {
	// 		this.setState({
	// 			loggedIn: loggedIn,
	// 		})
	// 	this.setState({
	// 		loggedIn: false
	// 	});
	// 	}
	// }

	// logOut = (event) => {
	// 	event.preventDefault();
	// 	const loggedIn = localStorage.getItem("loggedIn");
	// 	if (loggedIn) {
	// 		this.setState({
	// 			loggedIn: false,
	// 		});
	// 	}
	// 	localStorage.setItem("loggedIn", false);
	// 	localStorage.setItem("user", {});
	// 	this.props.handleLogout()
	// };

	// render() {
	return (
		<div className="Nav">
			<link
				href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap"
				rel="stylesheet"
			/>
			<header className="Nav-header">
				<NavLink to={"/"}>
					<img src={logo} alt="logo" className="logo" />
				</NavLink>
				{user.name !== "" && (
					<div className="user-name">Welcome back {user.name}</div>
				)}

				{/* <div className="signup-login">
						{this.state.loggedIn === true &&
							<NavLink
								to={"/"}
								style={{ textDecoration: "none" }}
								onClick={this.logOut}
							>
								Logout
							</NavLink>
						}
					</div> */}
			</header>
		</div>
	);
	// }
};

export default Nav;
