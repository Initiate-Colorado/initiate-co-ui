import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepNine = ({ProposalStep, handleIncrementClick}) => {

	return (
    <section className="step-nine">
      <h1>Step {ProposalStep}: Signature Gathering </h1>
      <p>Once the ballot title and submission clause are set and the petition form is approved by the Secretary of State, petitions for the proposal may be printed and circulated throughout the state to obtain the required number of signatures. Only registered electors may sign petitions. To be placed on the ballot, the signature requirement is at least five percent of the total votes cast for all candidates for the Office of Secretary of State at the previous general election.  In addition to this signature requirement, a proposal that seeks to make a change to the Colorado constitution requires signatures of at least 2 percent of the total registered electors in each of the 35 Colorado state senate districts.</p>
      <h3>Valid signatures required: 124,632</h3>
      <NavLink to={"/proposal/step-ten"}>
				<button data-testid="research-button" onClick={handleIncrementClick}>
					Next Step
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


export default connect(mapStateToProps, mapDispatchToProps)(StepNine);

