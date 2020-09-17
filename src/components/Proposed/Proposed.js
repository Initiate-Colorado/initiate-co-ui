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
        }
      ).catch(function (error) {
        console.log(error);
      }
    )
  }
  
  getProposedBallots();


  return (
      <div className="Proposed">
        <h1>Proposed Initiatives:</h1>
        <InitiativeCard />
      </div>
    );
};   

const mapStateToProps = (state) => {
  return {
    ballots: state
  };
};


export default connect(mapStateToProps, null)(Proposed);

