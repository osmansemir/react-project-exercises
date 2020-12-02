import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return(
        <div className='user-output' >
            <p>
                User Name: {props.name}
            </p>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default UserOutput;