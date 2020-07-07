import {
	USER_PROFILE_SUCCESS,
	USER_PROFILE_FAILURE,
	FETCH_USER_PROFILE_START
} from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

export function userProfileStart() {
	return {
		type: FETCH_USER_PROFILE_START
	};
}

export function userProfileSuccess(user) {
	return {
		type: USER_PROFILE_SUCCESS,
		user
	};
}

export function userProfileFailure(error) {
	return {
		type: USER_PROFILE_FAILURE,
		error
	};
}

export function fetchUserProfile(userId) {
	return (dispatch) => {
		dispatch(userProfileStart());
		const url = API_URLS.userProfile(userId);
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`
			}
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.success)
            {
                dispatch(userProfileSuccess(data.data.user));
                return;
            }
            dispatch(userProfileFailure(data.message));
        })
	};
}
