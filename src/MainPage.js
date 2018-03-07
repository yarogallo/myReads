import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import {Link} from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';

class ListBooks extends Component {	
	
	constructor(props){
		super(props);
		
		this.state={
			currentlyReading:[],
			wantToRead:[],
			read:[],
			bookshelfkeys: [ 
				{header:'Currently Reading', key:'currentlyReading'}, 
				{header: 'Want To Read', key: 'wantToRead'},
				{header:'Read', key: 'read'}],		
			}
			
		this.addBooks = this.addBooks.bind(this);
		this.removeBook = this.removeBook.bind(this);
		this.onChangeShelf = this.onChangeShelf.bind(this);
	}
	
	changeState(key, obj){
		if(key === 'currentlyReading'){
			this.setState({currentlyReading: obj})
		}
		if (key === 'wantToRead') {
			this.setState({wantToRead: obj});
		}
		if (key === 'read') {
			this.setState({read: obj});
		}
	}
	
	removeBook(book){
		const key = book.shelf;
		const index = this.state[key].findIndex( obj => obj.id === book.id );
		const restBooks = this.state[key].slice(0, index).concat(this.state[key].slice(index + 1));
		this.changeState(key, restBooks)	
	}
	
	addBooks(key, book){
		const newBooks = this.state[key].concat(book);
		book.shelf = key;
		BooksAPI.update(book,key);	
		this.changeState(key, newBooks);
	}
	
	onChangeShelf(key, book){
		if(key !== book.shelf && key !== 'none'){
			this.removeBook(book);
			this.addBooks(key, book);			
		}			
	}
	
	componentDidMount(){
		BooksAPI.getAll().then(books =>{
			for(let book of books){
				const shelf = book.shelf;
				this.addBooks(shelf, book);
			}
			if (this.props.newBook.book !== null) {
				this.addBooks(this.props.newBook.key, this.props.newBook.book)
			}
		});
	}
	
	render(){
		return(
			<div className="list-books">
            	<header className = "list-books-title" >
            		<h1>MyReads</h1> 	
				</header>
				<div className="list-books-content">
				 {this.state.bookshelfkeys.map(shelfObj => (
					 <Bookshelf key={shelfObj.key}
					 	header={shelfObj.header}
						 books={this.state[shelfObj.key]}
						 onSelectShelf={this.onChangeShelf}
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

export default ListBooks;