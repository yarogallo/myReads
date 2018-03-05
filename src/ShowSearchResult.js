import React, {Component} from 'react';
import Book from './Book';

class ShowSearchResult extends Component {
	render(){
		const {queryRelatedBooks} = this.props;
		return(
			<div className="search-books-results">
              	<ol className="books-grid">
					{queryRelatedBooks.map(book => (
						<li key={book.id}><Book
							book={book}
						/></li>
					))}
				</ol>
           	</div>
		);
	}
}

export default ShowSearchResult;