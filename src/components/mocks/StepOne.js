import React, { Component } from "react";
import { connect } from "react-redux";

class StepOne extends Component {
	constructor({ ProposalStep, handleIncrementClick }) {
		super({ ProposalStep, handleIncrementClick });

		this.state = {
			error: "",
			ballot: {
				description: "",
				name1: "",
				phone1: "",
				email1: "",
				name2: "",
				phone2: "",
				email2: "",
			},
		};
  }

  componentDidMount() {
    const savedDescription = localStorage.getItem('description')
    const savedName1 = localStorage.getItem('name1')
    const savedPhone1 = localStorage.getItem('phone1')
    const savedEmail1 = localStorage.getItem('email1')
    const savedName2 = localStorage.getItem('name2')
    const savedPhone2 = localStorage.getItem('phone2')
    const savedEmail2 = localStorage.getItem('email2')
    if (savedDescription || savedName1 || savedPhone1 || savedEmail1 || savedName2 || savedPhone2 || savedEmail2) {
      this.setState({
        ballot: {
          description: savedDescription,
          name1: savedName1,
          phone1: savedPhone1,
          email1: savedEmail1,
          name2: savedName2,
          phone2: savedPhone2,
          email2: savedEmail2,
        }
      })
    }
  }

  submitNextStep = (event) => {
    event.preventDefault()
    this.props.handleIncrementClick()
    this.submitProgress(event)
  }
  
  submitProgress = (event) => {
    event.preventDefault()
    localStorage.setItem('description', this.state.ballot.description)
    localStorage.setItem('name1', this.state.ballot.name1)
    localStorage.setItem('phone1', this.state.ballot.phone1)
    localStorage.setItem('email1', this.state.ballot.email1)
    localStorage.setItem('name2', this.state.ballot.name2)
    localStorage.setItem('phone2', this.state.ballot.phone2)
    localStorage.setItem('email2', this.state.ballot.email2)
  }

	onChange = (event) => {
		let ballot = this.state.ballot;
		ballot[event.target.name] = event.target.value;

		this.setState({
			ballot,
		});
	};

	render() {
		return (
			<section className="step-one">
				<h1>Step {this.props.ProposalStep}: Submission of a Proposal</h1>
				<p>
					Any person who intends to collect signatures to place a constitutional
					amendment or law on a statewide election ballot must submit the
					typewritten text of the proposed measure to the Legislative Council
					Staff for the scheduling of a review and comment meeting. The proposal
					should be written in plain, non-technical language, using words with
					common and everyday meaning understandable to the average reader.
				</p>
				<div className="plaintext">
					<textarea
						type="textarea"
						placeholder="Enter the plain text of your proposal here"
						required="required"
						name="description"
						value={this.state.ballot.description}
						onChange={this.onChange}
						style={{
							marginTop: "1em",
							width: "50vw",
							height: "20vh",
							fontFamily: "Roboto, sans-serif",
						}}
					/>
          <button onClick={this.submitProgress}>Save</button>
				</div>
				<p>
					Proposals can be submitted either in person, by mail, by FAX, or by
					e-mail to:
					<div className="address">
						Natalie Mullis, Director Colorado Legislative Council Staff Room 029
						State Capitol Building Denver, Colorado 80203 Phone: 303-866-3521
						Fax: 303-866-3855 E-mail: lcs.ga@state.co.us
					</div>
					A proposal must be accompanied by the names and addresses of two
					people who are representing the proponents in all matters relating to
					the proposal. Telephone numbers and e-mail addresses are also
					appreciated to speed communications with the designated
					representatives of proponents.
					<div className="signee-names">
						<input
							type="text"
							placeholder="Person One Name"
							required="required"
							name="name1"
							value={this.state.ballot.name1}
							onChange={this.onChange}
							style={{ marginTop: "1em" }}
						/>
						<input
							placeholder="Person One Phone"
							required="required"
							name="phone1"
							value={this.state.ballot.phone1}
							onChange={this.onChange}
							style={{ marginTop: "1em" }}
						/>
						<input
							placeholder="Person One Email"
							required="required"
							name="email1"
							value={this.state.ballot.email1}
							onChange={this.onChange}
							style={{ marginTop: "1em" }}
						/>
						<input
							placeholder="Person Two Name"
							required="required"
							name="name2"
							value={this.state.ballot.name2}
							onChange={this.onChange}
							style={{ marginTop: "1em" }}
						/>
						<input
							placeholder="Person Two Phone"
							required="required"
							name="phone2"
							value={this.state.ballot.phone2}
							onChange={this.onChange}
							style={{ marginTop: "1em" }}
						/>
						<input
							placeholder="Person Two Email"
							required="required"
							name="email2"
							value={this.state.ballot.email2}
							onChange={this.onChange}
							style={{ marginTop: "1em" }}
						/>
					</div>
					The Legislative Council Staff gives the proposal a number and
					schedules a public meeting, which will be two weeks from the date the
					measure is filed. The Legislative Council Staff also provides public
					notice of the date, time, and place for the meeting and the language
					of the proposal. A proponent can withdraw a proposal at any time.
				</p>
				<h3>Submission Deadline: March 20, 2020</h3>
				<button
					data-testid="research-button"
					onClick={this.submitNextStep}
				>
					Next Step
				</button>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		ProposalStep: state,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepOne);
