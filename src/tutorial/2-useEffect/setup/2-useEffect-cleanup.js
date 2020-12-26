//2-useEffect-cleanup.js
import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
	const [ width, setWidth ] = useState(window.innerWidth);

	const getWidth = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		console.log('Inside the useEffect()');
		window.addEventListener('resize', getWidth);

		//this is called cleanup function..
		return () => {
			console.log('Inside the cleanup function');
			window.removeEventListener('resize', getWidth);
		};
	});

	console.log('Component render');

	return (
		<React.Fragment>
			<h1>Window</h1>
			<h2>{width}PX</h2>
		</React.Fragment>
	);
};

export default UseEffectCleanup;
