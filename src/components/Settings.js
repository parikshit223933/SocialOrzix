import React from "react";
import { connect } from "react-redux";
import { editUser, clearAuthState } from "../actions/auth";
class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.auth.user.name,
			password: "",
			confirm_password: ""
		};
	}
	handleChange = (fieldName, value) => {
		this.setState({
			[fieldName]: value
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		const { name, password, confirm_password } = this.state;
		const { user } = this.props.auth;
		if (password !== confirm_password) {
			window.alert(
				'Please use same password in "Password" and "Confirm Password" field!'
			);
			return;
		}
		this.props.dispatch(
			editUser(name, password, confirm_password, user._id)
		);
	};
	componentWillUnmount() {
		this.props.dispatch(clearAuthState());
	}
	render() {
		const { user, error, inProgress } = this.props.auth;
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
							{user.name}
						</div>
						<div className="text-center my-2">{user.email}</div>
						{/* button to trigger modal */}
						<div className="my-2 text-center">
							<button
								type="button"
								className="btn btn-warning"
								data-toggle="modal"
								data-target="#credential-Modal"
							>
								Change Credentials
							</button>
						</div>
						{/* button to trigger modal end */}
						{/* MODAL START */}

						<div
							className="modal fade"
							id="credential-Modal"
							tabIndex="-1"
							role="dialog"
							aria-labelledby="exampleModalLabel"
							aria-hidden="true"
						>
							<div className="modal-dialog">
								<form className="modal-content">
									<div className="modal-header">
										<h5
											className="modal-title"
											id="exampleModalLabel"
										>
											Change Credentials
										</h5>
										<button
											type="button"
											className="close"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">
												&times;
											</span>
										</button>
									</div>
									{/* Error handling start */}
									{error && (
										<div className="alert error-dailog">
											{error}
										</div>
									)}
									{error === false && (
										<div className="alert success-dailog">
											Successfully updated profile!
										</div>
									)}
									{/* error handling over */}
									{/* modal body */}
									<div className="modal-body">
										<div className="form-group">
											<label htmlFor="name">Name</label>
											<input
												type="text"
												className="form-control"
												id="name"
												aria-describedby="name"
												onChange={(event) => {
													this.handleChange(
														"name",
														event.target.value
													);
												}}
												value={this.state.name}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="password">
												Password
											</label>
											<input
												type="password"
												className="form-control"
												id="passsword"
												onChange={(event) => {
													this.handleChange(
														"password",
														event.target.value
													);
												}}
												value={this.state.password}
											/>
										</div>
										<div className="form-group">
											<label htmlFor="confirm_password">
												Confirm Password
											</label>
											<input
												type="password"
												className="form-control"
												id="confirm_password"
												onChange={(event) => {
													this.handleChange(
														"confirm_password",
														event.target.value
													);
												}}
												value={
													this.state.confirm_password
												}
											/>
										</div>
									</div>
									<div className="modal-footer">
										<button
											type="button"
											className="btn btn-secondary"
											data-dismiss="modal"
										>
											Close
										</button>
										<button
											type="submit"
											className="btn btn-primary"
											onClick={this.handleSubmit}
											disabled={inProgress}
										>
											{inProgress ? (
												<div className="loader"></div>
											) : (
												"Submit"
											)}
										</button>
									</div>
								</form>
							</div>
						</div>
						{/* MODAL END */}
					</div>
					<div className="col-sm-8 bg-white mt-3"></div>
				</div>
			</div>
		);
	}
}

function mapStatetoProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStatetoProps)(Settings);
