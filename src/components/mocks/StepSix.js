import React, { Component } from "react";
import { connect } from "react-redux";

class StepSix extends Component {
	constructor({ ProposalStep, handleIncrementClick }) {
		super({ ProposalStep, handleIncrementClick });

		this.state = {
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
				<h1>
					Step {this.props.ProposalStep}: Revision of Proposal after Title Board
					Meeting
				</h1>
				<p>
					If the Title Board finds that a proposal contains more than one
					subject, and therefore declines to set a title, the proponents may
					change the proposal and resubmit it directly to the board for title
					setting.
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
					However, if the change involves more than the removal of language to
					achieve a single subject or if the board finds the revisions are so
					substantial that another review and comment meeting is in the public
					interest, the proposal must be resubmitted to legislative staff for
					review. In these cases, the steps followed are identical to Steps 1
					and 2.
				</p>

				<button
					data-testid="research-button"
					onClick={this.submitNextStep}
				>
					Next Step
				</button>
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
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSix);
