import React from 'react'
import Signup from '../pages/Signup'

const Templet = ({title, desc1, desc2, image, formtype, setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span>
                <span>{desc2}</span>
            </p>
            {formtype  === "signup" ?
                (<SignupForm/>):
                (<LoginForm/>)
            }
        </div>
    </div>
  )
}

export default Templet