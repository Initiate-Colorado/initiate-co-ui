const savedStep = localStorage.getItem('savedUserStep')

const initiativeStepReducer = function (state = 0, action) {
	switch (action.type) {
		case "INCREMENT":
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