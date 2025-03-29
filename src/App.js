import './App.css';
import { Route,Router, Routes } from 'react-router-dom';
import Login from './pages/Login';
import UserList from './pages/UserList';
import EditUser from './pages/EditUser';
import Home from './pages/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className='bg-[#2E073F] min-h-screen w-screen h-auto overflow-y-auto overflow-x-hidden relative'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userList' element={<UserList/>}/>
        <Route path='/editUser' element={<EditUser/>}/>
      </Routes>

    </div>
  );
}

export default App;
