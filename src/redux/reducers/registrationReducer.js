export default function(state = {}, action) {
	switch (action.type) {
		case "CHANGE_REGISTRATION_EMAIL":
			return {...state, login: action.payload};
		case "CHANGE_REGISTRATION_PASSWORD":
			return {...state, password: action.payload};
		default:
			return state;
	}		
}