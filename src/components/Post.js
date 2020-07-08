import React from "react";
import { Link } from "react-router-dom";
import { Comment } from ".";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createComment, toggleLike } from "../actions/posts";

class Post extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: ""
		};
	}

	handleAddComment = (event) => {
		const { comment } = this.state;
		const { post } = this.props;
		if (event.key === "Enter") {
			this.props.dispatch(createComment(comment, post._id));
			this.setState({
				comment: ""
			});
		}
	};

	handleOnCommentChange = (event) => {
		this.setState({
			comment: event.target.value
		});
	};

	handlePostLike = () => {
		this.props.dispatch(
			toggleLike(this.props.post._id, "Post", this.props.user._id)
		);
	};

	render() {
		const { post, user } = this.props;
		const { comment } = this.state;
		const isPostLikedByUser = post.likes.includes(user._id);
		return (
			<div className="post-wrapper" key={post._id}>
				<div className="post-header">
					<div className="post-avatar">
						<Link to={`/user/${post.user._id}`}>
							<img
								src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
								alt="user-pic"
							/>
						</Link>
						<div>
							<span className="post-author">
								{post.user.name}
							</span>
							<span className="post-time">A minute ago</span>
						</div>
					</div>
					<div className="post-content">{post.content}</div>
					<div className="post-actions">
						{/* post likes */}
						<button
							className="post-like no-btn"
							onClick={this.handlePostLike}
						>
							{isPostLikedByUser ? (
								<img
									src="https://image.flaticon.com/icons/svg/1076/1076984.svg"
									alt="likes-icon"
								/>
							) : (
								<img
									src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
									alt="likes-icon"
								/>
							)}

							<span>{post.likes.length}</span>
						</button>
						{/* post comments */}
						<div className="post-comments-icon">
							<img
								src="https://image.flaticon.com/icons/svg/1380/1380338.svg"
								alt="comments-icon"
							/>
							<span>{post.comments.length}</span>
						</div>
					</div>

					<div className="post-comment-box">
						<input
							placeholder="Add a comment..."
							onChange={this.handleOnCommentChange}
							onKeyPress={this.handleAddComment}
							value={comment}
						/>
					</div>

					<div className="post-comments-list">
						{post.comments.map((comment) => (
							<Comment
								comment={comment}
								key={comment._id}
								postId={post._id}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

Post.propTypes = {
	posts: PropTypes.object
};

function mapStateToProps({ auth }) {
	return {
		user: auth.user
	};
}

export default connect(mapStateToProps)(Post);
