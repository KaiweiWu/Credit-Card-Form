import React from "react";

const RegisterForm = ({loggedInUser}) => {
    return (
        <div className='child-container'>
            <p>Welcome {loggedInUser.userName}</p>
        </div>
    )
}

export default RegisterForm