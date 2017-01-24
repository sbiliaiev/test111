import React, { Component } from 'react';
import './App.css';

import Login from './Login/Login';
import Registration from './Registration/Registration';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeLoginEmail, changeLoginPassword } from "./../redux/actions";
import { changeRegistrationEmail, changeRegistrationPassword, changeRegistrationFirstname } from "./../redux/actions";

class App extends Component {

	render() {
		const regFunc = {

		};
		return (
			<div className="container">
				<Registration  />
				<Login changeEmail={this.props.changeLoginEmail} changePassword={this.props.changeLoginPassword} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	// console.log('mapStateToProps', state);
	return {
		login: state.loginReducer.login,
		password: state.loginReducer.password
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeLoginEmail,
		changeLoginPassword,

	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);