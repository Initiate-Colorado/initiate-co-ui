import React from "react";
import "./Info.css";
import { connect } from "react-redux";
import StepTracker from '../StepTracker/component'
import BeginInitiative from '../BeginInitiative/BeginInitiative';
import StepOne from "../mocks/StepOne";
import StepTwo from "../mocks/StepTwo";
import StepThree from "../mocks/StepThree";
import StepFour from "../mocks/StepFour";
import StepFive from "../mocks/StepFive";
import StepSix from "../mocks/StepSix";
import StepSeven from "../mocks/StepSeven";
import StepEight from "../mocks/StepEight";
import StepNine from "../mocks/StepNine";
import StepTen from "../mocks/StepTen";
import StepEleven from "../mocks/StepEleven";
import StepTwelve from "../mocks/StepTwelve";
import StepThirteen from "../mocks/StepThirteen";
import StepFourteen from "../mocks/StepFourteen";

const Info = ({ ProposalStep }) => {
	console.log(ProposalStep);
	return (
		<section className="info">
      {ProposalStep === 0 && <BeginInitiative />}
			{ProposalStep === 1 && <StepOne />}
			{ProposalStep === 2 && <StepTwo />}
			{ProposalStep === 3 && <StepThree />}
			{ProposalStep === 4 && <StepFour />}
			{ProposalStep === 5 && <StepFive />}
			{ProposalStep === 6 && <StepSix />}
			{ProposalStep === 7 && <StepSeven />}
			{ProposalStep === 8 && <StepEight />}
			{ProposalStep === 9 && <StepNine />}
			{ProposalStep === 10 && <StepTen />}
			{ProposalStep === 11 && <StepEleven />}
			{ProposalStep === 12 && <StepTwelve />}
			{ProposalStep === 13 && <StepThirteen />}
			{ProposalStep === 14 && <StepFourteen />}
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		ProposalStep: state,
	};
};


export default connect(mapStateToProps)(Info);
