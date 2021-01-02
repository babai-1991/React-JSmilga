//1-context-api.js
import React, { useState, useContext } from 'react';
import { data } from '../../../data';
// more components
// fix - context api, redux (for more complex cases)

//React.createContext() returns two component=> Provider and Consumer
const PersonContext = React.createContext();

const ContextAPI = () => {
	const [ people, setPeople ] = useState(data);

	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => {
				return person.id !== id;
			});
		});
	};

	return (
		<PersonContext.Provider value={{ removePerson, people }}>
			<h3>Context API/ useContext()</h3>
			<List />
		</PersonContext.Provider>
	);
};

const List = () => {
	const { people } = useContext(PersonContext);
	return (
		<React.Fragment>
			{people.map((person) => {
				return <SinglePerson key={person.id} id={person.id} name={person.name} />;
			})}
		</React.Fragment>
	);
};

const SinglePerson = ({ id, name }) => {
	const { removePerson } = useContext(PersonContext);
	console.log(data);
	return (
		<div className="item">
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	);
};

export default ContextAPI;
