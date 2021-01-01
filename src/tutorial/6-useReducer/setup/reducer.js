export const reducer = (oldState, action) => {
	if (action.type == 'ITEM_ADD') {
		const peopleAdd = [ ...oldState.people, action.payload ];
		return {
			people: peopleAdd,
			isModalOpen: true,
			modalContent: 'Item added successfully!'
		};
	}
	if (action.type == 'INVALID_ENTRY') {
		return {
			...oldState,
			isModalOpen: true,
			modalContent: 'Invalid Entry'
		};
	}
	if (action.type == 'REMOVE_ITEM') {
		const newPeople = oldState.people.filter((person) => {
			return person.id != action.payload;
		});
		return {
			...oldState,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'Item Removed'
		};
	}
	if (action.type == 'CLOSE_MODAL') {
		return {
			...oldState,
			isModalOpen: false
		};
	}
	throw new Error('Invalid Action');
};
