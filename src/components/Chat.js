import React, { Component } from "react";
import "../chat.css";
import * as $ from "jquery";
import io from "socket.io-client";
import { connect } from "react-redux";

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [], // {content: 'some message', self: true}
			typedMessage: "",
			isMinimized: false
		};

		this.socket = io.connect("http://54.237.158.65:5000");
		this.userEmail = props.user.email;

		/* if (this.userEmail) {
			this.setupConnection();
		} */
	}

	componentDidMount() {
		if (this.userEmail) {
			const socketConnection = this.socket;
			const self = this;
			this.socket.on("connect", function () {
				console.log("Connection Established!");
				socketConnection.emit("join_room", {
					//for establishing a connextion between the user and the chat server
					user_email: this.userEmail,
					chatroom: "codeial"
				});

				socketConnection.on("user_joined", function (
					data //server sends a message that user has joined
				) {
					console.log("New user Joined!", data);
				});
			});

			this.socket.on("receive_message", function (data) {
				//add message to state
				const { messages } = self.state;
				const messageObject = {};
				messageObject.content = data.message;

				if (data.user_email === self.userEmail) {
					messageObject.self = true;
				} else {
					messageObject.self = false;
				}
				self.setState({
					messages: [...messages, messageObject],
					typedMessage: ""
				});
			});
		}
	}

	setupConnection = () => {
		const socketConnection = this.socket;
		const self = this;
		this.socket.on("connect", function () {
			console.log("Connection Established!");
			socketConnection.emit("join_room", {
				//for establishing a connextion between the user and the chat server
				user_email: this.userEmail,
				chatroom: "codeial"
			});

			socketConnection.on("user_joined", function (
				data //server sends a message that user has joined
			) {
				console.log("New user Joined!", data);
			});
		});

		this.socket.on("receive_message", function (data) {
			//add message to state
			const { messages } = self.state;
			const messageObject = {};
			messageObject.content = data.message;

			if (data.user_email === self.userEmail) {
				messageObject.self = true;
			} else {
				messageObject.self = false;
			}
			self.setState({
				messages: [...messages, messageObject],
				typedMessage: ""
			});
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const { typedMessage } = this.state;
		if (typedMessage && this.userEmail) {
			this.socket.emit("send_message", {
				message: typedMessage,
				user_email: this.userEmail,
				chatroom: "codeial"
			});
		}
	};

	handleMinimize = () => {
		if (!this.state.isMinimized) {
			$(".chat-messages").addClass("d-none");
			$(".chat-footer").addClass("d-none");
			$(".chat-header").addClass("stick-to-bottom");
			this.setState({
				isMinimized: true
			});
		} else {
			$(".chat-messages").removeClass("d-none");
			$(".chat-footer").removeClass("d-none");
			$(".chat-header").removeClass("stick-to-bottom");
			this.setState({
				isMinimized: false
			});
		}
	};
	render() {
		const { typedMessage, messages } = this.state;

		return (
			<div className="chat-container">
				<div className="chat-header">
					Chat
					<img
						src="https://www.iconsdb.com/icons/preview/white/minus-5-xxl.png"
						alt=""
						height={17}
						onClick={this.handleMinimize}
					/>
				</div>
				<div className="chat-messages">
					{messages.map((message, index) => (
						<div
							className={
								message.self
									? "chat-bubble self-chat"
									: "chat-bubble other-chat"
							}
							key={index}
						>
							{message.content}
						</div>
					))}
				</div>
				<div className="chat-footer">
					<input
						type="text"
						value={typedMessage}
						onChange={(event) =>
							this.setState({ typedMessage: event.target.value })
						}
					/>
					<button
						type="button"
						className="btn btn-success"
						onClick={this.handleSubmit}
					>
						Send
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { user: state.auth.user };
}

export default connect(mapStateToProps)(Chat);
