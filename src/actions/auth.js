import {
	LOGIN_START,
	LOGIN_FAILURE,
	LOGIN_SUCCESS,
	SIGNUP_START,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	AUTHENTICATE_USER,
	LOG_OUT,
	CLEAR_AUTH_STATE
} from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import { getFormBody } from "../helpers/utils";

//LOGIN ACTIONS

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
					localStorage.setItem("token", data.data.token);
					dispatch(loginSuccess(data.data.user));
					return;
				}
				dispatch(loginFailed(data.message));
			});
	};
}

//SIGN UP ACTIONS

export function startSignup() {
	return {
		type: SIGNUP_START
	};
}

export function signUpSuccessful(user) {
	return {
		type: SIGNUP_SUCCESS,
		user
	};
}
export function signUpFailed(error) {
	return {
		type: SIGNUP_FAILURE,
		error: error
	};
}
export function signup(name, email, password, confirm_password) {
	return (dispatch) => {
		dispatch(startSignup());
		const url = API_URLS.signUp();
		fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: getFormBody({ email, password, confirm_password, name })
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					localStorage.setItem("token", data.data.token);
					dispatch(signUpSuccessful(data.data.user));
					return;
				}
				dispatch(signUpFailed(data.message));
			});
	};
}

export function authenticateUser(user) {
	return {
		type: AUTHENTICATE_USER,
		user
	};
}

export function logOut() {
	return {
		type: LOG_OUT
	};
}

export function clearAuthState() {
	return {
		type: CLEAR_AUTH_STATE
	};
}
