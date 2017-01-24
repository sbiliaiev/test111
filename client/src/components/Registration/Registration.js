import React from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';

export default class Registration extends React.Component {

	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			password2: '',
			firstName: '',
			lastName: '',
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.password === this.state.password2) {
			fetch('http://localhost:3000/api/auth/register', {
					method: 'POST', 
					body: JSON.stringify({
						email: this.state.email, 
						password: this.state.password,
						firstName: this.state.firstName,
						lastName: this.state.lastName
					}),
					headers: {'Content-Type': 'application/json; charset=utf-8'},	
				})
				.then((res) => res.json())
				.then((res) => console.log(res));
		} else {
			alert('Passwords don\'t match!');
		}
	}

	handleFirstnameChange = (e) => {
		this.setState({firstName: e.target.value});
		this.props.actionCreator(e);
	}

	handleLastnameChange = (e) => {
		this.setState({lastName: e.target.value});
		this.props.actionCreator(e);
	}

	handleEmailChange = (e) => {
		this.setState({email: e.target.value});
		this.props.actionCreator(e);
	}

	handlePasswordChange = (e) => {
		this.setState({password: e.target.value});
		this.props.actionCreator(e);
	}

	handlePasswordChange2 = (e) => {
		this.setState({password2: e.target.value});
	}

	render() {
		return(
			<Form horizontal onSubmit={this.handleSubmit}>
				<h1>Registraion	</h1>

				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						First name
					</Col>
					<Col sm={10}>
						<FormControl type="text" placeholder="Firstname" onChange={this.handleFirstnameChange} name="firstName" />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Last name
					</Col>
					<Col sm={10}>
						<FormControl type="text" placeholder="Lastname" onChange={this.handleLastnameChange} name="lastName" />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="Email" onChange={this.handleEmailChange} name="email" />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Password" onChange={this.handlePasswordChange} name="password" />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Re-Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Re-Password" onChange={this.handlePasswordChange2} />
					</Col>
				</FormGroup>

				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button type="submit" bsStyle="primary">
							Sign up
						</Button>
					</Col>
				</FormGroup>
			</Form>
		);
	}
}