import React from 'react';
import PropTypes from 'prop-types'

const ShelfSelector = function({ shelf='none' }){
	return (
		<div className='book-shelf-changer'>
			<select defaultValue={shelf}>
				<option disabled={true}>Move to ...</option>
				<option value='currentlyReading'>Currently Reading</option>
				<option value='wantToRead'>Want to Read</option>
				<option value='read'>Read</option>
				<option value='none'>None</option>
			</select>
		</div>
	);
};

ShelfSelector.propTypes = {
	shelf: PropTypes.string	
};

export default ShelfSelector;