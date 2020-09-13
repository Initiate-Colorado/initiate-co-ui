import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "../WelcomePage/WelcomePage";
import BeginInitiative from "../BeginInitiative/BeginInitiative";
import Nav from "../Nav/Nav";
import Research from "../Research/Research";
import Signup from "../Signup/Signup";
import Login from "../Login/Login";
import StepTracker from "../StepTracker/StepTracker";
import Info from "../Info/Info";

function App() {
	return (
		<div className="App">
			<Route
				exact
				path="/"
				render={() => (
					<>
					<Nav />
					<div className="page-area">
						<WelcomePage />
					</div>
					</>
				)}
			/>
			<Route
				exact
				path="/begin-proposal"
				render={() => (
					<>
					<Nav />
					<div className="page-area">
						<BeginInitiative />
					</div>
					</>
				)}
			/>
			<Route
				exact
				path="/research"
				render={() => (
					<>
					<Nav />
					<div className="page-area">
						<Research />
					</div>
					</>
				)}
			/>
			<Route
				exact
				path="/signup"
				render={() => (
					<>
					<Nav />
					<div className="page-area">
						<Signup />
					</div>
					</>
				)}
			/>
			<Route
				exact
				path="/login"
				render={() => (
					<>
					<Nav />
					<div className="page-area">
						<Login />
					</div>
					</>
				)}
			/>
			<Route
				exact
				path="/proposal"
				render={() => (
					<>
					<Nav />
					<div className="page-area">
						<div className="proposal">
							<StepTracker />
							<Info />
						</div>
					</div>
					</>
				)}
			/>
		</div>
	);
}

export default App;
