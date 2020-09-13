import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepThirteen = ({ProposalStep, handleIncrementClick}) => {

	return (
    <section className="step-thirteen">
      <h1>Step {ProposalStep}: Protesting the Secretary of State's Determination </h1>
      <p>Any registered elector may appeal the Secretary of State's determination of sufficiency by filing a protest in Denver District Court.  The protest must either allege defects in the random sampling procedure or challenge the grounds for allowing or denying specific signatures.  A protest must be filed with the court within 30 days of the Secretary of State's determination, and the burden of proof lies with the protesting party.  A hearing on a protest is required to begin as soon as is conveniently possible and must conclude within 30 days of when it began.  The Colorado Supreme Court must review the district court's decision if so requested.</p>

				<button data-testid="research-button" onClick={handleIncrementClick}>
					Next Step
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
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(StepThirteen);

