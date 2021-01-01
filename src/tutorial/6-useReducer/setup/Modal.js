//Modal.js
import React, { useEffect } from 'react';

const Modal = (props) => {
	const { modalMessage, closeModal } = props;
	useEffect(() => {
		setTimeout(() => {
			closeModal();
		}, 2000);
	});
	return (
		<div className="modal">
			<p>{modalMessage}</p>
		</div>
	);
};

export default Modal;
