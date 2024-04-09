import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css'

function App() {

  const [todoList, setTodoList]  = useState([]);

  function addTodo(content){
    const todo = {
      id: crypto.randomUUID(),
      edit: false,
      done: false,
      selected: false,
      content,
    };
    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id){
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  function selectedTodo(id){
    setTodoList(todoList.map((todo) => todo.id === id ? 
    {...todo, selected: !todo.selected } : 
    {...todo, selected : false}))
  }

  function validateTodo(id){
    setTodoList(todoList.map((todo) => todo.id === id ? {...todo, done : !todo.done} : todo))
  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center p-20'>
        <div className='card container'>
          <h1 className='mb-20'>To Do List</h1>
          <AddTodo addTodo={addTodo}/>
          <TodoList todoList={todoList} deleteTodo={deleteTodo} selectedTodo={selectedTodo} validateTodo={validateTodo}/>
        </div>
      </div>
    </>
  )
}

export default App
