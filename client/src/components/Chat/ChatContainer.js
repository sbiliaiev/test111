import React from 'react';

import ContactPanel from './ContactPanel';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { retrieveUserList } from './../../redux/actions';

import { Col } from 'react-bootstrap';

import DialogBox from './DialogBox';

import './Chat.css';

class RegistrationContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: 0,
			messageList: [],
		};
	}

	handleCurrentUser = (user_id) => {
		this.setState({currentuser: user_id});
	}

	render() {
		return (
			<div className="container chat-box">
				<Col md={4} xs={4}>
					<ContactPanel 
						retrieveUserList={this.props.retrieveUserList} 
						userList={this.props.userList} 
					/>
				</Col>
				<Col md={8} xs={8} className="message-box">
					<DialogBox />
				</Col>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		userList: state.chatReducer.userList,
		// login: state.loginReducer.login,
		// password: state.loginReducer.password
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		retrieveUserList,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer);