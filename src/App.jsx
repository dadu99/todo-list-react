import { useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { Todolist } from './TofoList';


function App() {
 
  const [todos, setTodos] = useState([]) // array of todos
 

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, {
        id: crypto.randomUUID(), 
        title: title, 
        completed: false
      },
      ]

    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

      //console.log(todos);
  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
    <h1 className='header'>Todo List</h1>
    <Todolist todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              />
  </>
  )
}

export default App
