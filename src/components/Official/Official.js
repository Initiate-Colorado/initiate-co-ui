import React, { Component } from 'react';
import axios from 'axios'
import { query } from 'gql-query-builder'
import './Official.css';



class Official extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: '',
      data: {}
    }
  }

  getOfficialBallots() {
    return axios.post('https://initiate-co-backend.herokuapp.com/', query({
      operation: 'ballots',
      fields: ['id']
    })).then(
      response => {
        this.setState({
          data: response.data.data.ballots
        })
        console.log(this.state)
        }
      ).catch(function (error) {
        console.log(error);
      }
    )
  }


  componentDidMount = async() => {
    try {
      const officialBallots = await this.getOfficialBallots()
      this.setState({
        data: officialBallots.data
      })
      // console.log(this.state)
    } catch (error) {
        this.setState({error: error})
    }
  }    
  


  render () {
    return (
      <div className="Official">
        <h1>This will hold our official initiatives</h1>
        {/* <h1>{this.state.data}</h1> */}
      </div>
    );
}}


export default Official;