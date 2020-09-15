import React, {useState, useEffect} from "react";
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

	useEffect(() => {
		if(step < 15){
			getSteps(step)
		}
	}, [step])

	const [ballotProcess, setBallotProcess] = useState({})

	if (step > 14) {
		step = 0
		localStorage.setItem('savedUserStep', 1)
	}

	const getSteps = (id) => {
      return axios.post('https://initiate-co-backend.herokuapp.com/', query({
        operation: 'ballotProcess',
        variables: { id: id },
        fields: ['id', 'title', 'dueDate', 'description']
      })).then(
        response => {
					console.log(response.data.data.ballotProcess)
					if(ballotProcess !== response.data.data.ballotProcess){
						setBallotProcess(response.data.data.ballotProcess)
					}
        }
      ).catch(function (error) {
        console.log(error);
      })
	}

	return (
		<section className="info">
			<div className="steps">
      {step === 0 && <BeginInitiative />}
			{step === 1 && <StepOne ballotProcess={ballotProcess}/>}
			{step === 2 && <StepTwo ballotProcess={ballotProcess}/>}
			{step === 3 && <StepThree ballotProcess={ballotProcess}/>}
			{step === 4 && <StepFour ballotProcess={ballotProcess}/>}
			{step === 5 && <StepFive ballotProcess={ballotProcess}/>}
			{step === 6 && <StepSix ballotProcess={ballotProcess}/>}
			{step === 7 && <StepSeven ballotProcess={ballotProcess}/>}
			{step === 8 && <StepEight ballotProcess={ballotProcess}/>}
			{step === 9 && <StepNine ballotProcess={ballotProcess}/>}
			{step === 10 && <StepTen ballotProcess={ballotProcess} />}
			{step === 11 && <StepEleven ballotProcess={ballotProcess}/>}
			{step === 12 && <StepTwelve ballotProcess={ballotProcess}/>}
			{step === 13 && <StepThirteen ballotProcess={ballotProcess}/>}
			{step === 14 && <StepFourteen ballotProcess={ballotProcess}/>}
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
