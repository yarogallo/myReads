import React, { Component } from 'react';
import Bookshelf from './components/Bookshelf';
import {Link} from 'react-router-dom';
import * as BooksAPI from '../utils/BooksAPI';

const shelfList = [
	{key:'currentlyReading', header:'Currently Reading'},
	{key:'wantToRead', header:'Want To Read'},
	{key:'read', header:'Read'}
];

class BookList extends Component {	
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
		
		newState[book.shelf] = this.removeBookFromShelf(this.state[book.shelf], book);
		
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
	
	componentDidMount() {
		BooksAPI.getAll().then(books =>{this.addBook(books)});
	}
	
	render() {
		return(
			<div className="list-books">
            	<header className = "list-books-title" >
            		<h1>MyReads</h1> 	
				</header>
				<div className="list-books-content">
				 {shelfList.map(shelf =>(
					 <Bookshelf key={shelf.key}
						 header={shelf.header}
						 books={this.state[shelf.key]}
						 onSelectShelf={this.moveBook}
					 />
				 ))}
				</div>
				
				<div className='open-search'>
						<Link to='/search'>add book</Link>
				</div>
			</div>
		);
	}
}

export default BookList;