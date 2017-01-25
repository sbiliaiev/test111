export default function(state = {}, action) {
	switch (action.type) {
		case "RETRIEVED_ALL_USERS_INFO":
			return {...state, userList: action.payload};
		default:
			return state;
	}
}