import React, { useState } from 'react';

const UseStateCounter = () => {
	let [ value, setValue ] = useState(0);

	const calculateValue = (param) => {
		debugger;
		switch (param) {
			case 'increase':
				setValue(++value);
				break;
			case 'decrease':
				setValue(--value);
				break;
			case 'reset':
				setValue(0);
				break;
		}
	};
	return (
		<React.Fragment>
			<section style={{ margin: '4rem 0' }}>
				<h2>Regular Counter</h2>
				<h1>{value}</h1>
				<button className="btn" onClick={() => calculateValue('decrease')}>
					Decrease
				</button>
				<button className="btn" onClick={() => calculateValue('reset')}>
					Reset
				</button>
				<button className="btn" onClick={() => calculateValue('increase')}>
					Increase
				</button>
			</section>
		</React.Fragment>
	);
};

export default UseStateCounter;
