import React from 'react';
import { Jumbotron } from 'react-bootstrap';

// export const Message = (props) => {
// 	return (
// 		<Jumbotron>
// 			<p>{props.content}</p>
// 		</Jumbotron>
// 	);
// }

export default class Message extends React.Component {
	render() {
		const style = !!this.props.owner === false ? "message-you" : "message-other";
		return(
			<div className={style}>
				<Jumbotron>
					<p>{this.props.content}</p>
				</Jumbotron>
			</div>
		);
	}
}