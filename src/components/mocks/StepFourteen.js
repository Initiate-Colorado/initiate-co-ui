import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepFourteen = ({ProposalStep, handleReset}) => {
	return (
    <section className="step-fourteen">
      <h1>Step {ProposalStep}: Placement on Ballot </h1>
      <p>Proposals are numbered and placed on the ballot in the order in which statements of sufficiency are issued.</p>
				<button data-testid="research-button" onClick={handleReset}>
					CONGRATS!!
				</button>
    </section>
	);
};

const mapStateToProps = state => {
  return {
    ProposalStep: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleReset: () => dispatch({ type: "RESET" }),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(StepFourteen);

