import React, { Component } from 'react';
import './App.css';
import UserOutput from './User/UserOutput/UserOutput';
import UserInput from './User/UserInput/UserInput';

class App extends Component {

  state =  {
    emails: [
      {email:"airton@udemy.com"},
      {email:"max@udemy.com"}
    ]
  }

  emailChangeHandler = (event) => {
    this.setState({
      emails: [
        {email: event.target.value},
        {email: event.target.value}
      ]
    })
}

  render() {

    return (
      <div className="App">
        <UserOutput 
          email={this.state.emails[0].email}
          change={this.emailChangeHandler}
        ></UserOutput>
        <UserInput change={this.emailChangeHandler} email={this.state.emails[0].email}></UserInput>   
      </div>
    );
  }
}

export default App;
