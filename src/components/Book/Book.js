import React from 'react';
import ShelfSelector from './ShelfSelector/ShelfSelector';
import PropTypes from 'prop-types'

const Book = function({ book, onSelectShelf }) {
	const authors = book.authors || ['No authors to show'];
	const imageLink = (book.imageLinks && book.imageLinks.smallThumbnail) || '/images/no_image.png';
	
	const handleSelectShelf = function(evt, book) {
		onSelectShelf && onSelectShelf(book, evt.target.value);
	}
	
	return (
		<div className='book' onChange={(evt) => handleSelectShelf(evt, book)}>
			<div className='book-top'>
				<div className='book-cover' style={{backgroundImage : `url("${imageLink}")`}}></div>
				<ShelfSelector shelf={book.shelf} />		
			</div>
			<div className="book-title">{book.title}</div>
			{ authors.map(author => (<div className='book-authors' key={author}>{author}</div>))}
		</div>
	);
};

Book.propTypes = {
	book: PropTypes.object.isRequired,
	onSelectShelf: PropTypes.func
};

export default Book;