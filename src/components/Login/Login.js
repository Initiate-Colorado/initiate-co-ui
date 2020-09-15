// Imports
import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { query, mutation } from "gql-query-builder";
import "./Login.css";
import { NavLink } from "react-router-dom";

// Component
class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			token: "",
			error: "",
			user: {
				email: "",
				password: "",
			},
		};
	}

	login = (details) => {
		const user = {
			email: details.email,
			password: details.password,
		};
		console.log(details);
		return axios
			.post(
				"https://initiate-co-backend.herokuapp.com/",
				query({
					operation: "userLogin",
					variables: user,
					fields: [
						"token",
						{
							user: [
								"name",
								"id",
								"email",
								"password",
								"createdAt",
								"updatedAt",
								"thirty_days_from",
								"ballotTitle",
								"ballotDescription",
							],
						},
					],
				})
			)
			.then((response) => {
				console.log(response.data.data.userLogin.user);
				console.log(response.data.data.userLogin.token);
				this.setState({
					user: {
						...response.data.data.userLogin.user,
						token: response.data.data.userLogin.token,
					},
				});
				localStorage.setItem("user", JSON.stringify(this.state.user));
				localStorage.setItem("token", response.data.data.userLogin.token);
				this.props.handleLogin();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// updateUser = () => {
	//   const user = JSON.parse(localStorage.getItem('user'))
	//   console.log(user)
	//   const userObject = {
	//       id: user.id,
	//       emailL: user.email,
	//       thirty_days_from: user.thirty_days_from,
	//       ballotTitle: user.ballotTitle,
	//       ballotDescriptionTitle: user.ballotDescriptionTitle,
	//       step: user.step,
	//       password: user.password
	//     }
	//   console.log(userObject)
	//   return axios.post('https://initiate-co-backend.herokuapp.com/', mutation({
	//     operation: 'updateUser',
	//     variables: {user : userObject, auth: user.token},
	//     fields: ['id', 'email']
	//   })).then(
	//     response => {
	//       console.log(response)
	//     }
	//   ).catch(error => {
	//     console.log(error);
	//   })
	// }

	onUpdate = () => {
		this.updateUser();
	};

	onLogin = () => {
		this.login(this.state.user);
		this.props.handleLogin();
		localStorage.setItem("loggedIn", true);
	};

	onChange = (event) => {
		let user = this.state.user;
		user[event.target.name] = event.target.value;
		this.setState({
			user,
		});
	};

	render() {
		return (
			<div className="login">
				{/* Test Update User*/}
				<form>
					<div
						className="login-form"
						style={{ width: "25em", margin: "0 auto" }}
					>
						{/* Email */}
						<input
							className="login-input"
							type="email"
							placeholder="Email"
							required="required"
							name="email"
							value={this.state.user.email}
							onChange={this.onChange}
							style={{ marginTop: "1em" }}
						/>

						{/* Password */}
						<input
							className="login-input"
							type="password"
							placeholder="Password"
							required="required"
							name="password"
							value={this.state.user.password}
							onChange={this.onChange}
							style={{ marginTop: "1em" }}
						/>
						<div style={{ marginTop: "2em" }}>
							{/* Form submit */}
							<NavLink
								to={"/proposal"}
								style={{ textDecoration: "none", color: "black" }}
								onClick={this.onLogin}
							>
								LOG IN
							</NavLink>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		loggedIn: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleLogin: () => dispatch({ type: "LOGIN" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
