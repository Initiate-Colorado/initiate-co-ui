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


const Info = ({ ProposalStep}) => {


	if (ProposalStep > 14) {
		ProposalStep = 0
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

	getSteps(ProposalStep)

	return (
		<section className="info">
			<div className="steps">


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
			{ProposalStep > 14 && { ProposalStep : 0 } &&<BeginInitiative />}
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
