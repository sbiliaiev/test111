export default function(state = {}, action) {
	switch (action.type) {
		case "CHANGE_LOGIN_EMAIL":
			return {...state, email: action.payload};
		case "CHANGE_LOGIN_PASSWORD":
			return {...state, password: action.payload};
		case "RETRIEVED_LOGIN_USER_INFO":
			return {...state, user: action.payload}
		default:
			return state;
	}		
}