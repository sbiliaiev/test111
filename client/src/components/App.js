import React, { Component } from 'react';
import './App.css';

import { Navbar, NavItem, Nav } from 'react-bootstrap';

class App extends Component {

	render() {
		// console.log(this.props.children);
		return (
			<div className="container">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/">Home</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="/login">Login</NavItem>
      					<NavItem eventKey={2} href="/registration">Registration</NavItem>
      					<NavItem eventKey={3} href="/chat">Chat</NavItem>
					</Nav>
					
				</Navbar>
				
				{
					this.props.children	? this.props.children : <h1>Welcome page</h1>	
				}
			</div>
		);
	}
}

export default App;