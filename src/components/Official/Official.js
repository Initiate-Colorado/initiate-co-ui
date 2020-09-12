import React, { Component } from 'react';
import axios from 'axios'
import { query } from 'gql-query-builder'
import './Official.css';



class Official extends Component {

  getOfficialBallots() {
    return axios.post('https://initiate-co-backend.herokuapp.com/', query({
      operation: 'ballots',
      fields: ['id']
    })).then(
      response => {
        console.log(response)
        }
      ).catch(function (error) {
        console.log(error);
      }
    )
  }

  componentDidMount() {    
    this.getOfficialBallots()
  }

  render () {
    return (
      <div className="Official">
        <h1>This will hold our official initiatives</h1>
      </div>
    );
}}

export default Official;