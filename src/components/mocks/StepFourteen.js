import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepFourteen = ({ProposalStep, handleIncrementClick}) => {

	return (
    <section className="step-fourteen">
      <h1>Step {ProposalStep}: Placement on Ballot </h1>
      <p>Proposals are numbered and placed on the ballot in the order in which statements of sufficiency are issued.</p>
      <NavLink to={"/proposal"}>
				<button data-testid="research-button" onClick={handleIncrementClick}>
					CONGRATS!!
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

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(StepFourteen);

