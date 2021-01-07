//Person.js
import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
	//console.log(useParams());
	const { id } = useParams();
	const [ name, setName ] = useState('');
	useEffect(() => {
		const filteredPerson = data.find((person) => {
			return person.id == parseInt(id); // not necessary but in console we saw id as string e.g {id:'1'}
		});
		setName(filteredPerson.name);
	}, []);
	return (
		<div>
			<h2>{name}</h2>
			<Link to="/staff">Back To List</Link>
		</div>
	);
};

export default Person;
