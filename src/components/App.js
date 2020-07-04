import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { fetchPosts } from "../actions/posts";
import { Home, Navbar, Page404, Login, Signup } from "./";

/* const Login = () => <div>Login</div>; */

class App extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchPosts());
	}

	render() {
		const { posts } = this.props;
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
									<Home {...props} posts={posts} />
								); /* {history:history, location:location, match:match} */
							}}
						/>
						<Route path="/signup" component={Signup} />
						<Route path="/login" component={Login} />
						<Route component={Page404} />
					</Switch>
				</div>
			</Router>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	};
}

App.propTypes = {
	posts: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(App);
