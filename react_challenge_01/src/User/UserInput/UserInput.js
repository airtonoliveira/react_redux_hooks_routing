import React from 'react';

const userInput = (props) => {
    const style = {
        backgroundColor: 'White',
        font: 'Arial',
        boxShadow: '2px 2px 0px 0px #ccc'
    }
    return (

    <div>
        Type here: <input style={style} type="text" onChange={props.change} value={props.email}></input>
    </div>
    )
}
export default userInput;