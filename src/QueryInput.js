import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class QueryInput extends Component {
	render(){
		const {query, onChangeQuery} = this.props;
		return(
			<div className="search-books-bar">
				<Link to='/' className="close-search">Close</Link>
				<div className="search-books-input-wrapper">
					<input type="text" placeholder="Search by title or author" 
						value={query}
						onChange={(evt)=>{
							onChangeQuery(evt.target.value);
						}}/>
              	</div>
			</div>
		);
	}
}

export default QueryInput;