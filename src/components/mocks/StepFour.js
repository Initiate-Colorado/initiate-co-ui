import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const StepFour = ({ handleIncrementClick }) => {
	return (
		<section className="step-four">
			<h1> Step 4: Filing with Secretary of State</h1>
			<p>
				Following the review and comment process, proponents may submit their
				proposal to the Secretary of State to begin the process of having a
				title set. Proponents must submit the following items to the Secretary
				of State: (a) the original proposal; (b) the proposal as revised with
				any revisions highlighted or otherwise indicated, if applicable; and (c)
				the final language of the proposal. The proposal is filed with: Jena
				Griswold Secretary of State 1700 Broadway, Suite 270 Denver, Colorado
				80290 Phone: 303-894-2200, press 3 Ballot titles are set on the first
				and third Wednesdays of each month. To have a proposal considered for
				title setting, proponents must file their proposal with the Secretary of
				State by 3:00 p.m. on the 12th day before a meeting.
			</p>
			<h3>Last Day for Filing: April 3, 2020</h3>
			<NavLink to={"/proposal/step-five"}>
				<button data-testid="research-button" onClick={handleIncrementClick}>
					Next Step
				</button>
			</NavLink>
		</section>
	);
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
	};
};

export default connect(null, mapDispatchToProps)(StepFour);
