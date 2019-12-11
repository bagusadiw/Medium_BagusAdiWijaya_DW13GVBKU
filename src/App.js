import React, {Component} from 'react';
import {Home} from './components/home/home.component';
// import Grid from '@material-ui/core/Grid';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from 'react-router-dom';

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
