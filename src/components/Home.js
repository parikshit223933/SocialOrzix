import React from "react";
import { PostsList } from "./";
class Home extends React.Component {
	render() {
		const { posts } = this.props;
		console.log(this.props);
		return (
			<div className="home">
				<PostsList posts={posts} />
			</div>
		);
	}
}

export default Home;
