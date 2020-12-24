//1-error-example.js
import React from 'react';

const ErrorExample = () => {
	let title = 'Hello Guest';

	const getMemberShip = () => {
		title = 'Thanks for the membership';
		console.log(title);
	};
	return (
		<React.Fragment>
			<h2>{title}</h2>
			<button type="button" className="btn" onClick={getMemberShip}>
				Subscribe
			</button>
		</React.Fragment>
	);
};

export default ErrorExample;
