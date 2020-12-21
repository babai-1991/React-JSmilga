//index.js
import React from 'react';
import ReactDOM from 'react-dom';

import '../src/style.css';

const BookList = () => {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
};

const Book = () => {
	return (
		<article className="book">
			<BookImage />
			<BookTitle />
			<BookAuthor />
		</article>
	);
};

const BookTitle = () => {
	return <h1>Barack Obama</h1>;
};
const BookAuthor = () => {
	return <h4>Barack Obama</h4>;
};
const BookImage = () => {
	return <img src="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg" />;
};

ReactDOM.render(<BookList />, document.getElementById('root'));
