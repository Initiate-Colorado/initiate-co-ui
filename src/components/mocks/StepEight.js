import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepEight = ({ProposalStep, handleIncrementClick}) => {

	return (
    <section className="step-eight">
      <h1>Step {ProposalStep}: Appeals of Title Board Decisions </h1>
      <p>Anyone who is dissatisfied with the Title Board's action at a rehearing may file an appeal with the Colorado Supreme Court.  The Court is required to act on the appeal promptly when an appeal is filed within five days of receiving the required documentation from the Secretary of State.  The Court usually either affirms the action of the Title Board or reverses it, in which case the Court remands the case to the Title Board with instructions, pointing out where the Title Board erred.</p>
        <a href="https://www.courts.state.co.us/Courts/Supreme_Court/FAQs.cfm">Information about Appeals</a>
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


export default connect(mapStateToProps, mapDispatchToProps)(StepEight);

