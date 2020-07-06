import React from "react";

class UserProfile extends React.Component {
	componentDidMount() {
		const { match } = this.props;
		if (match.params.userId) {
			//dispatch an action to fetch that particular user
		}
	}

	render() {
		// console.log(this.props.match.params.userId);
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
							USER NAME
						</div>
						<div className="text-center my-2">
							EMAIL OF THE USER
						</div>
					</div>
					<div className="col-sm-8 bg-white mt-3">sdgsd</div>
				</div>
			</div>
		);
	}
}

export default UserProfile;
