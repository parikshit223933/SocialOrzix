import React from "react";

class Signup extends React.Component {
	render() {
		return (
			<form className="col-md-6 offset-md-3 mt-5 pl-5 pr-5 pb-5 pt-4 bg-light">
				<h1 className="text-center">Sign Up</h1>
				<fieldset>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input
							type="text"
							id="Name"
							className="form-control"
							placeholder="Enter you name!"
							required
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

export default Signup;
