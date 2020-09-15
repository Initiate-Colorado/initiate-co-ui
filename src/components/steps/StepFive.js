import React, { Component } from "react";
import { connect } from "react-redux";

class StepFive extends Component {
	constructor(props) {
		super(props);
		this.state = {
			step: this.props.ProposalStep.initiativeStepReducer,
			error: "",
			ballot: {
				title: "",
				fiscal: "",
			},
		};
	}

	componentDidMount() {
		const savedTitle = localStorage.getItem("title");
		const savedFiscal = localStorage.getItem("fiscal");
		if (savedTitle || savedFiscal) {
			this.setState({
				ballot: {
					title: savedTitle,
					fiscal: savedFiscal,
				},
			});
		}
	}

	onChange = (event) => {
		let ballot = this.state.ballot;
		ballot[event.target.name] = event.target.value;
		this.setState({
			ballot,
		});
	};

	submitNextStep = (event) => {
		event.preventDefault();
		this.props.handleIncrementClick();
		this.submitProgress(event);
	};

	submitProgress = (event) => {
		event.preventDefault();
		localStorage.setItem("title", this.state.ballot.title);
		localStorage.setItem("fiscal", this.state.ballot.fiscal);
	};

	render() {
		return (
			<section className="step-five">
				<div className="step-title">
					<h1>
						Step {this.props.ballotProcess.id}: {this.props.ballotProcess.title}
					</h1>
				</div>
				<div className={"step-text"}>
					<p>
						Here is the thing… you wrote this awesome proposal but the title is
						someones else's responsibility. Bummer, I know. The title is set by
						a “Title Board,” consisting of the Secretary of State, the Attorney
						General, and the director of the Office of Legislative Legal
						Services or their designees. Ballot titles must be brief,
						unambiguous, and in the form of a question that is answered "yes" to
						vote in favor of the proposed change and "no" to vote against the
						proposed change.
					</p>
					<input
						type="text"
						placeholder="Your Ballot Initiative Title"
						required="required"
						name="title"
						value={this.state.ballot.title}
						onChange={this.onChange}
						style={{ marginTop: "1em" }}
					/>
					<button onClick={this.submitProgress}>Save</button>
					<p>
						A brief abstract summarizing each measure’s fiscal impact is also
						prepared, and the measure’s proponents must include this abstract on
						signature-collection petitions.
					</p>
					<textarea
						type="textarea"
						placeholder="Paste the fiscal impact abstract here"
						required="required"
						name="fiscal"
						value={this.state.ballot.fiscal}
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
				<h3>Last Title Board for 2020: {this.props.ballotProcess.dueDate}</h3>
				<div className="buttons">
					<button
						data-testid="research-button"
						onClick={this.props.handleDecrementClick}
					>
						Go Back
					</button>
					<button data-testid="research-button" onClick={this.submitNextStep}>
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

export default connect(mapStateToProps, mapDispatchToProps)(StepFive);
