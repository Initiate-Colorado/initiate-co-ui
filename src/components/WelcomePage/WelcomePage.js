import React from "react";
import "./WelcomePage.css";
import { NavLink } from "react-router-dom";

const WelcomePage = () => {
	let loggedIn = localStorage.getItem("loggedIn");
	if (!loggedIn) {
		loggedIn = false;
		localStorage.setItem("loggedIn", false);
	}
	console.log(loggedIn);

	return (
		<section className="option-area">
			<h1>What would you like to do?</h1>
			<section className="cards">
				<section className="proposal-start">
					<h1>Propose a Ballot Initiative</h1>
					<p>Be guided through the process of proposing a ballot initiative!</p>
					{loggedIn && (
						<NavLink
							to={"/proposal"}
							style={{ textDecoration: "none", color: "black" }}
						>
							GET STARTED
						</NavLink>
					)}
				</section>
				<section className="research-start">
					<h1>Research Initiatives</h1>
					<p>Learn more about initiatives and show your support!</p>
					<NavLink
						to={"/research"}
						style={{ textDecoration: "none", color: "black" }}
					>
						GET STARTED
					</NavLink>
				</section>
			</section>
			<NavLink
				to={"/signup"}
				style={{ textDecoration: "none", color: "black" }}
			>
				SIGN UP
			</NavLink>
		</section>
	);
};

export default WelcomePage;
