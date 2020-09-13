import React from 'react';
import axios from 'axios'
import { connect } from "react-redux";
import { query } from 'gql-query-builder'
import './Official.css';


const Official = () => {

  const getOfficialBallots = () => {
    return axios.post('https://initiate-co-backend.herokuapp.com/', query({
      operation: 'ballots',
      fields: [{ ballots: ['id', 'title']}]
    })).then(
      response => {
        console.log(response.data.data.ballots)
        }
      ).catch(function (error) {
        console.log(error);
      }
    )
  }

  getOfficialBallots();

  return (
      <div className="Official">
        <h1>This will hold our official initiatives</h1>
        {/* <h1>{this.state.data}</h1> */}
      </div>
    );
};   

const mapStateToProps = (state) => {
  return {
    ballots: state
  };
};


export default connect(mapStateToProps, null)(Official);