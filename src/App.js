import React, { Component } from 'react';
import './App.css';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';

class App extends Component {
	shelfList = [{
		header: 'Currently Reading',
		books: [{title: 'one', author: 'two', shelf:'reads', imgUrl:'icons/yani.jpg'},
		{title: 'lolo', author: 'two', shelf:'reads', imgUrl:'icons/yani.jpg'},
		{title: 'sera', author: 'two', shelf:'reads', imgUrl:'icons/yani.jpg'}],
	},{
		header: 'Want to Read',
		books: [{title: 'one', author: 'two', shelf:'reads', imgUrl:'icons/yani.jpg'}]
	},{
		header: 'Read',
		books: [{title: 'one', author: 'two', shelf:'reads', imgUrl:'icons/yani.jpg'},{title: 'lolo', author: 'two', shelf:'reads', imgUrl:'icons/yani.jpg'}, {title: 'one', author: 'two', shelf:'reads', imgUrl:'icons/yani.jpg'},{title: 'lolo', author: 'two', shelf:'reads', imgUrl:'icons/yani.jpg'}]
	}]
	
    render() {
        return ( 
		<div className="app">
			<ListBooks shelfList={this.shelfList}/>
			<SearchBooks />
		</div>
        );
    }
}

export default App;