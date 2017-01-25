import React from 'react';

import { Form, FormGroup, ControlLabel, FormControl } from'react-bootstrap';

export default class TextField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentmessage: '',
		};
	}

	handleMessageChange = (e) => {
		this.setState({currentmessage: e.target.value});
	}

	handleMessageSubmit = (e) => {
		e.preventDefault();
		if (this.state.currentmessage.length > 0) {
			this.props.onSubmit(this.state.currentmessage);
			this.setState({currentmessage: ''});
		}
	}

	render() {
		return(
			<Form horizontal onSubmit={this.handleMessageSubmit} className="text-field">
				<FormGroup controlId="formHorizontalEmail">
						<FormControl 
							type="text" 
							placeholder="Enter your message" 
							name="message"
							onChange={this.handleMessageChange}
							value={this.state.currentmessage}
						 />
				</FormGroup>
			</Form>
		);
	}
}