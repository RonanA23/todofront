import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Items from './Components/Items';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from './API/todoSlice';
import Home from './Pages/Home';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Signin from './Pages/Signin';
import Register from './Pages/Register'

function App() {
  const user=useSelector((state)=>state.users.value)

  return (
    <div className="App">
      <div className='bg-teal-400 h-[700px]'>
        <Router>
          <Navbar/>
          <Routes>
          
            <Route path='/' element={user?<Home/>:<Navigate to='/register'/>}/>
            <Route path='/signin' element={!user?<Signin/>:<Navigate to='/'/>}/>
            <Route path='/register' element={!user?<Register/>:<Navigate to='/'/>}/>

          </Routes>

        </Router>
 

     

      </div>
     

    </div>
  );
}

export default App;
