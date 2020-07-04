import React from "react";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.emailInputRef = React.createRef();
		this.passwordInputRef = React.createRef();
	}
	handleFormSubmit = (event) => {
		event.preventDefault();
		console.log(this.emailInputRef, this.passwordInputRef);
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
							ref={this.emailInputRef}
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
							ref={this.passwordInputRef}
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
