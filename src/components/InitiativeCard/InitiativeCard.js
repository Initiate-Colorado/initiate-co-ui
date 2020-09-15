import React, { Component, useEffect, useState } from 'react';
import './InitiativeCard.css';

class InitiativeCard extends Component  {
  constructor(props){
    super(props)
    this.state = {
      ballot : this.props.ballot
    }
  }


  render() {
    const { ballot } = this.props
    console.log('ballot', ballot)
    console.log('state', this.state)
    console.log('props', this.props)
    return (
    <div className="InitiativeCard">
        {/* <h1>Citizenship Qualification of Electors</h1>
        <h2>Representative: George Athanasopoulos</h2>
        <p>Only a citizen of the United State who has attained the age of eighteen years,
        has resided in this state for such time as may be prescribed by law, and has been duly
        registered as a voter if required by law shall be qualified to vote at all elections.</p> */}
        <h1>Representative:</h1>
        <h2>{this.state.ballotNumber}</h2>
        <p>{this.props.title}</p>
    </div>
  );
}
}

export default InitiativeCard;