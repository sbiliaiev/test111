//Login actions
export function changeLoginEmail(e) {
	return {type: "CHANGE_LOGIN_EMAIL", payload: e};
}

export function changeLoginPassword(e) {
	return {type: "CHANGE_LOGIN_PASSWORD", payload: e};
}

export function changeLoginField(e) {
	switch (e.target.type) {
		case 'email':
			return {type: "CHANGE_LOGIN_EMAIL", payload: e.target.value};
		case 'password':
			return {type: "CHANGE_LOGIN_PASSWORD", payload: e.target.value};
		default:
			return {type: "UNHANDLED", payload: e.target.value};
	}
}

export const retrieveLoginInfo = (data) => dispatch => {
	fetch('http://localhost:3000/api/auth/login', {
		method: 'POST', 
		body: JSON.stringify(data),
		headers: {'Content-Type': 'application/json; charset=utf-8'},
	})
	.then((res) => res.json())
	.then((res) => {
		console.log(res);
		dispatch({type: 'RETRIEVED_USER_INFO', payload: res});
	});
}