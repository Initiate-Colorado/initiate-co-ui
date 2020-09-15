import React from "react";
import { connect } from "react-redux";

const StepSeven = ({
	ballotProcess,
	handleIncrementClick,
	handleDecrementClick,
}) => {
	return (
		<section className="step-seven">
			<div className="step-title">
				<h1>
					Step {ballotProcess.id}: {ballotProcess.title}
				</h1>
			</div>
			<div className={"step-text"}>
				<p>
					If you think there is some funny business going on you can request a
					rehearing by the Title Board. A rehearing may also be requested if a
					proponent or registered elector is dissatisfied with the Title Board's
					decision relating to single subject. Such requests must be made within
					seven days of the single-subject decision or the setting of the title
					and submission clause. A rehearing must be held at the next regularly
					scheduled meeting of the board. If the board is unable to complete
					action on the request for rehearing at that meeting, it may be
					continued until the next available day. The designated representatives
					or any registered elector who is not satisfied with the abstract
					prepared by the Legislative Council Staff may file a motion for a
					rehearing with the Secretary of State within seven days after the
					titles and submission clause for the initiative petition is set on the
					grounds that: an estimate included in the abstract is incorrect; the
					abstract is misleading or prejudicial, or the abstract does not comply
					with statutory requirements.
				</p>
			</div>
			<h3>
				Last Title Board meeting for rehearings for 2020:{" "}
				{ballotProcess.dueDate}
			</h3>

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
		handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepSeven);
