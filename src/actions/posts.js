import { UPDATE_POSTS, ADD_POST } from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import { getAuthTokenFromLocalStorage, getFormBody } from "../helpers/utils";
export function fetchPosts() {
	return (dispatch) => {
		const url = API_URLS.fetchPosts(1, 200);
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

export function addPost(post) {
	return {
		type: ADD_POST,
		post
	};
}

export function createPost(content) {
	return (dispatch) => {
		const url = API_URLS.postCreator();
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`
            },
            body:getFormBody({content})
		})
			.then((response) => response.json())
			.then((data) => {
                if(data.success)
                {
                    dispatch(addPost(data.data.post))
                }
            });
	};
}
