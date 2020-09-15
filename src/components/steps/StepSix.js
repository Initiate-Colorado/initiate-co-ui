import React, { Component } from "react";
import { connect } from "react-redux";

class StepSix extends Component {
	constructor({ ProposalStep, handleIncrementClick, handleDecrementClick }) {
		super({ ProposalStep, handleIncrementClick, handleDecrementClick });

		this.state = {
			step: ProposalStep.initiativeStepReducer,
			error: "",
			ballot: {
				revision: "",
			},
		};
	}

	componentDidMount() {
		const savedRevision = localStorage.getItem("revision");

		if (savedRevision) {
			this.setState({
				ballot: {
					revision: savedRevision,
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
		this.submitProgress(event);
		this.props.handleIncrementClick();
	};

	submitProgress = (event) => {
		event.preventDefault();
		localStorage.setItem("revision", this.state.ballot.revision);
	};

	render() {
		return (
			<section className="step-six">
				<div className="step-title">
					<h1>
						Step {this.props.ballotProcess.id}: {this.props.ballotProcess.title}
					</h1>
				</div>
				<div className={"step-text"}>
					<p>
						If the Title Board concludes the proposal contains more than one
						subject, or a title hasn’t been set for some other reason you can
						make changes and resubmit it directly to the board for title
						setting. Be sure to have only one subject or you will be asked to
						follow Steps 1 and 2 again.
					</p>
						<textarea
							type="textarea"
							placeholder="Paste your proposal revision here"
							name="revision"
							value={this.state.ballot.revision}
							onChange={this.onChange}
							style={{
								marginTop: "1em",
								width: "50vw",
								height: "20vh",
								fontFamily: "Roboto, sans-serif",
							}}
						/>{" "}
						<button onClick={this.submitProgress}>Save</button>
				</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StepSix);
