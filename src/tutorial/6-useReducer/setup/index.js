//index.js
import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const reducer = (state, action) => {
	//do stuff later
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
		} else {
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
