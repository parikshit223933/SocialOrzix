import { LOGIN_START } from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";

export function startLogin() {
	return {
		type: LOGIN_START
	};
}

export function login(email, password) {
	return (dispatch) => {
		const url = API_URLS.login();
		fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: getFormBody({ email, password })
		});
	};
}
