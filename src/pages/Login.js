import React from 'react';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();



    // SubmitHandler function

    async function submitHandler(e) {
        
        e.preventDefault();

        try {
            const response = await axios.post("https://reqres.in/api/login",{
                email,
                password,
            });
            if(response.data.token){
                localStorage.setItem("token", response.data.token);
                toast.success("LoggedIn Successfull");
                navigate("/userList");
            }
        } catch(error){
            console.error("An error occurred:", error.message);
            toast.error("Invalide User");
            setEmail("");
            setPassword("");
        }
    };

    

    return (
        <div className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%]'>
            <div className='bg-[#402E7A] rounded-md sm:rounded-xl p-4 sm:p-5 w-[250px] sm:w-[350px]'>
                <h2 className='font-bold text-[#65a2e9] text-[25px] sm:text-3xl mb-2 sm:mb-7'>Log In</h2>

                <div>
                    <form
                        onSubmit={submitHandler}
                    >
                        <label className="w-full mt-5">
                            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
                                Email Address <sup className="text-pink-300"> *</sup></p>
                            <input
                                required
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter email address'
                                className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px] w-full mb-3"
                            />
                        </label>
                        <label className="w-full">
                            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
                                Password <sup className="text-pink-300"> *</sup></p>
                            <input
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter Password'
                                className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px] w-full"
                            />
                        </label>
                        <button className="bg-[#7A1CAC] hover:bg-[#9a24d9] rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6 w-full">
                            Log In
                        </button>
                    </form>
                </div>

                <div className="flex w-full items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-[#282828]"></div>
                    <p className="text-[#282828] font-medium leading[1.375rem]">Or</p>
                    <div className="w-full h-[1px] bg-[#282828]"></div>
                </div>

                <div className="w-full flex justify-center items-center rounded-[8px] font-medium text-[#a3a3a3]
                border border-[#282828] px-[12px] py-[8px] gap-x-2 mt-6">
                        <FcGoogle />
                        <p>Sign Up with Google</p>  
                </div>



            </div>
        </div>
    )
}

export default Login