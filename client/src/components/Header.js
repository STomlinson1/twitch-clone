import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import './styles/Header.scss';

export default class Header extends Component {
	render() {
		return (
			<div id="navbar" className="ui secondary pointing menu">
				<div className="ui container">
					<Link to="/" className="item">
						Twitch-Clone
					</Link>
					<Link to="/streams/show" className="item">
						Discover
					</Link>
					<div className="right menu">
						<Link to="/" className="item">
							All Streams
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
