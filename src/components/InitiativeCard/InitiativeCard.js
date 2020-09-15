import React, { useState, useEffect } from 'react';
import './InitiativeCard.css';

const InitiativeCard = ({ ballotDetails }) => {

    const [ballot, setBallot] = useState({})
    useEffect(() => {
      if (ballotDetails !== undefined){
      console.log(Object.keys(ballotDetails))
      setBallot(ballotDetails)
      }
    }, [ballotDetails])
    // console.log('props', this.props)
    return (
    <div className="InitiativeCard">
        {/* <h1>Citizenship Qualification of Electors</h1>
        <h2>Representative: George Athanasopoulos</h2>
        <p>Only a citizen of the United State who has attained the age of eighteen years,
        has resided in this state for such time as may be prescribed by law, and has been duly
        registered as a voter if required by law shall be qualified to vote at all elections.</p> */}
        <h1>{ballot.title}</h1>
        <h2>{ballot.ballotNumber}</h2> 
        <p>Representative: {ballot.representative} </p>
    </div>
  );
}


export default InitiativeCard;