import React from "react";
import { connect } from "react-redux";
import { fetchUserProfile } from "../actions/profile";
import { addFriend } from "../actions/friends";

class UserProfile extends React.Component {
	componentDidMount() {
		const { match } = this.props;
		if (match.params.userId) {
			//dispatch an action to fetch that particular user
			this.props.dispatch(fetchUserProfile(match.params.userId));
        }
        console.log('asasssssssssssssssssssss', this.props)
	}
    handleAddFriend=()=>
    {
        this.props.dispatch(addFriend(this.props.match.params.userId))
    }
	render() {
		const { profile } = this.props;
		const user = profile.user;
		// console.log(this.props.match.params.userId);
		if (profile.inProgress) {
			return <div className="loader ml-auto mr-auto mt-5"></div>;
		}
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
							<button type="button" onClick={this.handleAddFriend} className="btn btn-success">
								Add Friend
							</button>
						</div>
					</div>
					<div className="col-sm-8 bg-white mt-3">sdgsd</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps({ profile }) {
	return {
		profile
	};
}

export default connect(mapStateToProps)(UserProfile);
