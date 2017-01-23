//Login actions
export function changeLoginEmail(e) {
	return {type: "CHANGE_LOGIN_EMAIL", payload: e};
}

export function changeLoginPassword(e) {
	return {type: "CHANGE_LOGIN_PASSWORD", payload: e};
}


//Registration reducer