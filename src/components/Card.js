import React from 'react'
import { useNavigate} from 'react-router-dom';

const Card = ({user,handleDeleteUser}) => {


    const navigate = useNavigate();

    // Function for call Edit User page and pass the user value using state

    function handlerEditUser() {
        navigate("/editUser", { state: user });
      };

      
  return (
    <div className='w-[300px] h-[340px]  bg-[#7aecc2] rounded-xl flex flex-col items-center'>
                <div className='pt-8'>
                  <div className='box-border w-[150px]  h-[150px] rounded-full overflow-hidden'>

                    <img className='w-full object-cover' src={user.avatar} alt={user.first_name} />

                  </div>

                </div>
                <div className='flex flex-col items-center py-8'>
                  <h3 className='text-[#0f265c]'>{user.first_name} {user.last_name}</h3>
                  <p className='text-[#0f265c]'>{user.email}</p>
                </div>

                <div className='w-full px-4 flex justify-between'>
                  <button onClick={() => handlerEditUser(user)} className='bg-yellow-500 text-white px-3 py-1 rounded'>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteUser(user.id)} className='bg-red-500 text-white px-3 py-1 rounded'>
                    Delete
                  </button>
                </div>

              </div>
  )
}

export default Card