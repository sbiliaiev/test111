import React from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap';

export default class Login extends React.Component {

	constructor() {
		super();
		this.state = {
			login: '',
			password: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}

	handleLoginChange = (e) => {
		// console.log('login', e.target.value);
		this.setState({login: e.target.value});
		// this.props.loginHandler(e);
		this.props.changeLogin(e.target.value);
		// this.props.loginChange(e.target.value);
	}

	handlePasswordChange = (e) => {
		// console.log('password', e.target.value);
		this.setState({password: e.target.value});
		this.props.changePassword(e.target.value);
		
	}
	render() {
		return(
			<Form horizontal onSubmit={this.handleSubmit}>
				<h1>Login</h1>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="Email" onChange={this.handleLoginChange} />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange} />
					</Col>
				</FormGroup>

				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Checkbox>Remember me</Checkbox>
					</Col>
				</FormGroup>

				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit" bsStyle="primary">
							Sign in
						</Button>
					</Col>
				</FormGroup>
			</Form>
		);
	}
}