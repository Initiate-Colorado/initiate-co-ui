import React from 'react';
import './Nav.css';
import StepTracker from '../StepTracker/component'

function Nav() {
  return (
    <div className="Nav">
      <header className="Nav-header">
        <StepTracker />
        <p className="Nav-p">
          Nav
        </p>
      </header>
    </div>
  );
}

export default Nav;
