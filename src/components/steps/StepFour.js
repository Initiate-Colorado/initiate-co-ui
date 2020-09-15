import React from "react";
import { connect } from "react-redux";

const StepFour = ({
	ballotProcess,
	ProposalStep,
	handleIncrementClick,
	handleDecrementClick,
}) => {
	const step = ProposalStep.initiativeStepReducer;
	return (
		<section className="step-four">
			<div className="step-title">
				<h1>
					Step {step}: {ballotProcess.title}
				</h1>
			</div>
			<div className={"step-text"}>
				<p>
					After the review and comment process, you are on your way to the
					Secretary of State. This begins the process of creating a title. You
					must submit the following items: (a) the original proposal; (b) the
					revised proposal; and ( c ) the final copy of that sweet sweet
					proposal. The proposal is filed with:
				</p>
				<p className="address">
					Jena Griswold Secretary of State 1700 Broadway, Suite 270 Denver,
					Colorado 80290 Phone: 303-894-2200, press 3
				</p>
				<p>
					Ballot titles are set on the first and third Wednesdays of each month.
					To have a proposal considered for title setting, proponents must file
					their proposal with the Secretary of State by 3:00 p.m. on the 12th
					day before a meeting.
				</p>
			</div>
			<h3>Last Day for Filing: {ballotProcess.dueDate}</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(StepFour);
