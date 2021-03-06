import React from 'react';
import { Button } from 'antd-mobile';

class NotFound extends React.Component {
	render() {
		return (
			<div>
				<div>
					<h2>Oops! Not Found</h2>
					<Button
						type="primary"
						onClick={() => this.props.history.replace('/')}
					>
						Take Me Home
					</Button>
				</div>
			</div>
		);
	}
}

export default NotFound;
