import React, { Component } from "react";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

class App extends Component{
render() {
  return (
    <div>
    <h1>Destiny</h1>
    <Home/>
    <About/>
    <Contact/>
    <h2>Thank You</h2>
    </div>
  )
}
}

export default App;