import React from "react";
import { createPost } from "../actions/posts";
import { connect } from "react-redux";

class CreatePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
	}
	handleChange = (event) => {
		this.setState({
			content: event.target.value
		});
	};
	handleOnClick = () => {
		//dispatch an action to create a post.
		if (document.getElementsByClassName("add-post")[0].value === "") {
			window.alert("Please write some text in your post!");
			return;
		}
		this.props.dispatch(createPost(this.state.content));
		document.getElementsByClassName("add-post")[0].value = "";
	};
	render() {
		return (
			<div className="create-post">
				<textarea
					className="add-post"
					value={this.state.content}
					onChange={this.handleChange}
					placeholder="What's on your mind?"
				/>
				<div>
					<button
						type="button"
						className="btn btn-success"
						/* id="add-post-btn" */
						onClick={this.handleOnClick}
					>
						Add Post
					</button>
				</div>
			</div>
		);
	}
}

export default connect()(CreatePost); // it is totally up to me not to pass any function to the connect function, if we just want the dispatch function in our component.
