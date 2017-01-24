import React, { Component } from 'react';
import './App.css';

import Login from './Login/Login';
import Registration from './Registration/Registration';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { changeLoginEmail, changeLoginPassword } from "./../redux/actions";
// import { changeRegistrationEmail, changeRegistrationPassword, changeRegistrationFirstname, changeRegistrationLastname } from "./../redux/actions";
import { changeLoginField, changeRegistrationField } from './../redux/actions';

class App extends Component {

	render() {
		return (
			<div className="container">
				<Registration actionCreator={this.props.changeRegistrationField} />
				<Login actionCreator={this.props.changeLoginField} />
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
		changeLoginField,
		changeRegistrationField,
		// changeLoginEmail,
		// changeLoginPassword,
		// changeRegistrationEmail,
		// changeRegistrationPassword, 
		// changeRegistrationFirstname, 
		// changeRegistrationLastname,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);