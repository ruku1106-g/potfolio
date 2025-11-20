//greeting contact
import React from 'react'

export default function GreetCon(props) {
  return (
    <div>
       <h1> the contact name is {props.n} </h1> {/* if we make use of class then we will use this.props.n */}
    </div>
  )
}
