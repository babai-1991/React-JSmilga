//1-useRef-basics.js
import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
	const refContainer = useRef(null);
	const divRefContainer = useRef(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer);
		console.log('The value is :=> ' + refContainer.current.value);
		console.log(divRefContainer.current); //show me the div
	};
	useEffect(() => {
		refContainer.current.focus();
	});
	return (
		<React.Fragment>
			<form className="form" onSubmit={handleSubmit}>
				<div>
					<input id="txtName" type="text" ref={refContainer} />
					<button type="submit">Submit</button>
					<div ref={divRefContainer}>hello</div>
				</div>
			</form>
		</React.Fragment>
	);
};

export default UseRefBasics;
