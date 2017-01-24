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