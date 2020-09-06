import React from 'react';
import { connect } from 'react-redux';

const StepTracker = ({ ProposalStep, handleIncrementClick, handleDecrementClick }) => (
  <div>
    <h1>Proposal Step Tracker {ProposalStep}</h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);

const mapStateToProps = state => {
  return {
    ProposalStep: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StepTracker);
