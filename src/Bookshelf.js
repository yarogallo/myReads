import React from 'react';
import Book from './Book';
import propTypes from 'prop-types'

const Bookshelf = function({header, books, onSelectShelf, removeBook}){
	return(
		<div className="bookshelf">
			<header>
				<h2 className="bookshelf-title">{header}</h2>
			</header>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{ books.map( book => (
						<li key={book.id} >
							<Book book={book} onSelectShelf={onSelectShelf} removeBook={removeBook}/>
						</li>
					)) }
				</ol>
			</div>
		</div>
	);
}

Bookshelf.propTypes = {
	header: propTypes.string.isRequired,
	books: propTypes.array.isRequired,
	onSelectShelf: propTypes.func.isRequired
}

export default Bookshelf;