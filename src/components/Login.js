import React from "react";
import { login, clearAuthState } from "../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Login extends React.Component {
	constructor(props) {
		super(props);
		// this.emailInputRef = React.createRef();
		// this.passwordInputRef = React.createRef();
		this.state = {
			email: "",
			password: ""
		};
	}
	componentWillUnmount() {
		this.props.dispatch(clearAuthState());
	}
	handleFormSubmit = (event) => {
		event.preventDefault();
		// console.log(this.emailInputRef, this.passwordInputRef);
		const { email, password } = this.state;
		if (email && password) {
			this.props.dispatch(login(email, password));
		}
	};

	handleEmailChange = (event) => {
		this.setState({
			email: event.target.value
		});
	};

	handlePasswordChange = (event) => {
		this.setState({
			password: event.target.value
		});
	};

	render() {
		const { error, inProgress, isLoggedIn } = this.props.auth;

		const { from } = this.props.location.state || {
			from: "/" //we can also write it like this from: { pathname: "/" }. I mean to say that from can also be an object here with the key pathname.
		};

		if (isLoggedIn) {
			return <Redirect to={from} />;
		}
		return (
			<form className="col-md-6 offset-md-3 mt-5 pl-5 pr-5 pb-5 pt-4 bg-light">
				<h1 className="text-center">Login</h1>
				{error && <div className="alert error-dailog">{error}</div>}
				<fieldset>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							className="form-control"
							placeholder="example@abc.com"
							required
							onChange={this.handleEmailChange}
							value={this.state.email}
							// ref={this.emailInputRef}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							className="form-control"
							placeholder="Enter your password here!"
							required
							onChange={this.handlePasswordChange}
							value={this.state.password}
							// ref={this.passwordInputRef}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary"
						onClick={this.handleFormSubmit}
						disabled={inProgress}
					>
						{inProgress ? "Logging In..." : "Submit"}
					</button>
				</fieldset>
			</form>
		);
	}
}

function mapStateToProps(state) {
	return { auth: state.auth };
}

export default connect(mapStateToProps)(Login);
