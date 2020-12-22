//index.js
import React from 'react';
import ReactDOM from 'react-dom';

import '../src/style.css';

const booksArray = [
	{
		id: '1',
		bookName: 'A Promised Land',
		authorName: 'Barack Obama',
		bookCover: 'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg'
	},
	{
		id: '2',
		bookName: 'Interesting Stories For Curious People',
		authorName: "Bill O'Neill",
		bookCover: 'https://images-na.ssl-images-amazon.com/images/I/71EEdvsvd1L._AC_UL200_SR200,200_.jpg'
	}
];

const BookList = () => {
	return (
		<section className="booklist">
			{booksArray.map((book) => {
				return <Book key={book.id} {...book} />;
			})}
		</section>
	);
};

const Book = (props) => {
	const { bookCover, bookName, authorName } = props;
	return (
		<article className="book">
			<img src={bookCover} />
			<h1>{bookName}</h1>
			<h4>-{authorName}</h4>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));
