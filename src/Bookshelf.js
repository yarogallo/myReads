import React, {Component} from 'react';
import Book from './Book';

class Bookshelf extends Component{
	
	render(){
		const {header, books, onSelectShelf}= this.props;
		return(
			<div className="bookshelf">
				<header>
					<h2 className="bookshelf-title">{header}</h2>
				</header>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{ books.map( book => (
							<li key={book.id} >
								<Book book={book}
									  onSelectShelf={onSelectShelf}
								/>
							</li>)) }
					</ol>
				</div>
			</div>
		);
	}
}

export default Bookshelf;