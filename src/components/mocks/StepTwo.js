import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepTwo = ({ProposalStep, handleIncrementClick}) => {
	return (
    <section className="step-two">
      <h1>Step {ProposalStep}: Review and Comment</h1>
      <p>
      The purpose of a review and comment meeting is twofold:
to review the wording of an initiative with the proponents so that the initiative accomplishes the proponents' intent and
to give the public notice that a proposal on a given topic is under consideration.  The Office of Legislative Legal Services and Legislative Council Staff jointly prepare written comments on each proposal.  The comments typically contain a summary of the proposal followed by a series of questions concerning the wording, intent, and purpose of the proposal.  These comments are provided to the proponents 48 hours before the meeting and are reviewed verbally with the proponents during the meeting.  Both designated representatives are required to attend any review and comment meeting.  The meeting is open to the public and recorded for the public record, but there is no public comment or testimony at the meeting.  The proponents can revise their proposal to incorporate some or all of the legislative staff comments, but they are not required to do so.  If proponents withdraw a measure prior to the meeting, the comments prepared by legislative staff are not released to anyone other than the proponents.
If either designated representative fails to attend a review and comment meeting, the petition is considered withdrawn by the proponents.  If one of the designated representatives fails to attend a review and comment meeting, the proposal is deemed to be automatically resubmitted to the directors of the Legislative Council and Office of Legislative Legal Services for review and comment, unless the designated representative who is present objects to the automatic resubmission.  A review and comment meeting on a resubmitted proposal is scheduled with the designated representatives and the staff of the Legislative Council and the Office of Legislative Legal Services on a date no later than five business days after the resubmission.
      </p>
      <h3>Last Day for Review: April 3, 2020</h3>
      <NavLink to={"/proposal/step-three"}>
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

const mapDispatchToProps = dispatch => {
  return {
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(StepTwo);

