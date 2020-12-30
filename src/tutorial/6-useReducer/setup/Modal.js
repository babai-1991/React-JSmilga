//Modal.js
import React, { useEffect } from 'react';

const Modal = (props) => {
	const { modalMessage } = props;
	return (
		<div className="modal">
			<p>{modalMessage}</p>
		</div>
	);
};

export default Modal;
