import React, {Component} from 'react';
import {Home} from './components/home/home.component';

import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      modalSelector: '',
    }
  }
  render(){
    return (
      <div className="App">
        <Home /> 
      </div>
    );
  }
}

export default App;
