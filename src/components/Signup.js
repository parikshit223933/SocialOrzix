import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signup, clearAuthState } from "../actions/auth";

class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			name: "",
			confirm_password: ""
		};
	}
	componentWillUnmount() {
		this.props.dispatch(clearAuthState());
	}
	handleInputChange = (field, value) => {
		this.setState({ [field]: value });
	};

	onFormSubmit = (event) => {
		event.preventDefault();
		const { email, password, confirm_password, name } = this.state;
		this.props.dispatch(signup(name, email, password, confirm_password));
	};

	render() {
		const { inProgress, error, isLoggedIn } = this.props.auth;
		if (isLoggedIn) {
			return <Redirect to="/" />;
		}
		return (
			<form className="col-md-6 offset-md-3 mt-5 pl-5 pr-5 pb-5 pt-4 bg-light">
				<h1 className="text-center">Sign Up</h1>
				{error && <div className="alert error-dailog">{error}</div>}
				<fieldset>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="Name"
							className="form-control"
							placeholder="Enter you name!"
							required
							onChange={(event) =>
								this.handleInputChange(
									"name",
									event.target.value
								)
							}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							className="form-control"
							placeholder="example@abc.com"
							required
							onChange={(event) =>
								this.handleInputChange(
									"email",
									event.target.value
								)
							}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">New Password</label>
						<input
							type="password"
							id="password"
							className="form-control"
							placeholder="Enter your password here!"
							required
							onChange={(event) =>
								this.handleInputChange(
									"password",
									event.target.value
								)
							}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="reenter-password">
							Re-enter your password
						</label>
						<input
							type="password"
							id="reenter-password"
							className="form-control"
							placeholder="Re-Enter your password here!"
							required
							onChange={(event) =>
								this.handleInputChange(
									"confirm_password",
									event.target.value
								)
							}
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary"
						onClick={this.onFormSubmit}
						disabled={inProgress}
					>
						{inProgress ? "Loading..." : "Submit"}
					</button>
				</fieldset>
			</form>
		);
	}
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Signup);
