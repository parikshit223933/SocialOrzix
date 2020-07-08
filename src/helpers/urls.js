const API_ROOT = "http://codeial.com:8000/api/v2";

export const API_URLS = {
	login: () => `${API_ROOT}/users/login`,
	signUp: () => `${API_ROOT}/users/signup`,
	editProfile: () => `${API_ROOT}/users/edit`,
	fetchPosts: (page, limit) =>
		`${API_ROOT}/posts?page=${page}&limit=${limit}`,
	userProfile: (userId) => `${API_ROOT}/users/${userId}`,
	userFriends: () => `${API_ROOT}/friendship/fetch_user_friends`,
	addFriend: (userId) =>
		`${API_ROOT}/friendship/create_friendship?user_id=${userId}`,
	removeFriendship: (userId) =>
		`${API_ROOT}/friendship/remove_friendship?user_id=${userId}`,
	postCreator: () => `${API_ROOT}/posts/create`,
	commentCreator: () => `${API_ROOT}/comments`,
	likeToggler: (likeableId, likeableType) =>
        `${API_ROOT}/likes/toggle?likeable_id=${likeableId}&likeable_type=${likeableType}`,
    userSearch:(searchText)=>`${API_ROOT}/users/search?text=${searchText}`
};
