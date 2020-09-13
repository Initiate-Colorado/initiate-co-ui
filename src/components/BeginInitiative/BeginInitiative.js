import React, {useState} from 'react';
import './BeginInitiative.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const BeginInitiative = ({ProposalStep, handleIncrementClick}) => {

  ProposalStep = 0
    return (
        <section className = "begin-initiative">
            <div className= "step-title">
              <h1>Congratulations on taking the first step towards proposing a ballot initiative!</h1>
            </div>
            <div className= "step-text">
            <p>Click the 'GET STARTED' button below in order to complete the following steps:</p>
            </div>
            <NavLink to = {"/proposal"}>
                <button
                    data-testid="research-button"
                    onClick={handleIncrementClick}
                >
                        GET STARTED
                </button>
            </NavLink>    
        </section>
    )
}

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


export default connect(mapStateToProps, mapDispatchToProps)(BeginInitiative);