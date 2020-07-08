import React, { Component } from "react";
import "../chat.css";
import * as $ from "jquery";

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			messages: [], // {content: 'some message', self: true}
			typedMessage: "",
			isMinimized: false
		};
	}
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
					{messages.map((message) => (
						<div
							className={
								messages.self
									? "chat-bubble self-chat"
									: "chat-bubble other-chat"
							}
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

export default Chat;
