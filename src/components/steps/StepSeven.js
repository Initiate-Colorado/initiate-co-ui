import React from "react";
import { connect } from "react-redux";

const StepSeven = ({ ProposalStep, handleIncrementClick, handleDecrementClick }) => {
	const step = ProposalStep.initiativeStepReducer

	return (
		<section className="step-seven">
			<div className="step-title">
			<h1>Step {step}: Rehearings of Title Board Decisions</h1>
			</div>
			<div className={"step-text"}>
			<p>
				Any proponent or registered elector who believes that a ballot title and
				submission clause are unfair or do not fairly express the meaning of a
				proposal may request a rehearing by the Title Board. A rehearing may
				also be requested if a proponent or registered elector is dissatisfied
				with the Title Board's decision relating to single subject. Such
				requests must be made within seven days of the single-subject decision
				or the setting of the title and submission clause. A rehearing must be
				held at the next regularly scheduled meeting of the board. If the board
				is unable to complete action on the request for rehearing at that
				meeting, it may be continued until the next available day. If the title
				and submission clause protested were set on the last meeting date in
				April, the rehearing must be conducted within 48 hours after the
				expiration of the seven-day period for requesting a rehearing. The
				designated representatives or any registered elector who is not
				satisfied with the abstract prepared by the Legislative Council Staff
				may file a motion for a rehearing with the Secretary of State within
				seven days after the titles and submission clause for the initiative
				petition are set on the grounds that: an estimate included in the
				abstract is incorrect; the abstract is misleading or prejudicial; or the
				abstract does not comply with statutory requirements.
			</p>
			</div>
			<h3>Last Title Board meeting for rehearings for 2020: April 24, 2020</h3>

			<div className="buttons">
				<button data-testid="research-button" onClick={handleDecrementClick}>
					Go Back
				</button>
				<button data-testid="research-button" onClick={handleIncrementClick}>
					Next Step
				</button>
			</div>

		</section>
	);
};

const mapStateToProps = (state) => {
	return {
		ProposalStep: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
		handleDecrementClick: () => dispatch({ type: "DECREMENT" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSeven);
