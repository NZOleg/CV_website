import React from 'react';
import classes from './NavBar.css';


const navBar = function (props) {

	return (
		<nav>
			<ul className={classes.navBar}>
				<li className={classes.navItem}>Projects</li>
				<li className={classes.navItem}>Background</li>
				<li className={classes.navItem}>Hire Me</li>
			</ul>
		</nav>
	);
};

export default navBar;