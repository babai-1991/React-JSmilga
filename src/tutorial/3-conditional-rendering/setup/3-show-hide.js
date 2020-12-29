//3-show-hide.js
import React, { useState, useEffect } from 'react';

const ShowHide = () => {
	const [ show, setShow ] = useState(false);
	return (
		<React.Fragment>
			<button type="btn" onClick={() => setShow(!show)}>
				Show/Hide
			</button>
			{show && <ToggleComponent />}
		</React.Fragment>
	);
};

const ToggleComponent = () => {
	const [ size, setSize ] = useState(window.innerWidth);

	const checkSize = () => {
		setSize(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', checkSize);

		//call ckeanup
		return () => {
			window.removeEventListener('resize', checkSize);
		};
	});

	return (
		<div style={{ marginTop: '2rem' }}>
			<h1>Window</h1>
			<h2>Size: {size} px</h2>
		</div>
	);
};

export default ShowHide;
