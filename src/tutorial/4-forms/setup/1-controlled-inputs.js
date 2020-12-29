//1-controlled-inputs.js
import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ people, setPeople ] = useState([]);

	const handleSubmit = (eventObject) => {
		eventObject.preventDefault();
		if (name && email) {
			//create a new person object from that data.
			// id is necessary for rendering list
			//const person = { name: name, email: email, id: new Date().getTime() };
			// use above code or use new es6 feature..
			const person = { name, email, id: new Date().getTime() };
			/*just adding function as a argument for practising ,
       here we dont need prevState value */
			setPeople((people) => {
				return [ ...people, person ]; // must must must must destructure and add and then return
			});

			//clear fields.
			setName('');
			setEmail('');
		} else {
			console.log('Name or Email cannot be blank');
		}
	};
	return (
		<React.Fragment>
			<form className="form">
				<div className="form-control">
					<label htmlFor="Name">Name: </label>
					<input type="text" id="Name" name="Name" value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div className="form-control">
					<label htmlFor="Email">Email: </label>
					<input
						type="text"
						id="Email"
						name="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<button type="submit" onClick={handleSubmit}>
					Submit
				</button>
			</form>
			{people.map((person) => {
				// extract from object..
				const { id, name, email } = person;
				return (
					<div key={id} className="item">
						<h4>{name}</h4>
						<p>{email}</p>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default ControlledInputs;
