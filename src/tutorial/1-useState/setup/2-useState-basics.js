//2-useState-basics.js
import React, { useState } from 'react';

const UseStateBasics = () => {
	const [ text, setText ] = useState('Hello Guest');
	const getMembership = () => {
		if (text == 'Hello Guest') {
			setText('Thanks for subscribing');
		} else {
			setText('Hello Guest');
		}
	};
	return (
		<React.Fragment>
			<h2>{text}</h2>
			<button type="button" className="btn" onClick={getMembership}>
				Subscribe
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
