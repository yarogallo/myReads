import React, { Component } from 'react';
import './style/App.css';
import {Route} from 'react-router-dom';
import ListBooks from './main-page/MainPage';
import SearchBooks from './search-page/SearchPage';

class App extends Component {
    render() {
        return ( 
		<div className="app">
			<Route exact path='/' render={()=>(
				<ListBooks/>	
			)}/>
	 
			 <Route path="/search" render={()=>(
				 <SearchBooks/>
			 )}/>
			
		</div>
        );
    }
}

export default App;