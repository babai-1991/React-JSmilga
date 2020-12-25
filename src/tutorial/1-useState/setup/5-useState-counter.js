//5-useState-counter.js
import React, { useState } from 'react';

const UseStateCounter = () => {
	let [ value, setValue ] = useState(0);

	const calculateValue = (param) => {
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
	const complexCalculate = () => {
		setTimeout(() => {
			//setValue(value + 1);
			//always must return or functionality will not work
			//prevState will hold the updated value instead of the old value.
			setValue((prevState) => {
				return prevState + 1;
			});
		}, 2000);
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
			<section style={{ margin: '4rem 0' }}>
				<h2>Complex Counter</h2>
				<h1>{value}</h1>

				<button className="btn" onClick={complexCalculate}>
					Increase
				</button>
			</section>
		</React.Fragment>
	);
};

export default UseStateCounter;
