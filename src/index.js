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
			>
				<p>
					A riveting, deeply personal account of history in the making-from the president who inspired us to
					believe in the power of democracy
				</p>
			</Book>
			<Book
				bookName={secondBookInformation.bookName}
				authorName={secondBookInformation.authorName}
				bookCover={secondBookInformation.bookCover}
			>
				<p>Want to learn a bunch of random facts about history, science, true crime, and the paranormal?</p>
			</Book>
		</section>
	);
};

const Book = (props) => {
	const { bookCover, bookName, authorName } = props;
	//You could destructure children like this
	//const { bookCover, bookName, authorName, children } = props;
	return (
		<article className="book">
			<img src={bookCover} />
			<h1>{bookName}</h1>
			<h4>-{authorName}</h4>
			{props.children}
		</article>
	);
};

ReactDOM.render(<BookList />, document.getElementById('root'));
