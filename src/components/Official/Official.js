import React from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { query } from 'gql-query-builder';
import InitiativeCard from '../InitiativeCard/InitiativeCard';
import './Official.css';


const Official = () => {

  // let ballots;

  const getOfficialBallots = () => {
    return axios.post('https://initiate-co-backend.herokuapp.com/', query({
      operation: 'ballots',
      fields: [{ ballots: ['id', 'subject', 'description', 'representative']}]
    })).then(
      response => {
        console.log(response.data.data.ballots)
        // ballots = response.data.data.ballots
        // console.log(ballots)
        }
      ).catch(function (error) {
        console.log(error);
      }
    )
  }

  getOfficialBallots();

//  const officialCards = ballots.map((ballot) => {
//    return (
//      <InitiativeCard
//        {...ballot} key={ballot.id} />
//      );
//    });
//    return <div className="official-cards">{officialCards}</div>;
//  }; 

  return (
      <div className="Official">
        <h1>Official Initiatives:</h1>
        <InitiativeCard />  
      </div>
    );
};   

const mapStateToProps = (state) => {
  return {
    ballots: state
  };
};


export default connect(mapStateToProps, null)(Official);