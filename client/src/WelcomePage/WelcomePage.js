import React from 'react';
import './WelcomePage.css';
import { NavLink } from 'react-router-dom';

const WelcomePage = () => {
    return (
        <section className = "option-area">
            <h1>What do you plan on learning today?</h1>
                <NavLink to = {"/HouseSelection"}>
                    <button
                        data-testid="house-button">
                            Choose by house
                    </button>
                </NavLink>
                <NavLink to = {"/CharacterSelection"}>
                    <button
                        data-testid="character-button">
                            Choose by character
                    </button>
                </NavLink>
        </section>
    )
}

export default WelcomePage;