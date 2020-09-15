import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { query } from 'gql-query-builder';
import InitiativeCard from '../InitiativeCard/InitiativeCard';
import './Official.css';


const Official = () => {

  const [ballots, setBallots] = useState([])


  const getOfficialBallots = () => {
    return axios.post('https://initiate-co-backend.herokuapp.com/', query({
      operation: 'ballots',
      fields: ['id', 'subject', 'description', 'representative', 'title', 'representativeAddress', 'corepresentative', 'corepresentativeAddress', 'ballotNumber']
    })).then(
      response => {
        // console.log(response.data.data.ballots)
        setBallots(response.data.data.ballots)
        }
      ).catch(function (error) {
        console.log(error);
      }
    )
  }

 useEffect(() => { getOfficialBallots() }, [] );

 const displayBallots = (ballots) => {

     const officialCards = ballots.map((ballot) => {
       return (
        <InitiativeCard
           ballotDetails = {ballot} />
       );
   });
   return <div className="official-cards">{officialCards}</div>;
 }

  return (
      <div className="Official">
        <h1>Official Initiatives:</h1>
        {displayBallots(ballots)}
      </div>
    );
} 

const mapStateToProps = (state) => {
  return {
    ballots: state
  };
};


export default connect(mapStateToProps, null)(Official);