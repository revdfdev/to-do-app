import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {

    const Title = () => {
      return(
          <div className="App-header">
            <h2>To-do List</h2>
          </div>
      );
    }
    const TodoForm = ({addTodo}) => {
      let input;
      return (
        <div>
          <input className="App-input" ref={node => {
            input = node;
          }} />

          <button onClick={() => {
            addTodo(input.value);
            input.value = '';
          }}>Add</button>
        </div>  
      );
    };

    return (
      <div className="App">
        <Title />
        <TodoForm className="App-intro" />
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h2>Welcome to React TO-DO-APP</h2>
    </div>*/}

      </div>
    );
  }
}

export default App;
