import {
	FETCH_FRIENDS_SUCCCESS,
	FETCH_FRIENDS_START,
	FETCH_FRIENDS_FAILURE,
	ADD_FRIEND
} from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";

export function fetchFriendsStart() {
	return {
		type: FETCH_FRIENDS_START
	};
}

export function fetchFriendsSuccess(friends) {
	return {
		type: FETCH_FRIENDS_SUCCCESS,
		friends
	};
}

export function fetchFriendsFailure(error) {
	return {
		type: FETCH_FRIENDS_FAILURE,
		error
	};
}

export function fetchUserFriends() {
	return (dispatch) => {
		dispatch(fetchFriendsStart());
		const url = API_URLS.userFriends();
		fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`
			}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
				if (data.success) {
					dispatch(fetchFriendsSuccess(data.data.friends));
					return;
				}
				dispatch(fetchFriendsFailure(data.message));
			});
	};
}

export function addToFriendsList(user) {
	return {
		type: ADD_FRIEND,
		user
	};
}

export function addFriend(userId) {
	return (dispatch) => {
        const url = API_URLS.addFriend(userId);
        console.log('url', url)
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`
			}
		})
			.then((response) => response.json())
            .then((data)=>
            {
                console.log(data.data)
                dispatch(addToFriendsList(data.data.friendship))
            });
	};
}