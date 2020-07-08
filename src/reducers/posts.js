import { UPDATE_POSTS, ADD_POST, ADD_COMMENT, LIKE_POST } from "../actions/actionTypes";

export default function (state = [], action) {
	switch (action.type) {
		case UPDATE_POSTS:
			return action.posts;
		case ADD_POST:
            return [action.post, ...state];
        case ADD_COMMENT:
            const newPosts=state.map((post)=>
            {//here we are modifying the existing posts. i.e. in a particular post object, we have added a list of comments.
                if(post._id===action.postId)
                {
                    return{
                        ...post,
                        comments:[action.comment, ...post.comments]
                    }
                }
                return post;
            });
            return newPosts;
        case LIKE_POST:
            const newPostsLikeable=state.map((post)=>
            {
                if(post._id===action.likeableId)
                {
                    return{
                        ...post,
                        likes:[...post.likes, action.userId]
                    }
                }
                return post;
            });
            return newPostsLikeable;
		default:
			return state;
	}
}