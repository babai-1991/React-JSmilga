//index.js
import React from 'react';
import ReactDOM from 'react-dom';

import '../src/style.css';

const todoArray = [ 'Wake up at 9 A.M', 'BreakFast', 'Study' ];

const todoItem = todoArray.map((item, i) => {
	return <h1>{item}</h1>;
});

const Todo = () => {
	console.log(todoItem);
	return <div>{todoItem}</div>;
};

ReactDOM.render(<Todo />, document.getElementById('root'));
