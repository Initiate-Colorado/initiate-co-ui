import React from 'react';
import './InitiativeContainer.css';
import Official from '../Official/Official';
import Proposed from '../Proposed/Proposed';
import InitiativeCard from '../InitiativeCard/InitiativeCard';


const InitiativeContainer = ({ ballots }) => {
const officialCards = ballots.map((ballot) => {
  return (
    <InitiativeCard
      {...ballot} key={ballot.id} />
    );
  });
  return <div className="official-cards">{officialCards}</div>;
};
//   return (
//     <div className="InitiativeContainer">
//       <Official />
//       <Proposed />
//     </div>
//   );
// }

export default InitiativeContainer;
