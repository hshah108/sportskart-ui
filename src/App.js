import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import Category from './Category/Category';
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
      <button onClick={this.switchNameHandler}>Switch Name</button>
       <h1>Hello World</h1>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies are : reading</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>

    
    <Category></Category>
      </div>
      
    );
       
  }
}

export default App;
