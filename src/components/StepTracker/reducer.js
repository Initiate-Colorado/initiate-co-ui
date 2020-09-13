let savedStep
let userStep = localStorage.getItem('savedUserStep')
if(userStep) {
	savedStep = parseInt(userStep)
} else {
	savedStep = 0
}

const initiativeStepReducer = function (state = savedStep, action) {
	switch (action.type) {
		case "INCREMENT":
			localStorage.setItem('savedUserStep', state + 1)
			return state + 1;
		case "DECREMENT":
			return state - 1;
		case "RESET":
			return state = 0;
		case "FORCE":
			return state = savedStep;
		default:
			return state;
	}
}

export default initiativeStepReducer