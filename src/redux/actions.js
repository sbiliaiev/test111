//Login actions
export function changeLoginEmail(e) {
	return {type: "CHANGE_LOGIN_EMAIL", payload: e};
}

export function changeLoginPassword(e) {
	return {type: "CHANGE_LOGIN_PASSWORD", payload: e};
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