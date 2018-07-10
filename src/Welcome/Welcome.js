import React, {Component} from 'react';
import {accessId, APIkey} from '../secrets.js'

import classes from './Welcome.css';

class welcome extends Component  {

	state = {
		weather: null
	};

	fetchWeather = () => {
		return fetch(`https://api.aerisapi.com/observations/auckland,new_zealand?client_id=${accessId}&client_secret=${APIkey}`)
			.then((res) => res.json())
	};

	componentDidMount = () => {
		this.fetchWeather()
			.then((json) => {
				json.success && this.setState({ weather: json.response.ob });
			})

	};

	formatCurrentWeather = (currentWeather) => {
		let current = '';
		if (currentWeather.toLowerCase().charAt(currentWeather.length-1) === 'y') {
			current = currentWeather.toLowerCase() + ' '
		} else if (currentWeather.toLowerCase() === 'clear') {
			current = 'cloudless '
		} else if (currentWeather.toLowerCase() === 'freezing fog') {
			current = 'freezing '
		} else if (currentWeather.toLowerCase().charAt(currentWeather.length-1) === 'g') {
			current = currentWeather.toLowerCase() + 'gy '
		} else {
			current = currentWeather.toLowerCase() + 'y '
		}
		return current
	};

	importAll = (r) => {
		let icons = {};
		r.keys().map((item, index) => ( icons[item.replace('./', '')] = r(item)));
		return icons;
	};

	render() {
		const icons = this.importAll(require.context('../images/icons', false, /\.(png|jpe?g|svg)$/));
		let currentWeather = '🌃';
		if (this.state.weather === null) {
			return null;
		}
		else
			{
			currentWeather = this.formatCurrentWeather(this.state.weather.weatherPrimary);
		}
		console.log(this.state.weather);
		return (
			<div className="Welcome section">

				<h1 className="welcome-intro"><strong>Oleg Nesterov</strong> is a <strong>full stack web developer, educator </strong>&<strong> all-around good person</strong> living in {currentWeather}<img src={icons[this.state.weather.icon]} alt='' className='weatherIcon'/> Auckland
					<br/>


				</h1>
				<img src="https://pbs.twimg.com/profile_images/936284824767205376/yu8sFzhm_400x400.jpg" alt="Oleg Nesterov" className="main-pic"/>
			</div>
		);
	}

}

export default welcome;