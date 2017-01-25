//Registration actions
export function changeRegistrationEmail(e) {
	return {type: "CHANGE_REGISTRATION_EMAIL", payload: e};
}

export function changeRegistrationPassword(e) {
	return {type: "CHANGE_REGISTRATION_PASSWORD", payload: e};
}

export function changeRegistrationFirstname(e) {
	return {type: "CHANGE_REGISTRATION_FIRSTNAME", payload: e};
}

export function changeRegistrationLastname(e) {
	return {type: "CHANGE_REGISTRATION_LASTNAME", payload: e};
}

export function changeRegistrationField(e) {
	switch (e.target.name) {
		case 'email':
			return {type: "CHANGE_REGISTRATION_EMAIL", payload: e.target.value};
		case 'password':
			return {type: "CHANGE_REGISTRATION_PASSWORD", payload: e.target.value};
		case 'firstName':
			return {type: "CHANGE_REGISTRATION_FIRSTNAME", payload: e.target.value};
		case 'lastName':
			return {type: "CHANGE_REGISTRATION_LASTNAME", payload: e.target.value};
		default:
			return {type: "UNHANDLED", payload: e.target.value};
	}
}

export const retrieveRegistrationInfo = (data) => dispatch => {
	fetch('http://localhost:3000/api/auth/register', {
		method: 'POST', 
		body: JSON.stringify(data),
		headers: {'Content-Type': 'application/json; charset=utf-8'},	
	})
	.then((res) => res.json())
	.then((res) => console.log(res));
}