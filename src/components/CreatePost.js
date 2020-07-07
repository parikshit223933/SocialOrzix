import React from "react";

class CreatePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			content: ""
		};
	}
	handleChange = (event) => {
        this.setState({
            content:event.target.value,
        })
    };
	handleOnClick = () => {
        //dispatch an action to create a post.
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
						id="add-post-btn"
						onClick={this.handleOnClick}
					>
						Add Post
					</button>
				</div>
			</div>
		);
	}
}

export default CreatePost;
