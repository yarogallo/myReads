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
		this.updateState = this.updateState.bind(this);
	}
	
	searchBooks(query){
		if(!query){
			this.setState({queryRelatedBooks: []})
			return;
		}
		BooksAPI.search(query).then(queryRelatedBooks => {
			console.log(queryRelatedBooks)
			 Array.isArray(queryRelatedBooks) && this.setState({queryRelatedBooks})
		}).catch((err) => console.log(`There was an error ${err}`))
	}
	
	updateState(query){
		this.setState({query});
		this.searchBooks(query)
	}
	
	render(){
		const {queryRelatedBooks, query} = this.state;
		return(
			<div className='search-books'>
				<QueryInnput query={query} onChangeQuery={this.updateState}/>
				<ShowSearchResult queryRelatedBooks={queryRelatedBooks}/>		
			</div>
		);
	}
}

export default SearchBooks;