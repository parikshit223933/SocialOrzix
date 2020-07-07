import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as jwtDecode from "jwt-decode";

import { fetchPosts } from "../actions/posts";
import {
	Home,
	Navbar,
	Page404,
	Login,
	Signup,
	Settings,
	UserProfile
} from "./";
import { authenticateUser } from "../actions/auth";
import { Redirect } from "react-router-dom";
import { getAuthTokenFromLocalStorage } from "../helpers/utils";
import { fetchUserFriends } from "../actions/friends";

/* const Login = () => <div>Login</div>; */

const PrivateRoute = (privateRouteProps) => {
	const { isLoggedIn, path, component: Component } = privateRouteProps; //Note: syntax to rename "component" to Component.
	return (
		<Route
			path={path}
			render={(props) => {
				return isLoggedIn ? (
					<Component
						{...props}
					/> /* here the props are, location, match, history */
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location }
						}}
					/>
				);
			}}
		/>
	);
};

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPosts());
		const token = getAuthTokenFromLocalStorage();
		if (token) {
			const user = jwtDecode(token);
			this.props.dispatch(
				authenticateUser({
					email: user.email,
					name: user.name,
					_id: user._id
				})
			);
			this.props.dispatch(fetchUserFriends());
		}
	}
	render() {
		const { posts, auth, friends } = this.props;
		return (
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route
							exact
							path="/"
							render={(props) => {
								return (
									<Home
										{...props}
										posts={posts}
										friends={friends.list}
										isLoggedIn={auth.isLoggedIn}
									/>
								); /* {history:history, location:location, match:match} */
							}}
						/>
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<PrivateRoute
							path="/settings"
							component={Settings}
							isLoggedIn={auth.isLoggedIn}
						/>
						<PrivateRoute
							path="/user/:userId"
							component={UserProfile}
							isLoggedIn={auth.isLoggedIn}
						/>
						<Route component={Page404} />
					</Switch>
				</div>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts,
		auth: state.auth,
		friends: state.friends
	};
}

App.propTypes = {
	posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(App);
