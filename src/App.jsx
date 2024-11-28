import './styles/App.css'
import TaskInput from "./features/todo/TaskInput";
import TaskList from "./features/todo/TaskList";
import TaskFilter from "./features/todo/TaskFilter"
import React from 'react';

function App() {
  
  return (
    <div className='App'>
      <h1>To-Do list</h1>
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>
  )
}

export default App
