import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepTwelve = ({ProposalStep, handleIncrementClick}) => {

	return (
    <section className="step-twelve">
      <h1>Step {ProposalStep}: Curing an Insufficiency </h1>
      <p>The proponents of a proposal may cure an insufficient petition by submitting an addendum with the additional signatures necessary to cure the insufficiency.  The proponents have 15 days to cure a petition, except that the 15 days does not extend the statutory deadline (three months before the election) for submitting signatures.  The Secretary of State has ten days to verify each signature in the addendum.</p>
      <h3>Last day to cure petition signatures for the 2020 election:  August 3, 2020</h3>

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


export default connect(mapStateToProps, mapDispatchToProps)(StepTwelve);

