import React from "react";
import { connect } from "react-redux";
import {FriendsListItem} from './';

class FriendsList extends React.Component {
	render() {
		return (
			<div className="friends-list">
				<div className="header">Friends</div>
				{this.props.friends.list &&
					this.props.friends.list.length === 0 && (
						<div className="no-friends">No Friends Found!</div>
					)}
                
                {this.props.friends.list && this.props.friends.list.map((friend)=>
                {   
                    return <FriendsListItem friend={friend.to_user} key={friend._id}/>
                })}
			</div>
		);
	}
}

function mapStateToProps({ friends }) {
	return {
		friends
	};
}
export default connect(mapStateToProps)(FriendsList);
