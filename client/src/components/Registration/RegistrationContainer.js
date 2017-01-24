import React, { Component } from 'react';

import Registration from './Registration';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeRegistrationField } from './../../redux/actions';

class RegistrationContainer extends Component {

	render() {
		console.log(this.state);
		return (
			<div className="container">
				<Registration actionCreator={this.props.changeRegistrationField} />
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
		changeRegistrationField,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);