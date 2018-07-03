import React from 'react';

const project = (props) => {

	return(
		<div className="item">
			<img src="#" alt="my photo" className="thumb"/>
			<div className="overlay">
				<div className="text">
					<h3>Earthquake Mapper</h3>
					<p><strong>View earthquakes around world</strong></p>
					<p>JavaScript, React, Google Maps</p>
					<p><a href="https://earthquakes-mapper.herokuapp.com" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
					<p><a href="https://github.com/mthorry/earthquakes-mapper" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
				</div>
			</div>
		</div>
	);
};

export default project;