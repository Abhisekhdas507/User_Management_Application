import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card';

const UserList = () => {

  const location = useLocation();

  const [Users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  // UseEffect hook for fetching data 

  useEffect(() => {
    async function fetchUsersData() {
      setLoading(true);
      try {
        const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
        setUsers(response.data.data);
        console.log(response.data.data);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.log("Error while fetching user", error);
      }
      setLoading(false);
    };


    fetchUsersData();
  }, [page]);


  // UseEffect hook for updating the data to user List
  useEffect(() => {
    if (location.state?.updatedUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === location.state.updatedUser.id ? (location.state.updatedUser) : user
        )
      );
    }
  }, [location.state]);

  // Async function for handle Delete user by using ID

  async function handleDeleteUser(id) {
    try {
      await axios.delete(`https://reqres.in/api/users/${id}`);
      setUsers(Users.filter((user) => user.id !== id));
      toast.success("User deleted Successfully!");
    } catch (error) {
      console.error("An error occurred:", error.message);
      toast.error("Error! deleting user.");
    }
  }

  return (
    <div>
      <div className='w-11/12  max-w-[1160px] mx-auto relative pb-28'>
        <h2 className='text-white py-10 text-center text-[20px]  sm:text-[30px] '>USER LIST</h2>
        {loading ? (
          <p className='absolute text-white text-[20px] sm:text-[30px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>Loading users...</p>
        ) : (
          <div className='flex flex-wrap gap-8 justify-center'>

            {
              Users.map((user, id) => (
                <Card key={id} handleDeleteUser={handleDeleteUser} user={user} />
              ))}


          </div>
        )}

        {/* Button's for pagination */}
        <div className='text-white'>

          <div className=' absolute bottom-4 left-0 flex gap-2 '>
            <button
            className='bg-[#3db9d4] text-white px-3 py-1 rounded'
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <button
            className='bg-[#3db9d4] text-white px-3 py-1 rounded'
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
          <span className='absolute bottom-4 right-0'>Page {page} of {totalPages}</span>




        </div>
      </div>
    </div>
  )
}

export default UserList