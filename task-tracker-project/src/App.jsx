import { useState } from 'react'
import Task from './components/Task';
import './App.css'
import TaskList from './components/TaskList'

const tasks = [
  new Task(1, "My Task", "Sample Body", true, "High", new Date(2023, 8, 28)),
  new Task(2, "Second Task", "Sample Body 2", false, "Low", new Date(2023, 9, 3))
];

function App() {

  return (
    <>
      <TaskList tasks={tasks}></TaskList>
    </>
  )
}

export default App
