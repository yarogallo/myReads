import React, {Component} from 'react';
import Selector from './Selector'

class Book extends Component {
	handleSelectShelf(evt, book) {
		this.props.onSelectShelf(evt.target.value, book);
		evt.preventDefault();
	}
	
	render(){
		const {book} = this.props;
		const title = book.title;
		const authors = book.authors || ['No authors to show'];
		const imageLink = book.imageLinks? book.imageLinks.smallThumbnail: './icons/image.svg';
		const shelf = book.shelf;
		return(
			<div className='book' onChange={(evt) => this.handleSelectShelf(evt, book)}>
				<div className='book-top'>
					<div className='book-cover' style={{backgroundImage : `url("${imageLink}")`}}></div>
					<Selector shelf={shelf}/>		
				</div>
				<div className="book-title">{title}</div>
				{ authors.map( author => ( <div className='book-authors' key={author}>{author}</div>)) }
			</div>
		);
	}
}

export default Book;