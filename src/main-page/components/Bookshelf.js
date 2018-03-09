import React from 'react';
import Book from '../../components/Book/Book';
import propTypes from 'prop-types'

const Bookshelf = function({header, books, onSelectShelf}){
	return(
		<div className="bookshelf">
			<header>
				<h2 className="bookshelf-title">{header}</h2>
			</header>
			<div className="bookshelf-books">
				<ol className="books-grid">
					{ books.map( book => (
						<li key={book.id} >
							<Book book={book} onSelectShelf={onSelectShelf}/>
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
	onSelectShelf: propTypes.func
}

export default Bookshelf;