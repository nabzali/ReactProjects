import { useState } from 'react'
import Task from './components/Task';
import './App.css'
import TaskList from './components/TaskList'

const tasks = [
  new Task(1, "My Task", "Sample Body", true),
  new Task(2, "Second Task", "Sample Body 2", false)
];

function App() {

  return (
    <>
      <TaskList tasks={tasks}></TaskList>
    </>
  )
}

export default App
