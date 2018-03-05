import React, { Component } from 'react';
import './App.css';
import MainPage from './MainPage';
import SearchPage from './SearchPage';

class App extends Component {
    render() {
        return ( 
		<div className="app">
			 <MainPage />
			<SearchPage />
		</div>
        );
    }
}

export default App;