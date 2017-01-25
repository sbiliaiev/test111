import React from 'react';

import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class ContactPanel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: 0,
		}
	}

	handleCurrentUser = (e) => {
		this.setState({currentUser: e});
	}

	componentDidMount() {
		this.props.retrieveUserList();
	}

	componentDidUpdate() {
		// this.setState({userList: this.props.userList});
		console.log('updated');
	}
	 
	render() {
		return (
			<ListGroup>
				{
					this.props.userList && this.props.userList.length > 1 
					? this.props.userList.map((item, index) => <ListGroupItem key={item._id} onClick={() => this.handleCurrentUser(index)}>{item.email}</ListGroupItem>)
					: null
				}
			</ListGroup>
		);
	}
}