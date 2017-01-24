export default function(state = {}, action) {
	switch (action.type) {
		case "CHANGE_LOGIN_EMAIL":
			return {...state, email: action.payload};
		case "CHANGE_LOGIN_PASSWORD":
			return {...state, password: action.payload};
		default:
			return state;
	}		
}