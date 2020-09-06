import React from 'react';
import './BeginInitiative.css';
import { NavLink } from 'react-router-dom';

const BeginInitiative = () => {
    return (
        <section className = "begin-initiative">
            <NavLink to = {"/Proposal/ProposalSubmission"}>
                <button
                    data-testid="research-button">
                        GET STARTED
                </button>
            </NavLink>         
        </section>
    )
}

export default BeginInitiative;