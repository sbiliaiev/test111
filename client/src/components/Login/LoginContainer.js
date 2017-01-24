import React, { Component } from 'react';

import Login from './Login';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { changeLoginEmail, changeLoginPassword } from "./../redux/actions";
// import { changeRegistrationEmail, changeRegistrationPassword, changeRegistrationFirstname, changeRegistrationLastname } from "./../redux/actions";
import { changeLoginField } from './../../redux/actions';

import { Link, Route } from 'react-router';

class LoginContainer extends Component {

	render() {
		console.log(this.props.children);
		return (
			<div className="container">
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
		// changeLoginEmail,
		// changeLoginPassword,
		// changeRegistrationEmail,
		// changeRegistrationPassword, 
		// changeRegistrationFirstname, 
		// changeRegistrationLastname,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);