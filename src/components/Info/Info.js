import React from "react";
import "./Info.css";
import { connect } from "react-redux";
import StepOne from '../mocks/StepOne'
import StepTwo from '../mocks/StepTwo'


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
