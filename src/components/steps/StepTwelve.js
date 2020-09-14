import React from "react";
import { connect } from "react-redux";

const StepTwelve = ({
	ProposalStep,
	handleIncrementClick,
	handleDecrementClick,
}) => {

	const step = ProposalStep.initiativeStepReducer

	return (
		<section className="step-twelve">
			<div className="step-title">
				<h1>Step {step}: Curing an Insufficiency </h1>
			</div>
			<div className={"step-text"}>
				<p>
					The proponents of a proposal may cure an insufficient petition by
					submitting an addendum with the additional signatures necessary to
					cure the insufficiency. The proponents have 15 days to cure a
					petition, except that the 15 days does not extend the statutory
					deadline (three months before the election) for submitting signatures.
					The Secretary of State has ten days to verify each signature in the
					addendum.
				</p>
			</div>
			<h3>
				Last day to cure petition signatures for the 2020 election: August 3,
				2020
			</h3>
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

export default connect(mapStateToProps, mapDispatchToProps)(StepTwelve);
