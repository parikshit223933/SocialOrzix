import React from "react";
import PropTypes from "prop-types";
import {CreatePost, Post} from "./";
class PostsList extends React.Component {
	render() {
		const { posts } = this.props;
		return (
			<div className="posts-list">
                <CreatePost/>
				{posts.map((post) => (
					<Post post={post} key={post._id} />
				))}
			</div>
		);
	}
}
PostsList.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostsList;
