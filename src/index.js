//index.js
import React from 'react';
import ReactDOM from 'react-dom';

import '../src/style.css';

const firstBookInformation = {
	bookName: 'A Promised Land',
	authorName: 'Barack Obama',
	bookCover: 'https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg'
};
const secondBookInformation = {
	bookName: 'Interesting Stories For Curious People',
	authorName: "Bill O'Neill",
	bookCover: 'https://images-na.ssl-images-amazon.com/images/I/71EEdvsvd1L._AC_UL200_SR200,200_.jpg'
};

const BookList = () => {
	return (
		<section className="booklist">
			<Book
				bookName={firstBookInformation.bookName}
				authorName={firstBookInformation.authorName}
				bookCover={firstBookInformation.bookCover}
			/>
			<Book
				bookName={secondBookInformation.bookName}
				authorName={secondBookInformation.authorName}
				bookCover={secondBookInformation.bookCover}
			/>
		</section>
	);
};

const Book = (props) => {
	return (
		<article className="book">
			<img src={props.bookCover} />
			<h1>{props.bookName}</h1>
			<h4>-{props.authorName}</h4>
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));
