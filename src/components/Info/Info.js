import React from "react";
import "./Info.css";
import { connect } from "react-redux";
import BeginInitiative from '../BeginInitiative/BeginInitiative';
import axios from 'axios'
import { query } from 'gql-query-builder'
import StepOne from "../steps/StepOne";
import StepTwo from "../steps/StepTwo";
import StepThree from "../steps/StepThree";
import StepFour from "../steps/StepFour";
import StepFive from "../steps/StepFive";
import StepSix from "../steps/StepSix";
import StepSeven from "../steps/StepSeven";
import StepEight from "../steps/StepEight";
import StepNine from "../steps/StepNine";
import StepTen from "../steps/StepTen";
import StepEleven from "../steps/StepEleven";
import StepTwelve from "../steps/StepTwelve";
import StepThirteen from "../steps/StepThirteen";
import StepFourteen from "../steps/StepFourteen";


const Info = ({ ProposalStep }) => {
	let step = ProposalStep.initiativeStepReducer
	if (step > 14) {
		step = 0
		localStorage.setItem('savedUserStep', 1)
	}

	const getSteps = (id) => {
      return axios.post('https://initiate-co-backend.herokuapp.com/', query({
        operation: 'ballotProcess',
        variables: { id: id },
        fields: ['id']
      })).then(
        response => {
          console.log(response)
        }
      ).catch(function (error) {
        console.log(error);
      })
	}

	getSteps(step)

	return (
		<section 
			className="info"
			data-testid="info-section">
			<div className="steps">
      {step === 0 && <BeginInitiative />}
			{step === 1 && <StepOne />}
			{step === 2 && <StepTwo />}
			{step === 3 && <StepThree />}
			{step === 4 && <StepFour />}
			{step === 5 && <StepFive />}
			{step === 6 && <StepSix />}
			{step === 7 && <StepSeven />}
			{step === 8 && <StepEight />}
			{step === 9 && <StepNine />}
			{step === 10 && <StepTen />}
			{step === 11 && <StepEleven />}
			{step === 12 && <StepTwelve />}
			{step === 13 && <StepThirteen />}
			{step === 14 && <StepFourteen />}
			{step > 14 && { step : 0 } &&<BeginInitiative />}
			</div>
		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		ProposalStep: state,
	};
};

export default connect(mapStateToProps)(Info);
