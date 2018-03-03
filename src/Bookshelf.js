import React, {Component} from 'react';
import Book from './Book';

class Bookshelf extends Component{
	render(){
		const booksInShelf = this.props.books;
		const bookshelfHeader = this.props.shelfHeader;
		return(
			<div className="bookshelf">
				<header>
					<h2 className="bookshelf-title">{bookshelfHeader}</h2>
				</header>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{ booksInShelf.map( book => (<li key={book.title}>
							<Book
								title={book.title}
								authors={book.authors}
								shelf={book.shelf}
								imgUrl={book.imgUrl}
							/>
						</li>)) }
					</ol>
				</div>
			</div>
		);
	}
}

export default Bookshelf;