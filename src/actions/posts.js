import {
	UPDATE_POSTS,
	ADD_POST,
	ADD_COMMENT,
	LIKE_POST,
} from "./actionTypes";
import { API_URLS } from "../helpers/urls";
import { getAuthTokenFromLocalStorage, getFormBody } from "../helpers/utils";
export function fetchPosts() {
	return (dispatch) => {
		const url = API_URLS.fetchPosts(1, 20);
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
			body: getFormBody({ content })
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					dispatch(addPost(data.data.post));
				}
			});
	};
}

/* creating a comment */

export function addComment(comment, postId) {
	return {
		type: ADD_COMMENT,
		comment,
		postId
	};
}

export function createComment(content, postId) {
	return (dispatch) => {
		const url = API_URLS.commentCreator();
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`
			},
			body: getFormBody({ content, post_id: postId })
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					dispatch(addComment(data.data.comment, postId));
				}
			});
	};
}

export function likePost(likeableId, userId) {
	return {
		type: LIKE_POST,
		likeableId,
		userId
	};
}

export function toggleLike(likeableId, likeableType, userId) {
	return (dispatch) => {
		const url = API_URLS.likeToggler(likeableId, likeableType);
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
				Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`
			}
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					if (likeableType === "Post")
						dispatch(likePost(likeableId, userId));
				}
			});
	};
}
