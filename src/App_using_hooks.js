import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = ( props ) => {

    const [personState, setPersonState] = useState({
        persons: [
          {name: "Airton Oliveira", age:2019-1991},
          {name: "Leandro Oliveira", age:2019-1994}
        ]
    });

    const [otherState] = useState('Some other value');

    console.log(personState, otherState);

    const switchNameHandler = () => {
      //DO NOT DO THIS: this.state.persons[0].name = 'Airton Luis';
      setPersonState({
        persons: [
          {name: "Airton Luis", age:2019-1991},
          {name: "Leandro Luis", age:2019-1994}
        ]
        //Opcao para mesclar o estado manualmente
        //otherState: personState.otherState
        // ou usar com useState:
        // const [otherState] = useState('Some other value');
      })
  }

    //Este codigo:
    return (
      <div className="App">
       <h1>My React App</h1>
       <p>Airton Luis Cavalcanti Oliveira</p>
       <button onClick={switchNameHandler}>Switch Names</button>
        <Person 
          name={personState.persons[0].name} 
          age={personState.persons[0].age}>
            My Hobbies: Bikes
       </Person>
        <Person 
          name={personState.persons[1].name} 
          age={personState.persons[1].age}>
            My Hobbies: Games
        </Person>
      </div>
    ); 
    //Faz o mesmo que o abaixo (ele gera o codigo abaixo):
    //return React.createElement('div', null, React.createElement('h1', {className: 'App'},'Hi, Teste!!'));
}

export default app;



