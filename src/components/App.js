import React, { Component } from 'react';
import './App.css';

import Login from './Login/Login';
import Registration from './Registration/Registration';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeLoginEmail, changeLoginPassword } from "./../redux/actions";

class App extends Component {

	render() {
		return (
			<div className="container">
				<Login changeEmail={this.props.changeLoginEmail} changePassword={this.props.changeLoginPassword} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps', state);
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