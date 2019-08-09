import React from 'react';
import personCSS from './Person.module.css';

const person = (props) => {
    return (
       
    <div className={personCSS.Person} >
        <p onClick={props.click}>I'm {props.name} and i am {props.age} years old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}></input>
    </div>
   
    )

}

export default person;