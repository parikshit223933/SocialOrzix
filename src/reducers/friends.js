import {
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_SUCCCESS,
	FETCH_FRIENDS_FAILURE
} from "../actions/actionTypes";

const defaultProfileState = {
	inProgress: false,
	error: null,
	success: null,
	list: []
};

export default function friends(state = defaultProfileState, action) {
	switch (action.type) {
		case FETCH_FRIENDS_START:
			return {
				...state,
				inProgress: true
			};
		case FETCH_FRIENDS_SUCCCESS:
			return {
				...state,
				inProgress: false,
				error: null,
				success: true,
				list: [...action.friends]
			};
		case FETCH_FRIENDS_FAILURE:
			return {
				...state,
				inProgress: false,
				error: action.error,
				success: false,
				list: []
			};
		default:
			return {
				...state
			};
	}
}
