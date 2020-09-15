import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "./logo.png";
import { connect } from "react-redux";

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loggedIn: false,
		};
	}

	componentDidMount() {
		const loggedIn = localStorage.getItem("loggedIn");
		if (loggedIn) {
			this.setState({
				loggedIn: true,
			});
		}
	}

	logOut = (event) => {
		event.preventDefault();
		const loggedIn = localStorage.getItem("loggedIn");
		if (loggedIn) {
			this.setState({
				loggedIn: false,
			});
		}
		localStorage.setItem("loggedIn", false);
		localStorage.setItem("user", {});
	};

	render() {
		return (
			<div className="Nav">
				<link
					href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600&display=swap"
					rel="stylesheet"
				/>
				<header className="Nav-header">
					<NavLink to={"/"}>
						<img src={logo} alt="logo" className="logo" data-testid="logo" />
					</NavLink>
					<div className="signup-login">
						{this.state.loggedIn === true &&
							<NavLink
								to={"/"}
								style={{ textDecoration: "none" }}
								onClick={this.logOut}
							>
								Logout
							</NavLink>
						}
						{this.state.loggedIn === false &&
							<div className="signup-login">
								<NavLink to={"/signup"} style={{ textDecoration: "none" }}>
									Signup
								</NavLink>
								<NavLink to={"/login"} style={{ textDecoration: "none" }}>
									Login
								</NavLink>
							</div>
						}
					</div>
				</header>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ProposalStep: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleLogout: () => dispatch({ type: "LOGOUT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
