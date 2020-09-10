import React from "react";
import "./Info.css";
import { connect } from "react-redux";
import StepOne from '../mocks/StepOne'
import StepTwo from '../mocks/StepTwo'
import StepThree from '../mocks/StepThree'
import StepFour from '../mocks/StepFour'
import StepFive from '../mocks/StepFive'
import StepSix from '../mocks/StepSix'

const Info = ({ ProposalStep, handleIncrementClick }) => {
  console.log(ProposalStep)
	return (
      <section className="info">
        {ProposalStep === 1 && (
          <StepOne />
        )}
        {ProposalStep === 2 && (
          <StepTwo />
        )}
        {ProposalStep === 3 && (
          <StepThree />
        )}
        {ProposalStep === 4 && (
          <StepFour />
        )}
        {ProposalStep === 5 && (
          <StepFive />
        )}
        {ProposalStep === 6 && (
          <StepSix />
        )}
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
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
		handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Info);
