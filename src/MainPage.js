import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import {Link} from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';

class ListBooks extends Component {	
	
	constructor(props){
		super(props);
		this.state={
			currentlyReading:{header:'Currently Reading', books:[]},
			wantToRead:{header: 'Want To Read', books:[]},
			read:{header: 'Read', books:[]},
			bookshelfkeys: ['currentlyReading', 'wantToRead', 'read'],		
		}
	}
	
	addBooks(key, books){
		const header = this.state[key].header;
		
		if (key === 'currentlyReading'){
			this.setState((prevState, props)=>({currentlyReading:{ header, books:prevState[key].books.concat(books)}}));
		}
		if (key === 'wantToRead'){
			this.setState((prevState, props)=>({wantToRead:{ header, books:prevState[key].books.concat(books)}}));
		}	
		if(key === 'read'){
			this.setState((prevState, props)=>({read:{ header, books:prevState[key].books.concat(books)}}));
		}
	}
	
	componentDidMount(){
		BooksAPI.getAll().then(books =>{
			const [x, y, z, w, r, g, h] = books;
			this.addBooks('read',[w, r]);
			this.addBooks('wantToRead',[x, y, z]);
			this.addBooks('currentlyReading',[g, h]);
		});
	}
	
	render(){
		return(
			<div className="list-books">
            	<header className = "list-books-title" >
            		<h1>MyReads</h1> 	
				</header>
		
				<div className="list-books-content">
				 {this.state.bookshelfkeys.map(key => (
					 <Bookshelf key={key}
					 	header={this.state[key].header}
						 books={this.state[key].books}
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