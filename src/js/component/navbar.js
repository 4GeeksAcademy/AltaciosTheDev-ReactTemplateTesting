import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			{/* anchor tag is replaced by LINK component which will serve to move the URL of the page to the desired one.*/}
			<Link to="/">
				<span className="navbar-brand mb-0 h1">TO THE HOMEPAGE</span>
			</Link>
			<div className="ml-auto">
			{/* anchor tag is replaced by LINK component which will serve to move the URL of the page to the desired one.*/}
				<Link to="/demo">
					<button className="btn btn-primary">TO THE DEMO</button>
				</Link>
			</div>
		</nav>
	);
};
