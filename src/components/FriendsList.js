import React from "react";
import {FriendsListItem} from './';

class FriendsList extends React.Component {
	render() {
		return (
			<div className="friends-list">
				<div className="header">Friends</div>
				{this.props.friends &&
					this.props.friends.length === 0 && (
						<div className="no-friends">No Friends Found!</div>
					)}
                
                {this.props.friends && this.props.friends.map((friend, index)=>
                {   
                    return <FriendsListItem friend={friend.to_user} key={index}/>
                })}
			</div>
		);
	}
}

export default FriendsList;
