import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepTen = ({ProposalStep, handleIncrementClick}) => {

	return (
    <section className="step-ten">
      <h1>Step {ProposalStep}:  Submission of Petitions to the Secretary of State </h1>
      <p>Signed petitions must be submitted to the Secretary of State within six months from the date that the title and submission clause were fixed by the Title Board, but in no event later than three months before the election. The six-month counting period begins when a final decision is rendered by the Title Board following a motion for rehearing or by the Supreme Court. (See the Secretary of State's rules for more specific information on the time period for collecting signatures.)  Petitions must be submitted to the Secretary of State by 3:00 p.m. on the applicable date. Each petition section must contain an affidavit signed by the circulator affirming that signatures were collected in accordance with state law, and petitions must be bound in volumes of 100 sections.</p>
      <h3>Deadline to submit to Secretary of State for 2020: 3:00 p.m., August 3, 2020</h3>

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


export default connect(mapStateToProps, mapDispatchToProps)(StepTen);

