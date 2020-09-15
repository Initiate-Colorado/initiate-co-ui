import React from "react";
import { connect } from "react-redux";
import { Stepper } from "react-form-stepper";
import "./StepTracker.css";

const StepTracker = ({
	ProposalStep,
}) =>
	<div className="step-tracker">
		<Stepper
			styleConfig={{
				activeBgColor: "#DD6E42",
				activeTextColor: "#EAEAEA",
				inactiveBgColor: "#C0D6DF",
				inactiveTextColor: "#4F6D7A",
				completedBgColor: "#62D067",
				completedTextColor: "#62D067",
        size: "2.5em",
        labelFontSize: '1em',
			}}
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
			activeStep={!ProposalStep.initiativeStepReducer > 14 ? 1 : ProposalStep.initiativeStepReducer - 1}
		/>
	</div>

const mapStateToProps = (state) => {
	return {
		ProposalStep: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
		handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
		handleReset: () => dispatch({ type: "RESET" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTracker);
