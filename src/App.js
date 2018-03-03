import React, { Component } from 'react';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './utils/BooksAPI';

class App extends Component {
	constructor(){
		super();
		this.state={
			shelfList: [],
			queryRelatedBooks:[],
		}
	}
	
	componentDidMount(){
		//BooksAPI.getAll().then(book => console.log(book))
	}
	
	searchBooks(query){
		if(!query){
			this.setState({queryRelatedBooks: []});
			return;
		}
		BooksAPI.search(query).then(queryRelatedBooks => {
			Array.isArray(queryRelatedBooks) && this.setState({queryRelatedBooks});
		}).catch((err) => console.log(`There was an error ${err}`));
	}
	
    render() {
        return ( 
		<div className="app">
			<SearchBooks 
				searchBooks={this.searchBooks.bind(this)}
				queryRelatedBooks={this.state.queryRelatedBooks}
				/>			
		</div>
        );
    }
}

export default App;