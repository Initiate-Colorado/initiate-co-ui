import React from "react";
import { connect } from "react-redux";

const StepFourteen = ({ ProposalStep, handleReset, handleDecrementClick }) => {
	const step = ProposalStep.initiativeStepReducer


	return (
		<section className="step-fourteen">
			<div className="step-title">
				<h1>Step {step}: Placement on Ballot </h1>
			</div>
			<div className={"step-text"}>
				<p>
					Proposals are numbered and placed on the ballot in the order in which
					statements of sufficiency are issued.
				</p>
			</div>
			<button
				className="done-button"
				data-testid="research-button"
				onClick={handleReset}
			>
				CONGRATS!!
			</button>
			<div className="buttons">
				<button data-testid="research-button" onClick={handleDecrementClick}>
					Go Back
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
		handleReset: () => dispatch({ type: "RESET" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepFourteen);
