import React from "react";
import {FriendsList, PostsList, Chat} from "./";

class Home extends React.Component {
	render() {
		const { posts, isLoggedIn } = this.props;
		return (
			<div className="home">
				{posts.length === 0 ? (
					<div className="ml-auto mr-auto">
						<div className="loader"></div>
					</div>
				) : (
					<PostsList posts={posts} />
				)}
                {isLoggedIn && <FriendsList friends={this.props.friends}/>}
                {isLoggedIn&&<Chat/>}
			</div>
		);
	}
}

export default Home;
