import React from 'react';
import './InitiativeContainer.css';
import Official from '../Official/Official';
import Proposed from '../Proposed/Proposed';


function InitiativeContainer() {
  return (
    <div className="InitiativeContainer">
      <Official />
      <Proposed />
    </div>
  );
}

export default InitiativeContainer;
