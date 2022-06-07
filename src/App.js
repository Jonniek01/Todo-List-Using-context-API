import React from 'react'
import './App.css'
import { TodoForm } from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoProvider from './Providers/TodoProvider'

export const App = () => {
  return (
    <div className='App' >
      <header>
        <h1>TODO LIST USING CONTEXT API</h1>
      </header>
      <TodoProvider>
        <TodoForm/>
        <TodoList/>
      </TodoProvider>

    </div>
  )
}
