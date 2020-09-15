import React, { Component } from "react";
import { connect } from "react-redux";

class StepOne extends Component {
	constructor({ ProposalStep, handleIncrementClick, handleDecrementClick }) {
		super({ ProposalStep, handleIncrementClick, handleDecrementClick });
		this.state = {
			step: ProposalStep.initiativeStepReducer,
			error: "",
			ballot: {
				title: "",
				description: "",
				name1: "",
				name2: "",
			},
		};
	}

	componentDidMount() {
		const savedDescription = localStorage.getItem("description");
		const savedName1 = localStorage.getItem("name1");
		const savedName2 = localStorage.getItem("name2");
		const savedTitle = localStorage.getItem("title");

		if (savedDescription || savedName1 || savedName2 || savedTitle) {
			this.setState({
				ballot: {
					description: savedDescription,
					name1: savedName1,
					name2: savedName2,
					title: savedTitle
				},
			});
		}
	}

	submitNextStep = (event) => {
		event.preventDefault();
		this.props.handleIncrementClick();
		this.submitProgress(event);
	};

	submitProgress = (event) => {
		event.preventDefault();
		localStorage.setItem("description", this.state.ballot.description);
		localStorage.setItem("name1", this.state.ballot.name1);
		localStorage.setItem("name2", this.state.ballot.name2);
		localStorage.setItem("title", this.state.ballot.title);
	};

	onChange = (event) => {
		let ballot = this.state.ballot;
		ballot[event.target.name] = event.target.value;

		this.setState({
			ballot,
		});
	};

	render() {
		return (
			<section className="step-one">
				<div className="step-title">
					<h1>Step {this.props.ballotProcess.id}: {this.props.ballotProcess.title}</h1>
				</div>
				<div className="step-text">
					<p>What do you want to call this initiative?</p>
					<p>(You'll pick an official title later )</p>
					<input
						type="text"
						placeholder="Initiative Title"
						required="required"
						name="title"
						value={this.state.ballot.title}
						onChange={this.onChange}
						style={{ marginTop: "1em" }}
					/>
					<button onClick={this.submitProgress}>Save</button>
					<p>
					You are on your way to submitting a proposal! Congrats! To get this amendment or law on a statewide election ballot you need to submit a typed out proposal to the Legislative Council Staff. They will review and comment. This proposal (your submission) should be written in plain, non-technical language (no fancy stuff), using words with common everyday meaning. Keep in mind a lot of people will read your proposal one day! Make it understandable!
					</p>
				</div>
				<div className="plaintext">
					<textarea
						type="textarea"
						placeholder="Enter the plain text of your proposal here"
						required="required"
						name="description"
						value={this.state.ballot.description}
						onChange={this.onChange}
						style={{
							marginTop: "1em",
							width: "50vw",
							height: "20vh",
							fontFamily: "Roboto, sans-serif",
						}}
					/>
					<button onClick={this.submitProgress}>Save</button>
				</div>
				<div className={"step-text"}>
					<p>
						Proposals can be submitted either in person, by mail, by FAX, or by
						e-mail to:
					</p>
				</div>
				<div className="address">
					Natalie Mullis, Director Colorado Legislative Council Staff Room 029
					State Capitol Building Denver, Colorado 80203 Phone: 303-866-3521 Fax:
					303-866-3855 E-mail: lcs.ga@state.co.us
				</div>
				<div className={"step-text"}>
					<p>
					Your proposal must have your name and address + a corepresentative with their address. If you want to be extra communicative, provide your email. The Legislative Council Staff gives the proposal a number and schedules a public meeting, which will be two weeks from the date the measure is filed.  The Legislative Council Staff also provides public notice of the date, time, and place for the meeting and the language of the proposal. You can withdraw a proposal at any time.
					</p>
				</div>
				<div className="signee-names">
					First Person's Name
					<input
						type="text"
						placeholder="Person One Name"
						required="required"
						name="name1"
						value={this.state.ballot.name1}
						onChange={this.onChange}
						style={{ marginTop: "1em" }}
					/>
					Second Person's Name
					<input
						placeholder="Person Two Name"
						required="required"
						name="name2"
						value={this.state.ballot.name2}
						onChange={this.onChange}
						style={{ marginTop: "1em" }}
					/>
				</div>
				<p>
					The Legislative Council Staff gives the proposal a number and
					schedules a public meeting, which will be two weeks from the date the
					measure is filed. The Legislative Council Staff also provides public
					notice of the date, time, and place for the meeting and the language
					of the proposal. A proponent can withdraw a proposal at any time.
				</p>
				<div className="deadline">
					<h3>Submission Deadline: {this.props.ballotProcess.dueDate}</h3>
				</div>
				<div className="buttons">
					<button
						data-testid="research-button"
						onClick={this.props.handleDecrementClick}
					>
						Go Back
					</button>
					<button data-testid="submit progress button" onClick={this.submitNextStep}>
						Next Step
					</button>
				</div>
			</section>
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
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
		handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
