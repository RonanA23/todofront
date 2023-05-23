import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Items from './Components/Items';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setItems } from './API/todoSlice';

function App() {
  const stuff= useSelector((state)=>state.todos.value)
  console.log('REDUX STUFF',stuff)
  const [data,setData]=useState(['1','2','3'])
  const dispatch=useDispatch()

  useEffect(()=>{
    const fetchData=async()=>{
      const response= await fetch('https://clownfish-garment.cyclic.app/api/todos')
      const items= await response.json()
      
      if(!response.ok){
        console.log('RESPONSES are',response)
      }
      else{
        console.log('items  are',items)
        dispatch(setItems(items))
      }

    }
    fetchData()  
  },[])
  return (
    <div className="App">
      <div className='bg-teal-400 h-[700px]'>
      <Navbar/>
       <Form/>
       {stuff.map((item)=>(
        <Items item={item}/>
       ))}

      </div>
     

    </div>
  );
}

export default App;
