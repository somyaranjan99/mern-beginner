import React,{createContext,useReducer}  from 'react';
import { reducer,intialstate } from './components/useReducer';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import {Routes, Route } from 'react-router-dom';
import Logout from './components/Logout';
import Errorpage from './components/Errorpage';
export const userContext= createContext();

export const RouterComponent=()=>{
  return(<>
        <Navbar />
  <Routes>
         <Route exact path='/' element={<Home />}/>
         <Route path='/about' element={<About />}/>
         <Route path='/contact' element={<Contact />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/signup' element={<Signup />}/>
         <Route path='/logout' element={<Logout />} />
         <Route path="*" element={<Errorpage />}/>
  </Routes>
  
  </>)
}
const App =()=>{
  const [state,dispatch]=useReducer(reducer,intialstate)
  return (<>
      <userContext.Provider value={{state,dispatch}}>
      <RouterComponent/>
      </userContext.Provider>

  </>)
}

export default App;
