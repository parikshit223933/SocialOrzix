import React from "react";

class Login extends React.Component {
	render() {
		return (
			<form className="col-sm-6 offset-sm-3 mt-5 pl-5 pr-5 pb-5 pt-4 bg-light">
				<h1 className="text-center">Login</h1>
				<fieldset>
					<div className="form-group">
						<label for="email">Email</label>
						<input
							type="text"
							id="email"
							className="form-control"
							placeholder="example@abc.com"
						/>
					</div>
					<div className="form-group">
						<label for="password">Password</label>
						<input
							type="password"
							id="password"
							className="form-control"
							placeholder="Enter your password here!"
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</fieldset>
			</form>
		);
	}
}

export default Login;
