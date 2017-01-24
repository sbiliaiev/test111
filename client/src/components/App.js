import React, { Component } from 'react';
import './App.css';


import RegistrationContainer from './Registration/RegistrationContainer';
import LoginContainer from './Login/LoginContainer';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { changeLoginEmail, changeLoginPassword } from "./../redux/actions";
// import { changeRegistrationEmail, changeRegistrationPassword, changeRegistrationFirstname, changeRegistrationLastname } from "./../redux/actions";
import { changeLoginField, changeRegistrationField } from './../redux/actions';

import { Link, Route } from 'react-router';

import { Navbar, NavItem, Nav } from 'react-bootstrap';

class App extends Component {

	render() {
		// console.log(this.props.children);
		return (
			<div className="container">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/">Home</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="/login">Login</NavItem>
      					<NavItem eventKey={2} href="/registration">Registration</NavItem>
					</Nav>
				</Navbar>
				
				{
					this.props.children	? this.props.children : <h1>Welcome page</h1>	
				}
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