import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';

class App extends Component {
    render() {
        return ( <div className = "App">
            <Header/>
            <div className = "container-fluid text-center">
                <div className = "row content">
                    <Sidebar />
                <Main />
                </div> 
            </div> 
            
            </div>
        );
    }
}

export default App;