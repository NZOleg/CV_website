import React from 'react';

import classes from './Welcome.css';
import globalClasses from '../App.css';

const welcome = (props) => {
	return (
		<div  style={{padding:'50px'}}>
			<div  className={globalClasses.card}>
				Matt Thorry is a full stack web developer, educator & all-around good person living in mist and foggy  New York City
			</div>
		</div>
	)
};

export default welcome;