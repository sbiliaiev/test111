import React from 'react';
import { Form, FormGroup, Col, FormControl, Button, ControlLabel } from 'react-bootstrap';

export default class Registration extends React.Component {

	handleSubmit = (e) => {
		e.preventDefault();
	}
	render() {
		return(
			<Form horizontal onSubmit={this.handleSubmit}>
				<h1>Registraion	</h1>
				<FormGroup controlId="formHorizontalEmail">
					<Col componentClass={ControlLabel} sm={2}>
						Email
					</Col>
					<Col sm={10}>
						<FormControl type="email" placeholder="Email" />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Password" />
					</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Re-Password
					</Col>
					<Col sm={10}>
						<FormControl type="password" placeholder="Re-Password" />
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