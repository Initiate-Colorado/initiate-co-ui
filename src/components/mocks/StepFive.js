import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const StepFive = ({ProposalStep, handleIncrementClick }) => {
	return (
		<section className="step-five">
			<h1>Step {ProposalStep}: Title Setting</h1>
			<p>
				The ballot title and submission clause are set by a "Title Board,"
				consisting of the Secretary of State, the Attorney General, and the
				director of the Office of Legislative Legal Services or their designees.
				The Title Board meets on the first and third Wednesdays of each month.
				Meetings of the Title Board are public, and action of the board requires
				a majority vote. Ballot titles must be brief, unambiguous, and in the
				form of a question that is answered "yes" to vote in favor of the
				proposed change and "no" to vote against the proposed change. Further, a
				ballot title for a proposal cannot conflict with any other title set for
				the same election. The Title Board is prohibited from setting a title if
				a proposal contains more than one subject, and the board is required to
				follow case law and the rules used by the General Assembly when making a
				determination whether a proposal contains a single subject. A title for
				a proposal must be set within two weeks after the first meeting of the
				Title Board. Legislative Council Staff prepares an initial fiscal impact
				statement for each statewide initiated measure considered by the Title
				Board. A brief abstract summarizing each measure’s fiscal impact is also
				prepared, and the measure’s proponents must include this abstract on
				signature-collection petitions. More information abuot submitting fiscal
				estimates is available here. Proponents and other interested persons may
				submit fiscal estimates about proposed initiatives for consideration by
				Legislative Council Staff. Legislative Council also solicits and
				considers fiscal estimates from state agencies and local governments
				when preparing fiscal impact statements.
			</p>
			<h3>Last Title Board for 2020: April 15, 2020</h3>
			<NavLink to={"/proposal/step-six"}>
				<button data-testid="research-button" onClick={handleIncrementClick}>
					Next Step
				</button>
			</NavLink>
		</section>
	);
};

const mapStateToProps = state => {
  return {
    ProposalStep: state
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepFive);
