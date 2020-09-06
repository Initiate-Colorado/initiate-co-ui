import React from 'react';
import './WelcomePage.css';
import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <section className = "option-area">
            <h1>What would you like to do?</h1>
            <h1>Propose a Ballot Initiative</h1>
            <p>

            </p>
                <NavLink to = {"/HouseSelection"}>
                    <button
                        data-testid="house-button">
                            GET STARTED
                    </button>
                </NavLink>
            <h1>Research Initiatives</h1>    
            <p>
                
            </p>    
                <NavLink to = {"/CharacterSelection"}>
                    <button
                        data-testid="character-button">
                            GET STARTED
                    </button>
                </NavLink>
        </section>
    )
}

export default WelcomePage;