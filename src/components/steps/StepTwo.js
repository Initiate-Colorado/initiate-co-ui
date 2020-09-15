import React from "react";

import { connect } from "react-redux";

const StepTwo = ({
	ballotProcess,
	handleIncrementClick,
	handleDecrementClick,
}) => {
	const step = ballotProcess.id;
	return (
		<section className="step-two">
			<div className="step-title">
				<h1>
					Step {step}: {ballotProcess.title}
				</h1>
			</div>
			<div className={"step-text"}>
				<p>
					Here’s what’s happening behind the scenes while the Council (sounds
					official) is reviewing your proposal. Review the wording of an
					initiative with the proponents (you and your corepresentative) so that
					the initiative accomplishes the proponents' intent (is this proposing
					what you want it to propose, you know what I mean?). Give the public
					notice that a proposal on a given topic is under consideration. The
					Office of Legislative Legal Services and Legislative Council Staff
					jointly prepare written comments on each proposal. The comments
					typically contain a summary of the proposal followed by a series of
					questions concerning the wording, intent, and purpose of the proposal.
					These comments are provided to the proponents 48 hours before the
					meeting and are reviewed verbally with the proponents during the
					meeting. Both designated representatives are required to attend any
					review and comment meeting. The meeting is open to the public and
					recorded for the public record, but there is no public comment or
					testimony at the meeting. The proponents can revise their proposal to
					incorporate some or all of the legislative staff comments, but they
					are not required to do so. If proponents withdraw a measure prior to
					the meeting, the comments prepared by legislative staff are not
					released to anyone other than the proponents. WARNING: If you or your
					corepresentative fails to attend a review and comment meeting, the
					petition is a no go, nada, out of the picture. It’s withdrawn by the
					proponents. If one of you fails to attend a review and comment
					meeting, the proposal is deemed to be automatically resubmitted unless
					the representative who is present doesn’t want it to.
				</p>
			</div>
			<h3>Submission Deadline: {ballotProcess.dueDate}</h3>
			<h3>Last Day for Review: April 3, 2020</h3>
			<div className="buttons">
				<button data-testid="research-button" onClick={handleDecrementClick}>
					Go Back
				</button>
				<button data-testid="research-button" onClick={handleIncrementClick}>
					Next Step
				</button>
			</div>
		</section>
	);
};

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

export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);
