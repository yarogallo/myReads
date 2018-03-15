import React, {Component} from 'react';
import QueryInput from './components/QueryInput';
import ShowResult from './components/ShowResult';
import * as BooksAPI from '../../utils/BooksAPI';
import PropTypes from 'prop-types';

class BooksSearch extends Component  {
	constructor() {
		super();
		this.state = {
			queryRelatedBooks: [],
			query: '',
		}
	}
	
	searchBooks(query) {
		this.setState({
			query,
			queryRelatedBooks:[]
		});
		
		if (query) {
			BooksAPI.search(query)
				.then(result => {
					if (result.error) {
						console.log(`There was an error ${result.error}`)
						return;
					}
					const queryRelatedBooks = this.props.actualizeBookShelf ? result.map( book => this.props.actualizeBookShelf(book)) : result;
					this.setState({ queryRelatedBooks })
				})
				.catch((err) => console.log(`There was an error ${err}`))
		}
	}
		
	render() {
		const { queryRelatedBooks, query } = this.state;
		
		return(
			<div className='search-books'>
				<QueryInput query={query} onChangeQuery={(query) => {this.searchBooks(query)}}/>
				<ShowResult queryRelatedBooks={queryRelatedBooks} onSelectShelf={this.props.onSelectShelf}/>		
			</div>
		);
	}
}

BooksSearch.propTypes = {
	onSelectShelf: PropTypes.func,
	actualizeBookShelf: PropTypes.func,
}

export default BooksSearch;