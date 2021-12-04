import React from "react";
// Make a Navigation Bar as extra feature (or future implementation). This component is only used to show ReactRouter possibilities for future expansion. Only Home and About pages are used for now
import { Link } from "react-router-dom";
import scrooge from "../assets/scrooge.png";
import Title from "./Title";

function Navigation(props) {
	return (
		<div className="header-div">
			<header>
				<img src={scrooge} alt="Scrooge McDuck" />
				<nav>
					<ul className="nav-ul">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/wallet">Wallet</Link>
						</li>
						<li>
							<Link to="/prices">Prices</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
				<Title />
			</header>
		</div>
	);
}

export default Navigation;
