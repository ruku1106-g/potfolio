import React from 'react'
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import { Route,Routes } from 'react-router-dom'; //we need to import this because we are making use of routes and route

export default function App() {
  return (
    <div>
      <h1> welcome  to React Routing</h1>
      <Navbar/>
      <Routes>
      <Route path="/" element ={<Home/>}></Route>  {/* so here we have given the /, /About ryt that the url we have given in navbar that only we should give and the element is that from where we need to load so <Home/>*/}
      <Route path="/About" element ={<About/>}></Route>
      <Route path="/Contact" element ={<Contact/>}></Route>
      </Routes>
    </div>
  )
}
