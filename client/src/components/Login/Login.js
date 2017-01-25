import React from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel, Checkbox } from 'react-bootstrap';

export default class Login extends React.Component {

	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
		this.props.retrieveLoginInfo(this.state);
		// fetch('http://localhost:3000/api/auth/login', {
		// 		method: 'POST', 
		// 		body: JSON.stringify({email: this.state.email, password: this.state.password}),
		// 		headers: {
		// 			'Content-Type': 'application/json; charset=utf-8'
		// 		},
		// 	})
		// 	.then((res) => res.json())
		// 	.then((res) => console.log(res));
	}

	handleEmailChange = (e) => {
		this.setState({email: e.target.value});
		this.props.actionCreator(e);
	}

	handlePasswordChange = (e) => {
		this.setState({password: e.target.value});
		this.props.actionCreator(e);
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
						<FormControl type="email" placeholder="Email" onChange={this.handleEmailChange} name="login" />
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