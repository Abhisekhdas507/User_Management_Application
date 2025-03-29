import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../accets/logo/logo.png";
import { useState } from 'react';

const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // if(localStorage.getItem("token"))
    // {
    //     setIsLoggedIn(true);
    // }
  
      

    return (
        <div>
            <div className='flex justify-between items-center w-11/12  max-w-[1160px] py-4 sm:py-8 mx-auto'>
                <div className='w-[150px] sm:w-[200px]'>
                    <Link to='/'>
                        <img src={logo} loading='lazy' />
                    </Link>
                </div>

                <div>
                    {!isLoggedIn &&
                        <Link to="/login">
                            <button className='bg-[#7A1CAC] hover:bg-[#9724d5] text-[#EBD3F8] text-[12px] sm:text-[14px] md:text-[16px] py-[2px] sm:py-[4px] md:py-[6px] px-[5px] sm:px-[10px] md:px-[12px] rounded-[3px] sm:rounded-[5px] md:rounded-[8px] border border-[#AD49E1]'>
                                Log in
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar