import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const StepSix = ({ handleIncrementClick }) => {
	return (
		<section className="step-six">
			<h1>Step Six: Revision of Proposal after Title Board Meeting</h1>
			<p>
			If the Title Board finds that a proposal contains more than one subject, and therefore declines to set a title, the proponents may change the proposal and resubmit it directly to the board for title setting.  However, if the change involves more than the removal of language to achieve a single subject or if the board finds the revisions are so substantial that another review and comment meeting is in the public interest, the proposal must be resubmitted to legislative staff for review.  In these cases, the steps followed are identical to Steps 1 and 2.
			</p>
			<NavLink to={"/proposal/step-seven"}>
				<button data-testid="research-button" onClick={handleIncrementClick}>
					Next Step
				</button>
			</NavLink>
		</section>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
	};
};

export default connect(null, mapDispatchToProps)(StepSix);
