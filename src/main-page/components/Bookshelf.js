import React from 'react';
import Book from '../../components/Book/Book';
import PropTypes from 'prop-types';

const Bookshelf = function({ header, books, onSelectShelf }){
	return(
		<div className="bookshelf">
			<header>
				<h2 className="bookshelf-title">{header}</h2>
			</header>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{ books.map( book => (
						<li key={book.id} >
							<Book book={book} onSelectShelf={ onSelectShelf }/>
						</li>
					)) }
				</ol>
			</div>
		</div>
	);
}

Bookshelf.PropTypes = {
	header: PropTypes.string.isRequired,
	books: PropTypes.array.isRequired,
	onSelectShelf: PropTypes.func
}

export default Bookshelf;