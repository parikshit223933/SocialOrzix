import React from "react";
import { connect } from "react-redux";
import { fetchUserProfile } from "../actions/profile";
import { addFriend, removeFriend } from "../actions/friends";

class UserProfile extends React.Component {
	componentDidMount() {
		const { match } = this.props;
		if (match.params.userId) {
			//dispatch an action to fetch that particular user
			this.props.dispatch(fetchUserProfile(match.params.userId));
		}
    }
    componentDidUpdate(prevProps, prevState)
    {
        const {match:{params:prevParams}}=prevProps;
        const {match:{params:currentParams}}=this.props;

        if(prevParams&&currentParams&&prevParams.userId!==currentParams.userId)
        {
            this.props.dispatch(fetchUserProfile(currentParams.userId))
        }
    }
	handleAddFriend = () => {
		this.props.dispatch(addFriend(this.props.match.params.userId));
    };
    handleRemoveFriend=()=>
    {
        this.props.dispatch(removeFriend(this.props.match.params.userId));
    }
	checkIfUserIsAFriend = () => {
		const userId = this.props.match.params.userId;
		const {friends} = this.props;
		const index = friends.list
			.map((friend) => friend.to_user._id)
			.indexOf(userId);
		if (index !== -1) {
			return true;
		}
		return false;
	};
	render() {
		const { profile } = this.props;
		const user = profile.user;
		// console.log(this.props.match.params.userId);
		if (profile.inProgress) {
			return <div className="loader ml-auto mr-auto mt-5"></div>;
        }
        
		const isUserAFriend = this.checkIfUserIsAFriend();
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-4 bg-white mt-3 pt-3">
						<div className="user-image-contaner ml-auto mr-auto mb-3">
							<img
								src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
								alt="user-dp"
							/>
						</div>
						<div className="text-center my-3 text-capitalize">
							{user.name}
						</div>
						<div className="text-center my-2">{user.email}</div>
						<div className="text-center my-3">
							{!isUserAFriend ? (
								<button
									type="button"
									onClick={this.handleAddFriend}
									className="btn btn-success"
								>
									Add Friend
								</button>
							) : (
								<button
									type="button"
									onClick={this.handleRemoveFriend}
									className="btn btn-danger"
								>
									Remove Friend
								</button>
							)}
						</div>
					</div>
					<div className="col-sm-8 bg-white mt-3"></div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ profile, friends }) {
	return {
        profile,
        friends
	};
}

export default connect(mapStateToProps)(UserProfile);
