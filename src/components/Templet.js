import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from "../components/SignupFrom"
import LoginForm from "../components/LoginForm"

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
                (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }
            <div>
                <div></div>
                <div>OR</div>
                <div></div>
            </div>
            <button>
                <p>Sign Up With Google</p>
            </button>
            
        </div>
        <div>
            <img src={frameImage} 
            alt="Pattern"
            width={550}
            height={504}
            loading='lazy'
            />
            <img src={image} 
            alt="Students"
            width={550}
            height={490}
            loading='lazy'
            />
        </div>
    </div>
  )
}

export default Templet