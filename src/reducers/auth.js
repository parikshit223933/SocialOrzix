import {
	LOGIN_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	SIGNUP_START,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	AUTHENTICATE_USER,
	LOG_OUT,
	CLEAR_AUTH_STATE,
	EDIT_USER_SUCCESSFUL,
	EDIT_USER_FAILED,
	EDIT_USER_IN_PROGRESS
} from "../actions/actionTypes";

const initialAuthState = {
	user: {},
	error: null,
	isLoggedIn: false,
	inProgress: false
};
export default function auth(state = initialAuthState, action) {
	switch (action.type) {
		case LOGIN_START:
			return {
				...state,
				inProgress: true
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.user,
				isLoggedIn: true,
				error: null,
				inProgress: false
			};
		case LOGIN_FAILURE:
			return {
				...state,
				inProgress: false,
				error: action.error
			};
		case SIGNUP_START:
			return {
				...state,
				inProgress: true
			};
		case SIGNUP_SUCCESS:
			return {
				...state,
				user: action.user,
				inProgress: false,
				isLoggedIn: true,
				error: null
			};
		case SIGNUP_FAILURE:
			return {
				inProgress: false,
				error: action.error
			};
		case AUTHENTICATE_USER:
			return {
				...state,
				isLoggedIn: true,
				user: action.user
			};
		case LOG_OUT:
			return {
				...state,
				user: {},
				isLoggedIn: false
			};
		case CLEAR_AUTH_STATE:
			return {
				...state,
				error: null
			};
		case EDIT_USER_IN_PROGRESS:
			return {
				...state,
				inProgress: true
			};
		case EDIT_USER_SUCCESSFUL:
			return {
				...state,
				user: action.user,
				error: false,
				inProgress: false
			};
		case EDIT_USER_FAILED:
			return {
				...state,
				error: action.error,
				inProgress: false
			};
		default:
			return state;
	}
}
