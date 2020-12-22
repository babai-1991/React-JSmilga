//Book.js
//rfce for createing functional component template
import React from 'react';

/*=============== 
Custom Handler
=================
*/

const infoHandler = () => {
	alert('What to want to know');
};

const moreInfoHandler = (event, author, bookTitle) => {
	console.log(event);
	alert(`Thanks for choosing ${author}'s ${bookTitle}`);
};

const Book = (props) => {
	const { bookCover, bookName, authorName } = props;
	return (
		<article className="book">
			<img src={bookCover} />
			<h1>{bookName}</h1>
			<h4>-{authorName}</h4>
			<button type="button" className="btn" onClick={() => infoHandler()}>
				Read More
			</button>
			<button type="button" className="btn" onClick={(e) => moreInfoHandler(e, authorName, bookName)}>
				Proceed To Buy
			</button>
		</article>
	);
};

export default Book;
