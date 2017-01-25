import React from 'react';
import Message from './Message';
import TextField from './TextField';

export default class DialogBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messageList: []
		};
	}

	handleMessageSubmit = (text) => {
		this.setState({messageList: [...this.state.messageList, text]});
	}

	componentDidUpdate() {
		console.log('dialogBox updated', this.state);
	}

	render() {
		return(
			<div className="dialog-box" >
				{
					this.state.messageList.map((item, index) => <Message content={item} key={index} ownner={true} />)
				}
				<TextField onSubmit={this.handleMessageSubmit} />
			</div>
		);
	}
}