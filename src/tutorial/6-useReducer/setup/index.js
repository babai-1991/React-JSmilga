import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { reducer } from './reducer';

const initialState = {
	people: [],
	isModalOpen: false,
	modalContent: ''
};

const Index = () => {
	const [ name, setName ] = useState('');
	const [ newStateFromReducer, dispatch ] = useReducer(reducer, initialState);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			const newPeople = {
				id: new Date().getTime().toString(),
				name: name
			};
			dispatch({
				type: 'ITEM_ADD',
				payload: newPeople
			});
			setName('');
		} else {
			dispatch({
				type: 'INVALID_ENTRY'
			});
		}
	};

	const closeModal = () => {
		dispatch({ type: 'CLOSE_MODAL' });
	};

	return (
		<React.Fragment>
			{newStateFromReducer.isModalOpen && (
				<Modal closeModal={closeModal} modalMessage={newStateFromReducer.modalContent} />
			)}{' '}
			<form onSubmit={handleSubmit} className="form">
				<div>
					<input type="text" onChange={(e) => setName(e.target.value)} value={name} />
				</div>
				<button type="submit"> Add </button>
			</form>
			{newStateFromReducer.people.map((person) => {
				return (
					<div key={person.id} className="item">
						<h4> {person.name} </h4>
						<button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: person.id })}>remove</button>
					</div>
				);
			})}
		</React.Fragment>
	);
};

export default Index;
