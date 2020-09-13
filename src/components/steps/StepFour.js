import React from "react";
import { connect } from "react-redux";

const StepFour = ({ ProposalStep, handleIncrementClick, handleDecrementClick }) => {
	return (
		<section className="step-four">
			<div className="step-title">
			<h1> Step {ProposalStep}: Filing with Secretary of State</h1>
			</div>
			<div className={"step-text"}>
			<p>
				Following the review and comment process, proponents may submit their
				proposal to the Secretary of State to begin the process of having a
				title set. Proponents must submit the following items to the Secretary
				of State: 
				<div>
					(a) the original proposal;
				</div>
				<div>
					(b) the proposal as revised with any revisions highlighted or
					otherwise indicated, if applicable;
				</div>
				<div> and (c)the final language of the proposal.
				</div> 
				The proposal is filed with:
				<p className="address">
					Jena Griswold Secretary of State 1700 Broadway, Suite 270 Denver,
					Colorado 80290 Phone: 303-894-2200, press 3
				</p>
				Ballot titles are set on the first and third Wednesdays of each month.
				To have a proposal considered for title setting, proponents must file
				their proposal with the Secretary of State by 3:00 p.m. on the 12th day
				before a meeting.
			</p>
			</div>
			<h3>Last Day for Filing: April 3, 2020</h3>
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
		handleDecrementClick: () => dispatch({ type: "DECREMENT" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepFour);
