import React from "react";
import { connect } from 'react-redux';

const StepNine = ({ProposalStep, handleIncrementClick, handleDecrementClick}) => {
  const step= ProposalStep.initiativeStepReducer

	return (
    <section className="step-nine">
      			<div className="step-title">
      <h1>Step {step}: Signature Gathering </h1>

            </div>
            <div className={"step-text"}>      
      <p>Once the ballot title and submission clause are set and the petition form is approved by the Secretary of State, petitions for the proposal may be printed and circulated throughout the state to obtain the required number of signatures. Only registered electors may sign petitions. To be placed on the ballot, the signature requirement is at least five percent of the total votes cast for all candidates for the Office of Secretary of State at the previous general election.  In addition to this signature requirement, a proposal that seeks to make a change to the Colorado constitution requires signatures of at least 2 percent of the total registered electors in each of the 35 Colorado state senate districts.</p>
      <h3>Valid signatures required: 124,632</h3>
      </div>
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

const mapStateToProps = state => {
  return {
    ProposalStep: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(StepNine);

