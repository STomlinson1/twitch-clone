import React, { Component } from 'react';

export default class GoogleAuth extends Component {
	state = { isSignedIn: null };

	componentDidMount() {
		window.gapi.load('client:auth2', () => {
			window.gapi.client
				.init({
					clientId :
						'410063369753-rgsplhhur5lv9qsh436ccc2997k1tvsa.apps.googleusercontent.com',
					scope    : 'email'
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	onSignIn = () => {
		this.auth.signIn();
	};

	onSignOut = () => {
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return null;
		} else if (this.state.isSignedIn) {
			return (
				<button onClick={this.onSignOut} className="ui google button">
					<i className="google icon" />
					Sign Out
				</button>
			);
		}
		return (
			<button onClick={this.onSignIn} className="ui google button">
				<i className="google icon" />
				Sign In with Google
			</button>
		);
	}

	render() {
		return <div className="item btn-google">{this.renderAuthButton()}</div>;
	}
}
