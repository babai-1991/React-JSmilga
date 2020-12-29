//2-short-circuit.js
import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [ text, setText ] = useState('');
	const firstValue = text || 'hello world';
	const secondValue = text && 'hello world';

	return (
		// if(true)
		// {
		//    <h2>Hello</h2>
		// }

		<React.Fragment>
			<h3> The value of text || 'hello world' is : {firstValue}</h3>
			<h3> text && 'hello world' : {secondValue}</h3>
		</React.Fragment>
	);
};

export default ShortCircuit;
