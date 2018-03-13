import React from 'react';
import Bookshelf from './components/Bookshelf/';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const BookList = function({ shelfs, shelfList, onSelectShelf } ) {
	return (
		<div className="list-books">
            <header className = "list-books-title" >
            	<h1>MyReads</h1> 	
			</header>
			<div className="list-books-content">
				{shelfList.map(shelf =>(
					<Bookshelf key={shelf.key}
						header={shelf.header}
						books={shelfs[shelf.key]}
						onSelectShelf={onSelectShelf}
					/>
				 ))}
			</div>	
			<div className='open-search'>
				<Link to='/search'>add book</Link>
			</div>
		</div>
	);
};

BookList.protoTypes = {
	shelfs: PropTypes.object.isRequired,
	shelfList: PropTypes.array.isRequired,
	onSelectShelf: PropTypes.func
}; 

export default BookList;