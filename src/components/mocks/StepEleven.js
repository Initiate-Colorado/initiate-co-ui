import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepEleven = ({ProposalStep, handleIncrementClick}) => {

	return (
    <section className="step-eleven">
      <h1>Step {ProposalStep}: Verification of Signatures </h1>
      <p>The Secretary of State reviews the petition to determine if it contains a sufficient number of valid signatures.  The Secretary of State first verifies signatures by a random sample of at least 5 percent of the signatures.  At a minimum, 4,000 signatures must be verified.  If the sample indicates that the number of valid signatures is 90 percent or less of the required total, the petition is deemed insufficient.  If the sample indicates that the number of valid signatures is 110 percent or more of number required, the petition is deemed sufficient.  However, if the sample indicates the number of valid signatures is more than 90 percent but less than 110 percent of the required number, each signature on the petition must be verified.  The Secretary of State has 30 days to make a determination of petition sufficiency.  When a petition is insufficient, the Secretary of State is required to specify the number of insufficient signatures. Petitions are deemed sufficient if the Secretary of State fails to make a determination within 30 days.</p>
      <h3>Last day for the Secretary of State to determine valid signatures for 2020 election:  September 2, 2020</h3>
      <NavLink to={"/proposal/step-twelve"}>
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


export default connect(mapStateToProps, mapDispatchToProps)(StepEleven);

