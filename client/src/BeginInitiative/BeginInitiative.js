import React from 'react';
import './BeginInitiative.css';
import { NavLink } from 'react-router-dom';

const BeginInitiative = () => {
    return (
        <section className = "begin-initiative">
            <h1>Congratulations on taking the first step towards proposing a ballot initiative!</h1>
            <p>Click the 'GET STARTED' button below in order to complete the following steps:</p>
            <ol>
                <li>Submission of a Proposal</li>
                <li>Review and Comment</li>
                <li>Re-Submission of Revised Proposal</li>
                <li>Filing of Proposal</li>
                <li>Title Setting</li>
                <li>Revision of Proposal</li>
                <li>Rehearsing</li>
                <li>Appeals</li>
                <li>Signature Gathering</li>
                <li>Submission of Petitions</li>
                <li>Verification of Signatures</li>
                <li>Curing Insufficiencies</li>
                <li>Protesting Determination</li>
                <li>Ballot Placement</li>
            </ol>
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