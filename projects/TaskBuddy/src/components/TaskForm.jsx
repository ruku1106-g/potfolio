import React from 'react'
import {useState} from "react"

export default function TaskForm(addTask) {
 let[task, setTask] = useState(" ");
 let[priority, setPriority] = useState("Medium");
 let[category, setCategory] = useState("General");

 const handleSubmit =() => {
  addTask({text:task, priority, category, completed:false})
 }
  return (
    <div>
      <h3>Task Form Comp  onent</h3>
      <form className="task-form" onSubmit={handlesubmit}>
      <div id='inp'>
     <input type="text" placeholder="Enter your task" onChange={(e)=>setTask(e.target.value)}/>
    <span><button type="submit">Add Task</button></span> 
    <h1>{task} {priority} {category}</h1>
    </div>

    <div id ='btns'>
    <select onChange={(e)=>setPriority(e.target.value)}>
      <option value="high">Hight</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
      </select>


       <select onChange={(e)=>setCategory(e.target.value)}>
      <option value="general">General</option>
      <option value="work">Work</option>
      <option value="personal">Personal</option>
      </select>
      </div>
      </form>
      
    </div>
  )
}
