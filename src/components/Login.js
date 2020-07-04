import React from "react";

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
	handleFormSubmit = (event) => {
		event.preventDefault();
		// console.log(this.emailInputRef, this.passwordInputRef);
		console.log(this.state.email, this.state.password);
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
		return (
			<form className="col-md-6 offset-md-3 mt-5 pl-5 pr-5 pb-5 pt-4 bg-light">
				<h1 className="text-center">Login</h1>
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
					>
						Submit
					</button>
				</fieldset>
			</form>
		);
	}
}

export default Login;
