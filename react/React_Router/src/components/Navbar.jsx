import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        {/* a href="url">home this is used as an anchor tag to link the files and all but in react we dont make use of this we make us of Link tage */} 
    <Link to='/'>Home</Link>   {/*so here / will be in the same page*/} 
    <br>
    </br>
    <Link to='/About'>About</Link> {/*  we have genreated the URL, now load the content in app.js */}
    <br>
    </br>
    <Link to='/Contact'>Contact</Link>
    </div>
  )
}
