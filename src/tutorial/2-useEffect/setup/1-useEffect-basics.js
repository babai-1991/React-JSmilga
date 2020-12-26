//1-useEffect-basics.js
import React, { useState, useEffect } from 'react';

const UseEffectBasics = () => {
	const [ value, setValue ] = useState(0);

	useEffect(
		() => {
			if (value > 0) {
				console.log('useEffect called');
				document.title = `New value is ${value}`;
			}
		},
		[ value ] //runs at initial render and whenever value gets changed again run useEffect()
	);
	useEffect(() => {
		console.log('Second useEffect , runs only initial render');
	}, []);
	console.log('Component gets rendered');
	return (
		<React.Fragment>
			<h1>{value}</h1>
			<button className="btn" onClick={() => setValue(value + 1)}>
				Click
			</button>
		</React.Fragment>
	);
};

export default UseEffectBasics;
