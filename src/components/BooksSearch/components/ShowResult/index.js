import React from 'react';
import Book from '../../../Book/';
import propTypes from 'prop-types';


const ShowResult = function({queryRelatedBooks, onSelectShelf}){
	return(
		<div className="search-books-results">
            <ol className="books-grid">
				{queryRelatedBooks.map(book => (
 					<li key={book.id}><Book
 							book={book}
 							onSelectShelf={onSelectShelf}
 					/></li>
 				))}
 			</ol>
        </div>
	);
}

ShowResult.propTypes = {
	queryRelatedBooks: propTypes.array.isRequired,
	onSelectShelf: propTypes.func,
}

export default ShowResult;