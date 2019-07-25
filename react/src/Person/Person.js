import React from 'react';
import '../App.css';
import Radium from 'radium';
import './Person.css';

const person = (props) => {
    
    const style = {
        '@media(min-width: 500px)': {
            width: '450px'
        }
    };

    return (
       
    <div className="Person" style={style}>
        <p onClick={props.click}>I'm {props.name} and i am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}></input>
    </div>
   
    )

}

export default Radium(person);