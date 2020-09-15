import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const StepFourteen = ({ ballotProcess, handleReset, handleDecrementClick }) => {
	return (
		<section className="step-fourteen">
			<div className="step-title">
				<h1>
					Step {ballotProcess.id}: {ballotProcess.title}
				</h1>
			</div>
			<div className={"step-text"}>
				<p>
					CONGRATS! Your proposal is on its way to the ballot. Proposals are
					numbered and placed on the ballot in the order in which statements of
					sufficiency are issued.
				</p>
			</div>
			<NavLink
				to={"/"}
				className="done-NavLink"
				data-testid="research-button"
				style={{ textDecoration: "none", color: "black" }}
				onClick={handleReset}
			>
				YOU DID IT!!
			</NavLink>
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
