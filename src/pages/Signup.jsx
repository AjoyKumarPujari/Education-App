import React from 'react';
import  signupImg  from '../assets/signup.png';
import Templet from '../components/Templet';
const Signup = ({setIsLoggedIn}) => {
  return (
    <Templet
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup