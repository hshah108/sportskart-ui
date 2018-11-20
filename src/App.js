import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import Category from './Category/Category';
//import Button from '@material-ui/core/Button';

class App extends Component {
   state = {
     persons: [
       { name: 'hardik', age: 40},
       { name: 'kalash', age: 11}
     ]
   }

   switchNameHandler = () => {
     console.log("Swith button is clicked!");

   }
  
  render() {
    return (
      <div className="App">
      
    <Category></Category>
      </div>
      
    );
       
  }
}

export default App;
