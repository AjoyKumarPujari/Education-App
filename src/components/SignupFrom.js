import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import {  AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
const SignupFrom = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
        
    })
 const [showPassword, setShowPassword] = useState(false)
 const [accountType, setAccountType]=useState("student")

    function changeHandler(event){
        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name] : event.target.value
            }
        ) )
    }
    
    function SubmitHandler(event){
        event.preventDefault();
        if(formData.password != formData.confirmPassword){
            toast.error("Password not match! Please Enter again");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
        const accountData = {
            ...formData
        }
        console.log(accountData);
    }


  return (
    <div>
        <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
            <button
            className={`${accountType === "student" ?
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transation-all duration-200
            `}
            onClick={()=>setAccountType("student")}>
                Student
            </button>
            <button
            className={`${accountType === "instructor" ?
            "bg-richblack-900 text-richblack-5"
            :"bg-transparent text-richblack-200"} py-2 px-5 rounded-full transation-all duration-200
            `}

            onClick={()=>setAccountType("instructor")}>
                Instructor
            </button>
        </div>
        <form onSubmit={SubmitHandler}>
            {/*First Name and Last Name */}
            <div className='flex  gap-x-4'>
                <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200 gap-2'>*</sup></p>
                <input
                    required
                    type="text"
                    name="firstName"
                    onChange={changeHandler}
                    placeholder="Enter First Name"
                    value= {formData.firstName}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                </label>
                <label className='w-full'>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200 gap-2'>*</sup></p>
                <input
                    required
                    type="text"
                    name="lastName"
                    onChange={changeHandler}
                    placeholder="Enter Last Name"
                    value= {formData.lastName}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
                </label>
            </div>
            {/* email address */}
            <label className='w-full mt-4 '>
                <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200 gap-2'>*</sup></p>
                <input
                    required
                    type="email" 
                    name="email"
                    onChange={changeHandler}
                    placeholder="Enter Email ID"
                    value= {formData.email}
                    className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                />
            </label>

            {/* create Password and Confirm Password */}
            <div className='flex gap-x-4 mt-4'>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password<sup className='text-pink-200 gap-2'>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Create  New Password"
                        value= {formData.password}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                        onClick={()=>setShowPassword((prev) => !prev)} 
                        >
                        {showPassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                         </span>
                </label>

                <label className='w-full  relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200 gap-2'>*</sup></p>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value= {formData.confirmPassword}
                        className='bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]'
                    />
                        <span className='absolute right-3 top-[38px] cursor-pointer'
                         onClick={()=>setShowPassword((prev) => !prev)}>
                        {showPassword ? 
                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 
                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                         </span>
                </label>
            </div>
            <button className='bg-yellow-50 rounded w-full p-2 font-medium mt-6'>Create Account</button>

        </form>
    </div>
  )
}

export default SignupFrom