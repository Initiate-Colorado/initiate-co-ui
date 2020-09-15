import React, { Component } from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { query } from 'gql-query-builder';
import './Proposed.css';
import InitiativeCard from '../InitiativeCard/InitiativeCard';

const Proposed = () => {

  const getProposedBallots = () =>  {
    return axios.post('https://initiate-co-backend.herokuapp.com/', query({
      operation: 'proposedBallots',
      fields: ['id', 'subject', 'description', 'representative', 'title']
    })).then(
      response => {
        console.log(response.data.data.ballots)
        }
      ).catch(function (error) {
        console.log(error);
      }
    )
  }
  
  getProposedBallots();

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
        <h1>Proposed Initiatives:</h1>
        <InitiativeCard />
        {/* <h1>{this.state.data}</h1> */}
      </div>
    );
};   

const mapStateToProps = (state) => {
  return {
    ballots: state
  };
};


export default connect(mapStateToProps, null)(Proposed);

