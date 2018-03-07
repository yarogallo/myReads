import React from 'react';
import propTypes from 'prop-types'

const Selector = function({shelf='noneShelf'}){
	return (
		<div className='book-shelf-changer'>
			<select defaultValue={shelf}>
				<option value='none' disabled={true}>Move to ...</option>
				<option value='currentlyReading'>Currently Reading</option>
				<option value='wantToRead'>Want to Read</option>
				<option value='read'>Read</option>
				<option value='noneShelf'>None</option>
			</select>
		</div>
	);
};

Selector.propTypes = {
	shelf: propTypes.string	
};

export default Selector;