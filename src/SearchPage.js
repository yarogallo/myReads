import React, {Component} from 'react';
import QueryInnput from './QueryInput';
import ShowSearchResult from './ShowSearchResult';
import * as BooksAPI from './utils/BooksAPI';

class SearchBooks extends Component  {
	constructor(props){
		super(props);
		this.state={
			queryRelatedBooks:[],
			query:''
		}
		this.searchBooks = this.searchBooks.bind(this);
		this.addBookInShelf = this.addBookInShelf.bind(this);
		
	}
	
	searchBooks(query){
		this.setState({query});
		if(query){
			BooksAPI.search(query).then(result => {
				result.error || this.setState({queryRelatedBooks: result});
			}).catch((err) => console.log(`There was an error ${err}`))
		}
		this.setState({queryRelatedBooks:[]});
	}
	
	addBookInShelf(book, shelf){
		BooksAPI.update(book, shelf)
	}
	
	render(){
		const {queryRelatedBooks, query} = this.state;
		return(
			<div className='search-books'>
				<QueryInnput query={query} onChangeQuery={(query)=>{this.searchBooks(query)}}/>
				<ShowSearchResult queryRelatedBooks={queryRelatedBooks} onSelectShelf={(book, shelf)=>{this.addBookInShelf(book, shelf)}}/>		
			</div>
		);
	}
}

export default SearchBooks;