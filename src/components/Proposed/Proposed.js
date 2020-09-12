import React, { Component } from 'react';
import axios from 'axios'
import { query } from 'gql-query-builder'
import './Proposed.css';

class Proposed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: '',
      data: {}
    }
  }

  getProposedBallots() {
    return axios.post('https://initiate-co-backend.herokuapp.com/', query({
      operation: 'ballots',
      fields: ['id']
    })).then(
      response => {
        this.setState({
          data: response.data.data.ballots
        })
        // console.log(this.state)
        }
      ).catch(function (error) {
        console.log(error);
      }
    )
  }
  
  componentDidMount = async() => {
    try {
      const officialBallots = await this.getProposedBallots()
      this.setState({
        data: officialBallots.data
      })
    } catch (error) {
        this.setState({error: error})
    }
  }
  
  render () {
    return (
      <div className="Proposed">
        <h1>This will hold our proposed initiatives</h1>
        {/* <h1>{this.state.data}</h1> */}
      </div>
    );
  }
}

export default Proposed;

