import React, {Component} from 'react';

class QueryInput extends Component {
	render(){
		const {query, onChangeQuery} = this.props;
		return(
			<div className="search-books-bar">
				<a className="close-search">Close</a>
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