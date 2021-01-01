//index.js
import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		const newPeople = [ ...state.people, action.payload ];

		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'Hello From Modal'
		};
	}
	if (action.type === 'NO_VALUE') {
		return {
			...state,
			isModalOpen: true,
			modalContent: 'Please enter valid name'
		};
	}
	throw new Error('Invalid Action Type!');
};

const initialState = {
	people: [],
	isModalOpen: false,
	modalContent: ''
};

const Index = () => {
	const [ name, setName ] = useState('');
	const [ state, dispatch ] = useReducer(reducer, initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			const newItem = { id: new Date().getTime().toString(), name: name };
			dispatch({ type: 'ADD_ITEM', payload: newItem });
			setName('');
		} else {
			dispatch({ type: 'NO_VALUE' });
		}
	};

	return (
		<React.Fragment>
			{state.isModalOpen && <Modal modalMessage={state.modalContent} />}
			<form onSubmit={handleSubmit} className="form">
				<div>
					<input type="text" onChange={(e) => setName(e.target.value)} value={name} />
				</div>
				<button type="submit"> Add</button>
			</form>
			{state.people.map((person) => {
				return (
					<div key={person.id}>
						<h4>{person.name}</h4>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default Index;
