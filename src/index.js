//index.js
import React from 'react';
import ReactDOM from 'react-dom';

function Greeting() {
	return (
		<div>
			<h3>
				<Person />
				<Message />
				-<span>
					<DateDisplay />
				</span>
			</h3>
		</div>
	);
}

function DateDisplay() {
	return new Date().toString();
}

const Person = () => {
	return <p>Babai</p>;
};

const Message = function() {
	return (
		<div>
			<h3>Welcome to gitHub</h3>
		</div>
	);
};

ReactDOM.render(<Greeting />, document.getElementById('root'));
