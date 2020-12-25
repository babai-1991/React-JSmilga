//4-useState-object.js
import React, { useState } from 'react';

const UseStateObject = () => {
	const personObj = {
		Name: 'Peter',
		Age: 29,
		Message: 'Hello Peter'
	};

	const [ person, setPerson ] = useState(personObj);

	/*
********************
Event handler
********************
*/
	const changeMessageProperty = () => {
		setPerson({
			...personObj, //spreading/copying whole obj first and then only override message
			Message: 'Changed Message'
		});
	};

	/*
********************
End of Event handler
********************
*/
	return (
		<React.Fragment>
			<h3>{person.Name}</h3>
			<h3>{person.Age}</h3>
			<h3>{person.Message}</h3>
			<button type="button" className="btn" onClick={changeMessageProperty}>
				Change Message
			</button>
		</React.Fragment>
	);
};

export default UseStateObject;
