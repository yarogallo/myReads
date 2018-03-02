import React, {Component} from 'react';
import Selector from './Selector'

class Book extends Component {
	render(){
		return(
			<div className='book'>
				<div className='book-top'>
					<div className='book-cover' style={{backgroundImage : `url(${this.props.imgUrl})`}}></div>
					<Selector />
				</div>
				<div className="book-title">{this.props.title}</div>
				<div className="book-authors">{this.props.author}</div>
			</div>
		);
	}
}

export default Book;