//1-prop-drilling.js
import React, { useState } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
	const [ people, setPeople ] = useState(data);

	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => {
				return person.id !== id;
			});
		});
	};

	return (
		<section>
			<h3>Props drilling</h3>
			<List people={people} removePerson={removePerson} />
		</section>
	);
};

const List = ({ people, removePerson }) => {
	return (
		<React.Fragment>
			{people.map((person) => {
				return <SinglePerson key={person.id} id={person.id} name={person.name} removePerson={removePerson} />;
			})}
		</React.Fragment>
	);
};

const SinglePerson = ({ id, name, removePerson }) => {
	return (
		<div className="item">
			<h4>{name}</h4>
			<button className="btn" onClick={() => removePerson(id)}>
				remove
			</button>
		</div>
	);
};

export default PropDrilling;
