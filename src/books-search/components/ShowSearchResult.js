import React from 'react';
import Book from '../../components/Book/Book';
import propTypes from 'prop-types';


const ShowSearchResult = function({queryRelatedBooks, onSelectShelf}){
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

ShowSearchResult.propTypes = {
	queryRelatedBooks: propTypes.array.isRequired,
	onSelectShelf: propTypes.func.isRequired
}

export default ShowSearchResult;