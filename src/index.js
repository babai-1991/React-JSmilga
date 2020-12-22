//index.js
import React from 'react';
import ReactDOM from 'react-dom';

import '../src/style.css';

const BookList = () => {
	return (
		<section className="booklist">
			<Book />
		</section>
	);
};

const authorName = 'Barack Obama';

const Book = () => {
	const bookName = 'A Promised Land';
	return (
		<article className="book">
			<img src="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg" />
			<h1>{bookName}</h1>
			<h4>{authorName.toUpperCase()}</h4>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));
