import React, { useState, useEffect } from 'react';
import './InitiativeCard.css';

const InitiativeCard = ({ ballotDetails }) => {

    const [ballot, setBallot] = useState({})
    useEffect(() => {
      if (ballotDetails !== undefined){
      setBallot(ballotDetails)
      }
    }, [ballotDetails])
    return (
    <div className="InitiativeCard">
        <h1>{ballot.title}</h1>
        <h2>{ballot.ballotNumber}</h2> 
        <p>Representative: {ballot.representative} </p>
    </div>
  );
}


export default InitiativeCard;