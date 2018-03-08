import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import {Route} from 'react-router-dom'

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			newBook : {key:'', book: null}
		}
		this.addNewBook = this.addNewBook.bind(this);
	}
	addNewBook(key, book){
		this.setState({
			newBook: {key, book}
		});
		
	}
    render() {
        return ( 
		<div className="app">
			<Route exact path='/' render={()=>(
				<MainPage
					newBook={this.state.newBook}
				/>	
			)}/>
			 
			 <Route path="/search" render={()=>(
				 <SearchPage onSelectShelf={this.addNewBook} />
			 )}/>
			
		</div>
        );
    }
}

export default App;