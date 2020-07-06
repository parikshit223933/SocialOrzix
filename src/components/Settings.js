import React from "react";
import { connect } from "react-redux";
class Settings extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			password: "",
			confirm_password: ""
		};
	}
	render() {
		const { user } = this.props.auth;
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
									{/* modal body */}
									<div className="modal-body">
										<div class="form-group">
											<label for="name">Name</label>
											<input
												type="text"
												class="form-control"
												id="name"
												aria-describedby="name"
												onChange={() => {
													this.handleChange();
												}}
												value={this.state.name}
											/>
										</div>
										<div class="form-group">
											<label for="password">
												Password
											</label>
											<input
												type="password"
												class="form-control"
												id="passsword"
												onChange={() => {
													this.handleChange();
												}}
												value={this.state.password}
											/>
										</div>
										<div class="form-group">
											<label for="password">
												Confirm Password
											</label>
											<input
												type="password"
												class="form-control"
												id="passsword"
												onChange={() => {
													this.handleChange();
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
											class="btn btn-primary"
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</div>
						{/* MODAL END */}
					</div>
					<div className="col-sm-8 bg-white mt-3">sdgsd</div>
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
