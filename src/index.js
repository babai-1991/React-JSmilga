//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import '../src/style.css';

import { books } from './books';

const BookList = () => {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
		</section>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));
