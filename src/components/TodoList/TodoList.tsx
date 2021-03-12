import React from "react"
import { TodoListItem } from "../TodoListItem/TodoListItem"
import "./TodoList.css"

interface TodoListProps {
  
    todos: Array<Todo>
    toggleTodo: ToggleTodo
    deleteTodo: DeleteTodo
}


export const TodoList = ({todos,  toggleTodo, deleteTodo}: TodoListProps) => {
    return (
        <div className="todo-container">
            
            <ul>
            
                {todos.map(todo => {
                    return (
                    <TodoListItem 
                    key={todo.text}
                    todo={todo} 
                    toggleTodo={toggleTodo}
                    deleteTodo={deleteTodo}                   
                     /> 
                    )
                })}
            </ul>
        </div>
    )
}
