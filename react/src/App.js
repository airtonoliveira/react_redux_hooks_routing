import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';

class App extends Component {

  state =  {
    persons: [
      {id: '1', name: "Airton Oliveira", age:2019-1991},
      {id: '2', name: "Leandro Oliveira", age:2019-1994},
      {id: '3', name: "Sandra Oliveira", age:2019-1994},
      {id: '4', name: "Renata Alves", age:2019-1994}
      ],
      otherState: "some var",
      showPersons:  false
    
  }

  //variavel event eh passada por padrao
nameChangeHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex( p => {
      return p.id===id;
    });

    //Option 01 - Copiar Object da lista
    let person = {...this.state.persons[personIndex]};
    //Option 02 - Copiar Object da lista
    //let person = {...this.state.persons.find(p => p.id===id)};
    //Option 04 - Copiar Object da lista
    //let person = Object.assign({}, this.state.persons[personIndex];
    
    //NOT a good option: Is not recommended to copy directly from the state
    //let person = this.state.persons[personIndex];

    person.name = event.target.value;

    let persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
}

deletePersonHandler = (personIndex) => {
    //slice(): When the arguments are omitted 
    //this method just makes a copy of the array:
    // let personDeleteList = this.state.persons.slice();
    //Spread operator for copying a array:
    let personDeleteList = [...this.state.persons];
    //deleta o registro do array:
    personDeleteList.splice(personIndex, 1);
    this.setState({persons:personDeleteList});
  }


togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({
    showPersons:!doesShow
  })
}

  render() {

    let persons = null;
    let buttonClass ='';
    if(this.state.showPersons){
      persons = (
        <div>
             {this.state.persons.map((person, index) => {
              return (
                  <Person 
                      key={person.id}
                      name={person.name} 
                      age={person.age}
                      click={() => this.deletePersonHandler(index)}
                      change={(event) => this.nameChangeHandler(event, person.id)}
                      >
                      My Hobbies: Games
                  </Person>
              );
            })}
           
        </div>
      );
      buttonClass= classes.Red;
    }

    let assignedClasses = [];
    if(this.state.persons.length <=2){
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
        <h2>My React App</h2>
        <p className={assignedClasses.join(' ')}>Friends List</p>
        <button 
              className={buttonClass}
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
    );}
}

export default App;