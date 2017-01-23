import React, { Component } from 'react';
import './App.css';

import Login from './Login/Login';
import Registration from './Registration/Registration';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeLogin, changePassword } from "./../redux/actions";

class App extends Component {

	render() {
		return (
			<div className="container">
				<Login changeLogin={this.props.changeLogin} changePassword={this.props.changePassword} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		login: state.loginReducer.login,
		password: state.loginReducer.password
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeLogin,
		changePassword,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);