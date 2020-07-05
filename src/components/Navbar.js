import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import website_logo from "../website logo.png";
import { logOut } from "../actions/auth";

class Navbar extends React.Component {
	logOut = () => {
		localStorage.removeItem("token");
		this.props.dispatch(logOut());
	};
	render() {
		const { auth } = this.props;
		return (
			<nav className="nav">
				<div className="left-div">
					<Link to="/">
						<img src={website_logo} alt="logo" />
					</Link>
				</div>
				<div className="search-container">
					<img
						className="search-icon"
						src="https://image.flaticon.com/icons/svg/483/483356.svg"
						alt="search-icon"
					/>
					<input placeholder="search" />
					<div className="search-results">
						<ul>
							<li className="search-results-row">
								<img
									src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
									alt="user-dp"
								/>
								<span>John Doe</span>
							</li>
							<li className="search-results-row">
								<img
									src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
									alt="user-dp"
								/>
								<span>John Doe</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="right-nav">
					{auth.isLoggedIn && (
						<div className="user">
							<Link to="/settings">
								<img
									src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
									alt="user-dp"
									id="user-dp"
								/>
							</Link>
							<span>{auth.user.name}</span>
						</div>
					)}

					<div className="nav-links">
						<ul>
							{!auth.isLoggedIn && (
								<li>
									<Link to="/login">Log In</Link>
								</li>
							)}

							{auth.isLoggedIn && (
								<li onClick={this.logOut}>Log Out</li>
							)}

							{!auth.isLoggedIn && (
								<li>
									<Link to="/signup">SignUp</Link>
								</li>
							)}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(Navbar);
