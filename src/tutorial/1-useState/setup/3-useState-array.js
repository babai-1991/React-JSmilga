//3-useState-array.js
import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
	const [ person, setPerson ] = useState(data);

	/**************
   Event handlers
  ****************
   */
	const clearArray = () => {
		setPerson([]); // passing empty array
	};

	const removeItem = (id) => {
		const newArray = person.filter((people) => {
			return people.id !== id; // return those items whose id is not matching
		});

		setPerson(newArray);
	};

	/*********************
  End Of Event handlers
************************
*/

	return (
		<React.Fragment>
			{person.map((people) => {
				const { id, name } = people;
				return (
					<div key={id} className="item">
						{name}
						<button type="button" onClick={() => removeItem(id)}>
							Remove
						</button>
					</div>
				);
			})}
			<button type="button" className="btn" onClick={clearArray}>
				Clear All
			</button>
		</React.Fragment>
	);
};

export default UseStateArray;
