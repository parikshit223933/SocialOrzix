import {
	FETCH_SEARCH_RESULTS_START,
	FETCH_SEARCH_RESULTS_FAILURE,
	FETCH_SEARCH_RESULTS_SUCCESS
} from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

export function searchResultsStart() {
	return {
		type: FETCH_SEARCH_RESULTS_START
	};
}
export function searchResultsSuccess(users) {
	return {
		type: FETCH_SEARCH_RESULTS_SUCCESS,
		users
	};
}
export function searchResultsFailure(error) {
	return {
		type: FETCH_SEARCH_RESULTS_FAILURE,
		error
	};
}
export function searchResults(searchText) {
	return (dispatch) => {
		dispatch(searchResultsStart());
		const url = API_URLS.userSearch(searchText);
		fetch(url, {
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`
			}
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					dispatch(searchResultsSuccess(data.data.users));
				} else {
					dispatch(searchResultsFailure(data.message));
				}
			});
	};
}
