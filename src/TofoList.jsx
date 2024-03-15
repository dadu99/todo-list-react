import { TodoItem } from "./TodoItem"

export function Todolist({todos, toggleTodo, deleteTodo}) {
    return (
        <ul className='list'>
        {todos.length === 0 && 'No items yet :) '}
        {todos.map(todo => {
          return (
            <TodoItem id={todo.id} 
                       completed={todo.completed} 
                       title={todo.title}
                       key={todo.id}
                       toggleTodo={toggleTodo}
                       deleteTodo={deleteTodo}
                        />
          )
        })}
      </ul>
    )
}