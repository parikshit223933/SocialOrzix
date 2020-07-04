import React from "react";
import website_logo from "../website logo.png";

function Navbar(props) {
	return (
		<nav className="nav">
			<div className="left-div">
				<img src={website_logo} alt="logo" />
			</div>
			<div className="search-container">
				<img
					className="search-icon"
					src="https://image.flaticon.com/icons/svg/483/483356.svg"
					alt="search-icon"
				/>
				<input placeholder="search" />
				<div className="search-results">
					<ul>
						<li className="search-results-row">
							<img
								src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
								alt="user-dp"
							/>
							<span>John Doe</span>
						</li>
						<li className="search-results-row">
							<img
								src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
								alt="user-dp"
							/>
							<span>John Doe</span>
						</li>
					</ul>
				</div>
			</div>
			<div className="right-nav">
				<div className="user">
					<img
						src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
						alt="user-dp"
						id="user-dp"
					/>
					<span>John Doe</span>
				</div>
				<div className="nav-links">
					<ul>
						<li>Log In</li>
						<li>Log Out</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
