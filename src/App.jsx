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
      content,
    };
    setTodoList([...todoList, todo]);
  }

  function deleteTodo(id){
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <div>
        <div>
          <h1>To Do List</h1>
          <AddTodo addTodo={addTodo}/>
          <TodoList todoList={todoList} deleteTodo={deleteTodo}/>
        </div>
      </div>
    </>
  )
}

export default App
