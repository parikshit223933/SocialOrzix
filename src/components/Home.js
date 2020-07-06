import React from "react";
import { PostsList } from "./";
class Home extends React.Component {
	render() {
		const { posts } = this.props;
		return (
			<div className="home">
				{posts.length === 0 ? (
					<div className="ml-auto mr-auto">
						<div className="loader"></div>
					</div>
				) : (
					<PostsList posts={posts} />
				)}
			</div>
		);
	}
}

export default Home;
