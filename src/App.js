import React, { Component } from 'react';
import './style/App.css';
import { Route } from 'react-router-dom';
import BooksSearch from './components/BooksSearch';
import BookList from './components/BookList';
import * as BooksAPI from './utils/BooksAPI';


const shelfList = [
	{key:'currentlyReading', header:'Currently Reading'},
	{key:'wantToRead', header:'Want To Read'},
	{key:'read', header:'Read'}
];

class App extends Component {
	constructor() {
		super();
		
		this.state = {
			currentlyReading:[],
			wantToRead:[],
			read:[],	
		};
	}
	
	addBook = (books=[]) => {
		const newState = {};
		
		books.forEach(book => {
			newState[book.shelf] = this.addBookToShelf(newState[book.shelf] || [], book);
		});
		
		this.setState(newState);
	 }
	
	moveBook = (book, shelf) => {
		const newState = {};
		
		book.shelf && (newState[book.shelf] = this.removeBookFromShelf(this.state[book.shelf], book));
		
		if (shelf !== 'none') {
			newState[shelf] = this.addBookToShelf(this.state[shelf], book);
		}
		
		this.setState(newState);
		
		book.shelf = shelf;
		BooksAPI.update(book, shelf);
	}
	
	removeBookFromShelf(shelf, book) {
		const newShelf = Array.from(shelf);
		const bookIndex = newShelf.findIndex( elem => elem.id === book.id );
		
		newShelf.splice(bookIndex, 1);
		return newShelf;
	}
	
	addBookToShelf(shelf, book) {
		const currentShelf = Array.from(shelf);
		
		currentShelf.push(book);
		return currentShelf;
	}
	
	actualizeBookShelf = (book) => {
		for(let shelf of shelfList) {
			const bookShelfIndex = this.state[shelf.key].findIndex( elem => elem.id === book.id );
			if( bookShelfIndex !== -1){
				book.shelf = shelf.key;
				return book;
			}
		}
		return book;
	}
	
	componentDidMount() {
		BooksAPI.getAll().then(books =>{this.addBook(books)});
	}
	
    render() {
        return ( 
			<div className="app">
				<Route exact path='/' render={()=>(
					<BookList 
						shelfs={this.state}
						shelfList={shelfList}
						onSelectShelf={this.moveBook}/>	
				)}/>
	 
			 	<Route path="/search" render={()=>(
				 	<BooksSearch 
					 	onSelectShelf={this.moveBook}
						 actualizeBookShelf={this.actualizeBookShelf}/>
			 	)}/>			
		</div>
        );
    }
}

export default App;