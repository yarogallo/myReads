import React  from 'react';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';

const QueryInput = function({query, onChangeQuery}){
	const onChangeQueryHandler = (newQuery)=>{
		onChangeQuery(newQuery)
	}
	return(
		<div className="search-books-bar">
			<Link to='/' className="close-search">Close</Link>
			<div className="search-books-input-wrapper">
				<input type="text" placeholder="Search by title or author" 
					value={query} onChange={ evt=> onChangeQueryHandler(evt.target.value) }
				/>
            </div>
		</div>
	);
}

QueryInput.propTypes = {
	query: propTypes.string.isRequired,
	onChangeQuery: propTypes.func.isRequired
}

export default QueryInput;