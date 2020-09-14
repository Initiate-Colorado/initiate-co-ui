import React, {Component} from "react";
import { connect } from "react-redux";

class StepFive extends Component {
	constructor(props){
		super(props)
		this.state = {
			step: this.props.ProposalStep.initiativeStepReducer,
			error: "",
			ballot: {
				title: "",
				fiscal: ""
			},
		};
	}

  componentDidMount() {
    const savedTitle = localStorage.getItem('title')
    const savedFiscal = localStorage.getItem('fiscal')
    if (savedTitle || savedFiscal ) {
      this.setState({
        ballot: {
          title: savedTitle,
          fiscal: savedFiscal,
        }
      })
    }
  }

	onChange = (event) => {
		let ballot = this.state.ballot;
		ballot[event.target.name] = event.target.value;
		this.setState({
			ballot,
		});
	};

	submitNextStep = (event) => {
    event.preventDefault()
    this.props.handleIncrementClick()
    this.submitProgress(event)
  }

	submitProgress = (event) => {
    event.preventDefault()
		localStorage.setItem('title', this.state.ballot.title)
    localStorage.setItem('fiscal', this.state.ballot.fiscal)
  }

	render(){
	return (

		<section className="step-five">
						<div className="step-title">
			<h1>Step {this.state.step}: Title Setting</h1>
			</div>
			<div className={"step-text"}>
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
				Board. 
				</p>
				<input
							type="text"
							placeholder="Your Ballot Initiative Title"
							required="required"
							name="title"
							value={this.state.ballot.title}
							onChange={this.onChange}
							style={{ marginTop: "1em" }}
						/>
				<button onClick={this.submitProgress}>Save</button>
				<p>
				A brief abstract summarizing each measure’s fiscal impact is also
				prepared, and the measure’s proponents must include this abstract on
				signature-collection petitions. More information about submitting fiscal
				estimates is available here. Proponents and other interested persons may
				submit fiscal estimates about proposed initiatives for consideration by
				Legislative Council Staff. Legislative Council also solicits and
				considers fiscal estimates from state agencies and local governments
				when preparing fiscal impact statements.
			</p>
			<textarea
						type="textarea"
						placeholder="Paste the fiscal impact abstract here"
						required="required"
						name="fiscal"
						value={this.state.ballot.fiscal}
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
			<h3>Last Title Board for 2020: April 15, 2020</h3>
			<div className="buttons">
				<button data-testid="research-button" onClick={this.props.handleDecrementClick}>
					Go Back
				</button>
				<button data-testid="research-button" onClick={this.submitNextStep}>
					Next Step
				</button>
				</div>

		</section>
	)}
};

const mapStateToProps = state => {
  return {
    ProposalStep: state
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
		handleDecrementClick: () => dispatch({ type: "DECREMENT" })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StepFive);
