import { UPDATE_POSTS } from "./actionTypes";
import { API_URLS } from "../helpers/urls";
export function fetchPosts() {
	return (dispatch) => {
		const url = API_URLS.fetchPosts(1, 5);
		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				dispatch(updatePosts(data.data.posts));
			});
	};
}

export function updatePosts(posts) {
	return {
		type: UPDATE_POSTS,
		posts
	};
}
