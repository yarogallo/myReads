import React, { Component } from 'react';
import Bookshelf from './Bookshelf';

class ListBooks extends Component {
	render(){
		const bookshelfList = this.props.shelfList;
		return(
			<div className="list-books">
            	<header className = "list-books-title" >
            		<h1>MyReads</h1> 	
				</header>
			
				<div className="list-books-content">
					{bookshelfList.map(shelf => (
						<Bookshelf
							books={shelf.books}
							shelfHeader={shelf.header}
						/>
					))}
				</div>
					<div className='open-search'>
						<a>add book</a>
				</div>
			</div>
		);
	}
}

export default ListBooks;