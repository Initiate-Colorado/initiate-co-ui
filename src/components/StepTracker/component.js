import React from "react";
import { connect } from "react-redux";
import { Stepper } from "react-form-stepper";

const StepTracker = ({ProposalStep, handleIncrementClick, handleDecrementClick}) => (
	<div className="step-tracker">
		<Stepper
			steps={[
        { label: "Submission of Proposal for Review and Comment" }, 
        { label: "Review and Comment Meeting" }, 
        { label: "Submission of Revised Proposals" },
        { label: "Filing with Secretary of State" },
        { label: "Title Setting" },
        { label: "Revision of Proposal after Title Board Meeting" },
        { label: "Rehearings of Title Board Decisions" },
        { label: "Appeals of Title Board Decisions " },
        { label: "Signature Gathering" },
        { label: "Submission of Petitions to the Secretary of State" },
        { label: "Verification of Signatures" },
        { label: "Curing an Insufficiency" },
        { label: "Protesting the Secretary of State's Determination" },
        { label: "Placement on Ballot" },
      ]}
			activeStep={ProposalStep - 1}
		/>
		<button onClick={handleDecrementClick}>Decrement</button>
		<button onClick={handleIncrementClick}>Increment</button>
	</div>
);

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

export default connect(mapStateToProps, mapDispatchToProps)(StepTracker);
