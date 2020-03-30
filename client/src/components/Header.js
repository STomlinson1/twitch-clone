import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

export default class Header extends Component {
	render() {
		return (
			<div id="navbar" className="ui secondary pointing menu">
				<div className="ui container">
					<Link to="/" className="item nav-item">
						Twitch-Clone
					</Link>
					<Link to="/streams/show" className="item nav-item">
						Discover
					</Link>
					<div className="right menu">
						<Link to="/" className="item nav-item">
							All Streams
						</Link>
						<GoogleAuth />
					</div>
				</div>
			</div>
		);
	}
}
