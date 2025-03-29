import React from 'react';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditUser = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const user = location.state;
  // console.log(user);


  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);




  // Async fuction for update User Data

  async function updateUserHandler(e) {
    e.preventDefault();

    try {
      const response = await axios.put(`https://reqres.in/api/users/${user.id}`, {
        first_name: firstName,
        last_name: lastName,
        email: email,
      });

      if (response.status === 200) {
        toast.success("Update Successfull");
        console.log(user);
        setTimeout(() => navigate("/userList",{state: {updatedUser: {...user,first_name:firstName,last_name:lastName,id:user.id,email}}}), 1000)
      }

    } catch (error) {
      console.error("An error occurred:", error.message);
      toast.error("Failed to update User. Please try again.");
    }
  }


  return (
    <div >
      <div className=' w-11/12  max-w-[1160px] mx-auto'>
        <h2 className='text-white py-10 text-center text-[30px]'>Edit User</h2>
        <form onSubmit={updateUserHandler} className='absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] w-[80%] sm:w-[400px] md:w-[460px] lg:w-[500px] mx-auto'>
          {/* First Name */}
          <label className="w-full mt-5">
            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
              First Name <sup className="text-pink-300"> *</sup></p>
            <input
              required
              type="text"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder='Updated First Name'
              className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px] w-full mb-3"
            />
          </label>
          {/* Last Name */}
          <label className="w-full mt-5">
            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
              Last Name <sup className="text-pink-300"> *</sup></p>
            <input
              required
              type="text"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder='Updated Last Name'
              className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px] w-full mb-3"
            />
          </label>
          {/* Email */}
          <label className="w-full mt-5">
            <p className="text-[0.875rem] text-[#EBD3F8] mb-1 leading-[1.375rem]">
              Email <sup className="text-pink-300"> *</sup></p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
              className="bg-[#4C3BCF] rounded-[0.5rem] text-[#b3d0f6]  p-[8px] w-full mb-3"
            />
          </label>
          <div className='flex justify-between py-5'>
            <button type='submit' className='bg-green-500 text-white px-3 py-1 rounded'>
              Save
            </button>
            <button onClick={() => navigate("/UserList")} className='bg-red-500 text-white px-3 py-1 rounded'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditUser