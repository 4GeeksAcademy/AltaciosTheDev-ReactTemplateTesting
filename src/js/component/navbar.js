import React, {useContext} from "react";
import { Link } from "react-router-dom";

import {Context} from "../store/appContext"

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			{/* anchor tag is replaced by LINK component which will serve to move the URL of the page to the desired one.*/}
			<Link to="/">
				<span className="navbar-brand mb-0 h1">{store.hola}</span>
			</Link>
			<div className="ml-auto">
			{/* anchor tag is replaced by LINK component which will serve to move the URL of the page to the desired one.*/}
				<div className="dropdown dropstart">
					<button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Add favorites: {store.favorites.length}
					</button>
					<ul className="dropdown-menu">
						{
							store.favorites.map((charac) => {
								return <li key={charac.id}><Link to={`/character/${charac.id}`} className="dropdown-item">{charac.fullName}</Link></li>
							})
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
