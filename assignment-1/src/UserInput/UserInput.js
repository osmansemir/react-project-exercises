import React from 'react';


const UserInput = (props) => {
    const inputStyle = {
        width: "300px",
        border: "1px solid",
        margin: "1rem",
        padding: "1rem"
    }
    return(
        <div className='user-input' style={inputStyle} >
            <p>
                Input the user name
            </p>
            <input type="text" onChange={props.handleChange} id="user-input-text" value={props.initial} />
        </div>
    )
}

export default UserInput;