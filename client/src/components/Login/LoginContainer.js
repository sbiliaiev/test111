import React, { Component } from 'react';

import Login from './Login';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeLoginField } from './../../redux/actions';

class LoginContainer extends Component {

	render() {
		return (
			<div className="container">
				<Login actionCreator={this.props.changeLoginField} />	
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		// login: state.loginReducer.login,
		// password: state.loginReducer.password
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeLoginField,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);