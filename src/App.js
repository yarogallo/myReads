import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import {Route} from 'react-router-dom'

class App extends Component {
    render() {
        return ( 
		<div className="app">
			<Route exact path='/' render={()=>(
				<MainPage/>	
			)}/>
	 
			 <Route path="/search" render={()=>(
				 <SearchPage/>
			 )}/>
			
		</div>
        );
    }
}

export default App;