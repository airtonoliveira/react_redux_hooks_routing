import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state =  {
    persons: [
      {name: "Airton Oliveira", age:2019-1991},
      {name: "Leandro Oliveira", age:2019-1994}
      ],
      otherState: "some var",
      showPersons:  false
    
  }

  switchNameHandler = (newName) => {
      //DO NOT DO THIS: this.state.persons[0].name = 'Airton Luis';
      this.setState({
        persons: [
          {name: newName, age:2019-1991},
          {name: "Leandro Luis", age:2019-1994}
        ]
      })
  }

  //variavel event eh passada por padrao
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: event.target.value, age:2019-1991},
        {name: "Leandro Luis", age:2019-1994}
      ]
    })
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({
    showPersons:!doesShow
  })
}

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
            <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}
                click={this.switchNameHandler.bind(this, 'AIRTON 02')}
                change = {this.nameChangeHandler}
                >
                My Hobbies: Games
            </Person>
            <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}>
                My Hobbies: Games
            </Person>
        </div>
      )
    }

    //Este codigo:
    return (
      <div className="App">
       <h2>My React App</h2>
       <p>Airton Luis Cavalcanti Oliveira</p>
       <button 
            style={style}
            onClick={this.togglePersonsHandler}>
            Toggle Persons
       </button>
       <br></br>
      {this.state.showPersons ?
      <h3>Persons List:</h3>
         : null
      }
      {persons}
      </div>
    ); 
    //Faz o mesmo que o abaixo (ele gera o codigo abaixo):
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hi, Teste!!'));
  }
}

export default App;
