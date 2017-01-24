import React, { Component } from 'react';

import Registration from './Registration';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { changeLoginEmail, changeLoginPassword } from "./../redux/actions";
// import { changeRegistrationEmail, changeRegistrationPassword, changeRegistrationFirstname, changeRegistrationLastname } from "./../redux/actions";
import { changeRegistrationField } from './../../redux/actions';

import { Link, Route } from 'react-router';

class RegistrationContainer extends Component {

	render() {
		console.log(this.props.children);
		return (
			<div className="container">
				<Registration actionCreator={this.props.changeRegistrationField} />
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
		changeRegistrationField,
		// changeLoginEmail,
		// changeLoginPassword,
		// changeRegistrationEmail,
		// changeRegistrationPassword, 
		// changeRegistrationFirstname, 
		// changeRegistrationLastname,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);