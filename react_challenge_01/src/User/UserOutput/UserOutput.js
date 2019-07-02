import React from 'react';
import UserInput from '../UserInput/UserInput';
import './User.css';

const userOutput = (props) => {
    
    return (

    <div>
        <div className="User">
            <div className="textRevealContainer">
                <div className="textReveal rotateY">
                    <div><div>
                    <p>{props.email}</p>
                    </div> </div>
                </div>
            </div>
        </div>       
    </div>
    )
}
export default userOutput;