import React, {Component} from 'react';
import Selector from './Selector'

class Book extends Component {
	render(){
		const {imageLink, title, authors} = this.props
		return(
			<div className='book'>
				<div className='book-top'>
					<div className='book-cover' style={{backgroundImage : `url("${imageLink}")`}}></div>
					<Selector />
				</div>
				<div className="book-title">{title}</div>
				{ authors.map( author => ( <div className='book-authors' key={author}>{author}</div>)) }
			</div>
		);
	}
}

export default Book;