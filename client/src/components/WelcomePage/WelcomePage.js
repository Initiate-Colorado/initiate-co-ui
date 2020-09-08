import React from 'react';
import './WelcomePage.css';
import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <section className = "option-area">
            <h1>What would you like to do?</h1>
            <section className = "proposal-start">
                <h1>Propose a Ballot Initiative</h1>
                <p>
                    Be guided through the process of proposing a ballot initiative!
                </p>
                <NavLink to = {"/Proposal"}>
                    <button
                        data-testid="proposal-button">
                            GET STARTED
                    </button>
                </NavLink>
            </section>
            <section className="research-start">   
                <h1>Research Initiatives</h1>    
                <p>
                    Learn more about initiatives and show your support!
                </p>    
                <NavLink to = {"/research"}>
                    <button
                        data-testid="research-button">
                            GET STARTED
                    </button>
                </NavLink>
            </section>     
        </section>
    )
}

export default WelcomePage; 