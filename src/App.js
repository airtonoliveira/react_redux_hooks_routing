import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state =  {
    persons: [
      {name: "Airton Oliveira", age:2019-1991},
      {name: "Leandro Oliveira", age:2019-1994}
    ]
  }

  render() {
    //Este codigo:
    return (
      <div className="App">
       <h1>My React App</h1>
       <p>Airton Luis Cavalcanti Oliveira</p>
       <button>Switch Names</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Games</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Games</Person>
      </div>
    ); 
    //Faz o mesmo que o abaixo (ele gera o codigo abaixo):
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hi, Teste!!'));
  }
}

export default App;
