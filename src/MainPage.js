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
			 shelfList:[
				 {key:'currentlyReading', header:'Currently Reading'},
				 {key:'wantToRead', header:'Want To Read'},
				 {key:'read', header:'Read'}
				]	
			}
		this.addBook = this.addBook.bind(this);
		this.moveBook = this.moveBook.bind(this);
		
	}
	
	addBook(books=[]){
		const shelfBooks = this.state;
		books.forEach(book => {
			shelfBooks[book.shelf].push(book);
		});
		this.setState({shelfBooks});
	 }
	
	moveBook(book, shelf){
		const currentShelfs = this.state;
		const index = this.state[book.shelf].findIndex( elem => elem.id === book.id);
		currentShelfs[book.shelf].splice(index, 1);
		if (shelf !== 'none') {
			currentShelfs[shelf].push(book);
		}
		this.setState({currentShelfs});
		BooksAPI.update(book, shelf);		
	}
	
	componentDidMount(){
		BooksAPI.getAll().then(books =>{this.addBook(books)});
	}
	
	render(){
		return(
			<div className="list-books">
            	<header className = "list-books-title" >
            		<h1>MyReads</h1> 	
				</header>
				<div className="list-books-content">
				 {this.state.shelfList.map(shelf =>(
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

export default ListBooks;