import React from 'react';
import Selector from './Selector';
import propTypes from 'prop-types'

const Book = function({book, onSelectShelf, removeBook}){
	const title = book.title;
	const authors = book.authors || ['No authors to show'];
	const imageLink = book.imageLinks && book.imageLinks.smallThumbnail;
	const shelf = book.shelf;
	
	const handleSelectShelf = function(evt, book) {
				onSelectShelf(evt.target.value, book);
		 		evt.preventDefault();
			}
	
	const handleDeleteBook = function(evt, book){
		if(evt.target.tagName === 'BUTTON'){
			removeBook(book);
		}
		evt.stopPropagation();
	} 
	
	return (
		<div className='book' onChange={(evt) => handleSelectShelf(evt, book)} onClick={(evt)=>{handleDeleteBook(evt, book)}}>
 				<div className='book-top'>
				 	<button className='delete-button'></button>
					<div className='book-cover' style={{backgroundImage : `url("${imageLink}")`}}></div>
 					<Selector shelf={shelf}/>		
 				</div>
 				<div className="book-title">{title}</div>
 				{ authors.map( author => ( <div className='book-authors' key={author}>{author}</div>)) }
 			</div>
	);
};

Book.propTypes = {
	book: propTypes.object.isRequired,
	onSelectShelf: propTypes.func.isRequired
};

export default Book;