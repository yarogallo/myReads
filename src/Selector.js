import React, {Component} from 'react';

class Selector extends Component {
	render(){
		return (
			<div className='book-shelf-changer'>
				<select defaultValue={this.props.shelf || 'noneShelf'}>
					<option value='none' disabled={true}>Move to ...</option>
					<option value='currentlyReading'>Currently Reading</option>
					<option value='wantToRead'>Want to Read</option>
					<option value='read'>Read</option>
					<option value='noneShelf'>None</option>
				</select>
			</div>
		);
	}
}

export default Selector;