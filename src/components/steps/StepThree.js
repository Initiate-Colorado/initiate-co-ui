import React, { Component } from "react";

import { connect } from "react-redux";

class StepThree extends Component {
	constructor({ ProposalStep, handleIncrementClick }) {
		super({ ProposalStep, handleIncrementClick });
		this.state = {
			error: "",
			ballot: {
				newDescription: "",
			},
		};
  }

	componentDidMount() {
    const savedNewDescription = localStorage.getItem('newDescription')

    if (savedNewDescription) {
      this.setState({
        ballot: {
					newDescription: savedNewDescription,
				}
      })
    }
  }

	submitNextStep = (event) => {
    event.preventDefault()
    this.props.handleIncrementClick()
    this.submitProgress(event)
  }

	submitProgress = (event) => {
    event.preventDefault()
    localStorage.setItem('newDescription', this.state.ballot.newDescription)
  }

	onChange = (event) => {
		let ballot = this.state.ballot;
		ballot[event.target.name] = event.target.value;
		this.setState({
			ballot,
		});
	};

	render() {
		return (
		<section className="step-three">
			<h1>Step {this.props.ProposalStep}: Re-Submission of Revised Proposal</h1>
			<p>
				Some proponents revise their proposals after the review and comment
				meeting. A revised proposal must be submitted to legislative staff for
				review if the revisions are substantial and if they are not in direct
				response to a comment from legislative staff.
				<div className="revision">
					<textarea
						type="textarea"
						placeholder="Enter the revised text of your proposal here"
						required="required"
						name="newDescription"
						value={this.state.ballot.newDescription}
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
				Again, a public meeting is scheduled for two weeks following receipt of
				the proposal. The procedures followed are identical to those set forth
				in Steps 1 and 2, except that if legislative staff has no additional
				comments on the revised proposal, the proponents are so notified and the
				review and comment meeting is canceled. This notification occurs within
				72 hours of the proposal's submission.
			</p>
			<h3>Last Day for Submitting Revised Proposal: March 20, 2020</h3>
			<h3>
				Last Day for Review and Comment Meeting on Revised Proposal: April 3,
				2020
			</h3>

			<button data-testid="research-button" onClick={this.props.handleIncrementClick}>
				Next Step
			</button>
		</section>
	)}
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

export default connect(mapStateToProps, mapDispatchToProps)(StepThree);
