import React, { Component } from 'react';
import './style/App.css';
import { Route } from 'react-router-dom';
import BooksSearch from './books-search/BooksSearch';
import BookList from './book-list/BookList';

class App extends Component {
    render() {
        return ( 
			<div className="app">
				<Route exact path='/' render={()=>(
					<BookList />	
				)}/>
	 
			 	<Route path="/search" render={()=>(
				 	<BooksSearch />
			 	)}/>			
		</div>
        );
    }
}

export default App;