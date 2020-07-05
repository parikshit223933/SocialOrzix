import {
	LOGIN_FAILURE,
	LOGIN_START,
	LOGIN_SUCCESS,
	SIGNUP_START,
	SIGNUP_SUCCESS,
	SIGNUP_FAILURE,
	AUTHENTICATE_USER,
	LOG_OUT
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

		default:
			return state;
	}
}
