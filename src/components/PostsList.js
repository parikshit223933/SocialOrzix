import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {CreatePost} from "./";
class PostsList extends React.Component {
	render() {
		const { posts } = this.props;
		return (
			<div className="posts-list">
                <CreatePost/>
				{posts.map((post) => (
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
									<span className="post-time">
										A minute ago
									</span>
								</div>
							</div>
							<div className="post-content">{post.content}</div>
							<div className="post-actions">
								{/* post likes */}
								<div className="post-like">
									<img
										src="https://image.flaticon.com/icons/svg/1077/1077035.svg"
										alt="likes-icon"
									/>
									<span>{post.likes.length}</span>
								</div>
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
								<input placeholder="Add a comment..." />
							</div>

							<div className="post-comments-list">
								<div className="post-comment-item">
									<div className="post-comment-header">
										<span className="post-comment-author">
											Bill
										</span>
										<span className="post-comment-time">
											A minute Ago
										</span>
										<span className="post-comment-likes">
											22
										</span>
									</div>
									<div className="post-comment-content">
										Random comment
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}
PostsList.propTypes = {
	posts: PropTypes.array.isRequired
};

export default PostsList;
