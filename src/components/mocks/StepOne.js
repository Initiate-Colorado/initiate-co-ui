import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const StepOne = ({ProposalStep, handleIncrementClick}) => {

	return (
    <section className="step-one">
      <h1>Step {ProposalStep}: Submission of a Proposal</h1>
      <p>
        Any person who intends to collect signatures to place a constitutional
        amendment or law on a statewide election ballot must submit the
        typewritten text of the proposed measure to the Legislative Council
        Staff for the scheduling of a review and comment meeting. The proposal
        should be written in plain, non-technical language, using words with
        common and everyday meaning understandable to the average reader.
        Proposals can be submitted either in person, by mail, by FAX, or by
        e-mail to: Natalie Mullis, Director Colorado Legislative Council Staff
        Room 029 State Capitol Building Denver, Colorado 80203 Phone:
        303-866-3521 Fax: 303-866-3855 E-mail: lcs.ga@state.co.us A proposal
        must be accompanied by the names and addresses of two people who are
        representing the proponents in all matters relating to the proposal.
        Telephone numbers and e-mail addresses are also appreciated to speed
        communications with the designated representatives of proponents. The
        Legislative Council Staff gives the proposal a number and schedules a
        public meeting, which will be two weeks from the date the measure is
        filed. The Legislative Council Staff also provides public notice of the
        date, time, and place for the meeting and the language of the proposal.
        A proponent can withdraw a proposal at any time.
      </p>
      <h3>Submission Deadline: March 20, 2020</h3>
				<button data-testid="research-button" onClick={handleIncrementClick}>
					Next Step
				</button>
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


export default connect(mapStateToProps, mapDispatchToProps)(StepOne);

