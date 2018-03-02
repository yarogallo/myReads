import React, {Component} from 'react';

class Selector extends Component {
	render(){
		return (
			<div className='book-shelf-change'>
				<select>
					<option value='none' disabled={true}>Move to ...</option>
					<option value='currentlyReading'>Currently Reading</option>
					<option value='wantToRead'>Want to Read</option>
					<option value='read'>Read</option>
					<option value='none'>None</option>
				</select>
			</div>
		);
	}
}

export default Selector;