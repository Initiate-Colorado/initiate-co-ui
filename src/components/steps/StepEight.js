import React from "react";
import { connect } from "react-redux";

const StepEight = ({
	ballotProcess,
	handleIncrementClick,
	handleDecrementClick,
}) => {
	return (
		<section className="step-eight">
			<div className="step-title">
				<h1>
					Step {ballotProcess.id}: {ballotProcess.title}
				</h1>
			</div>
			<div className={"step-text"}>
				<p>
					If you are dissatisfied with the Title Board's action at a rehearing
					may file an appeal with the Colorado Supreme Court. The Court is
					required to act on the appeal promptly when an appeal is filed within
					five days of receiving the required documentation from the Secretary
					of State.
				</p>
				<a
					href="https://www.courts.state.co.us/Courts/Supreme_Court/FAQs.cfm"
					style={{
						color: "black",
						marginBottom: "1em",
						textDecoration: "underline",
					}}
				>
					Information about Appeals
				</a>
			</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(StepEight);
