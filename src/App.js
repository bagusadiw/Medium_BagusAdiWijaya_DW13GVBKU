import React, {Component} from 'react';
import {CategoryContainer} from './components/category/category-container.component';
// import {Home} from './components/home/home.component';


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
        
        <CategoryContainer /> 

      </div>      
    );
  }
}

export default App;
