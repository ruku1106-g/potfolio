import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'
export default function App() {
  const addTask = () => {
  }
  return (
    <div>
      <header>
      <h1>TaskNest</h1>
      <p><i>Your friendly Task Manager</i></p>
      </header>
      <TaskForm addTask = {addTask}/>
      <TaskList/>
      <ProgressTracker/>
      <button>Clear All Tasks</button>
    </div>
  )
}
