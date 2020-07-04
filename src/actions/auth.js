import { LOGIN_START, LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";

export function startLogin() {
	return {
		type: LOGIN_START
	};
}

export function loginFailed(message) {
	return {
		type: LOGIN_FAILURE,
		error: message
	};
}

export function loginSuccess(user) {
	return { type: LOGIN_SUCCESS, user };
}

export function login(email, password) {
	return (dispatch) => {
		dispatch(startLogin());
		const url = API_URLS.login();
		fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: getFormBody({ email, password })
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("data", data);
				if (data.success) {
					//dispatch an action to save the user.
					dispatch(loginSuccess(data.data.user));
					return;
				}
				dispatch(loginFailed(data.message));
			});
	};
}
