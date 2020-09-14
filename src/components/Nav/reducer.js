let LoggedIn
let LoggedInToken = localStorage.getItem('loggedIn')
if(LoggedInToken) {
	LoggedIn = LoggedInToken
} else {
	LoggedIn = false
}

const loggedInReducer = function (state = LoggedIn, action) {
	switch (action.type) {
		case "LOGIN":
			localStorage.setItem('loggedIn', state)
			return state;
		case "LOGOUT":
			return state = false;
		case "CHECK":
			return state = LoggedIn;
		default:
			return state;
	}
}

export default loggedInReducer