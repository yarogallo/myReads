import React, {Component} from 'react';
import QueryInnput from './components/QueryInput';
import ShowSearchResult from './components/ShowSearchResult';
import * as BooksAPI from '../utils/BooksAPI';

class BooksSearch extends Component  {
	constructor() {
		super();
		this.state = {
			queryRelatedBooks: [],
			query: '',
		}
	}
	
	searchBooks = (query) => {
		this.setState({
			query,
			queryRelatedBooks:[]
		});
		
		if (query) {
			BooksAPI.search(query)
				.then(result => {
					if (result.error) {
						console.log(`There was an error ${result.error}`)
						return;
					}
					
					this.setState({ queryRelatedBooks: result })
				})
				.catch((err) => console.log(`There was an error ${err}`))
		}
	}
	
	addBookInShelf = (book, shelf) => BooksAPI.update(book, shelf);
		
	render() {
		const { queryRelatedBooks, query } = this.state;
		
		return(
			<div className='search-books'>
				<QueryInnput query={query} onChangeQuery={(query)=>{this.searchBooks(query)}}/>
				<ShowSearchResult queryRelatedBooks={queryRelatedBooks} onSelectShelf={(book, shelf)=>{this.addBookInShelf(book, shelf)}}/>		
			</div>
		);
	}
}

export default BooksSearch;