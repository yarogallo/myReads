import React, {Component} from 'react';
import Book from './Book';

class SearchBooks extends Component  {
	constructor(){
		super();
		this.state={
			query:''
		}
	}
	
	onChange(query){
		this.setState({query});
		this.props.searchBooks(query.trim());
	}
	
	render(){
		return(
			<div className='search-books'>
				<div className="search-books-bar">
					<a className="close-search">Close</a>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author" 
							value={this.state.value}
						 	onChange={(evt)=>{
								 this.onChange(evt.target.value);
							 }}/>
              		</div>
				</div>
				<div className="search-books-results">
              		<ol className="books-grid">
					{this.props.queryRelatedBooks.map(book => (
						<li key={book.id}><Book
							title={book.title}
							authors={book.authors || ['No authors to show']}
							imageLink={book.imageLinks? book.imageLinks.smallThumbnail: './icons/image.svg'}	
						/></li>
					))}
					</ol>
           		</div>
			</div>
		);
	}
}

export default SearchBooks;