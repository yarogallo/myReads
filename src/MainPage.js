import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import {Link} from 'react-router-dom'

class ListBooks extends Component {
	constructor(){
		super();
		this.state={
			bookshelfHash: {
				'currentlyReading': {header: 'Currently Reading',books:[]},
				'wantToRead': {header: 'Want to Read', books:[]},
				'read': {header: 'Read', books:[]}
			},
			bookshelfKeys: ['currentlyReading', 'wantToRead', 'read']
		}
	}
	render(){
		const {bookshelfHash, bookshelfKeys} = this.state;
		return(
			<div className="list-books">
            	<header className = "list-books-title" >
            		<h1>MyReads</h1> 	
				</header>
		
				<div className="list-books-content">
				 {bookshelfKeys.map(key => (
				 	<Bookshelf key={key}
					 	header={bookshelfHash[key].header}
					 	books={bookshelfHash[key].books}
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