import React, {useState, useEffect, useReducer} from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "./logo.png";

function Nav() {
  const [loggedIn, setLoggedIn] = useState(true)
 

	const logOut = (event) => {
    event.preventDefault()
		localStorage.setItem("loggedIn", false);
    localStorage.setItem("user", {});
    setLoggedIn(false)
	};

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
				<div className="signup-login">
					{loggedIn === true ? 
						<NavLink
							to={"/"}
							style={{ textDecoration: "none" }}
							onClick={logOut}
						>
							Logout
						</NavLink>
					 : 
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

export default Nav;
