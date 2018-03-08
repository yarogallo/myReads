import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import {Link} from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';

class ListBooks extends Component {	
	
	constructor(props){
		super(props);
		
		this.state={
			shelfList: new Map()	
			}
		this.state.shelfList.set('currentlyReading', {header: 'Currently Reading', books:new Set()});	
		this.state.shelfList.set('wantToRead', {header: 'Want to Read', books:new Set()});	
		this.state.shelfList.set('read', {header: 'Read', books:new Set()});	
			
		this.addBooks = this.addBooks.bind(this);
		this.removeBook = this.removeBook.bind(this);
		this.moveBook = this.moveBook.bind(this);
	}

	removeBook(book){
		const key = book.shelf;
		if(this.state.shelfList.has(key)){
			const shelfList = this.state.shelfList;
			const booksList = shelfList.get(key).books;
			for(let elem of booksList){
				if (elem.id === book.id) {
					booksList.delete(elem);
				}
			}
		this.setState({shelfList});	
		BooksAPI.update(book, 'none')
		}	
	}
	
	addBooks(key, book){
		const shelfList = this.state.shelfList;
		shelfList.get(key).books.add(book);
		book.shelf = key;	
		BooksAPI.update(book,key);
		this.setState({shelfList});
	}
	
	moveBook(key, book){
		if(key !== book.shelf && key !== 'none'){
			this.removeBook(book);
			this.addBooks(key, book);			
		}			
	}
	
	bookIsInAnyShelf(book){
		const shelfKeys = this.state.shelfList.keys();
		for(let key of shelfKeys){
			const shelf = this.state.shelfList.get(key).books;
			for(let bookshelf of shelf){
				if(bookshelf.id === book.id){
					window.alert(`${book.title} is already in the library`);
					return true;
				}
			}
		}		
		return false;	
	}
	
	componentDidMount(){
		BooksAPI.getAll().then(books =>{
			for(let book of books){
				this.addBooks(book.shelf, book);
			}
			if (this.props.newBook.book !== null) {
				const {key, book} = this.props.newBook
				this.bookIsInAnyShelf(book) || this.addBooks(key, book)
			}
		});
	}
	
	createBookshelf(){
		const allShelf = [];
		this.state.shelfList.forEach( (value, key) =>{
			allShelf.push((
				<Bookshelf 
					key= {key}
					header= {value.header} 
					books={Array.from(value.books)}  
					onSelectShelf={this.moveBook}
					removeBook={this.removeBook}
				/>))
		})
		return allShelf;
	}
	
	render(){
		return(
			<div className="list-books">
            	<header className = "list-books-title" >
            		<h1>MyReads</h1> 	
				</header>
				<div className="list-books-content">
				 {[...this.createBookshelf()]}
				</div>
				
				<div className='open-search'>
						<Link to='/search'>add book</Link>
				</div>
			</div>
		);
	}
}

export default ListBooks;