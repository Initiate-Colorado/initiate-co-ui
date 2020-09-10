import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const StepThree =  ({ProposalStep, handleIncrementClick}) => {
	return (
		<section className="step-three">
			<h1>Step {ProposalStep}: Re-Submission of Revised Proposal</h1>
			<p>
				Some proponents revise their proposals after the review and comment
				meeting. A revised proposal must be submitted to legislative staff for
				review if the revisions are substantial and if they are not in direct
				response to a comment from legislative staff. Again, a public meeting is
				scheduled for two weeks following receipt of the proposal. The
				procedures followed are identical to those set forth in Steps 1 and 2,
				except that if legislative staff has no additional comments on the
				revised proposal, the proponents are so notified and the review and
				comment meeting is canceled. This notification occurs within 72 hours of
				the proposal's submission.
			</p>
			<h3>Last Day for Submitting Revised Proposal: March 20, 2020</h3>
			<h3>
				Last Day for Review and Comment Meeting on Revised Proposal: April 3,
				2020
			</h3>
			<NavLink to={"/proposal/step-four"}>
				<button data-testid="research-button" onClick={handleIncrementClick}>
					Next Step
				</button>
			</NavLink>
		</section>
	);
};

const mapStateToProps = state => {
  return {
    ProposalStep: state
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepThree);
