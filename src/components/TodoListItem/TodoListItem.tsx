import React from "react"
import "./TodoListItem.css"

interface TodoListProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
    deleteTodo: DeleteTodo;
}


export const TodoListItem = ({todo, toggleTodo, deleteTodo}: TodoListProps) => {

    

    return (
        <div className="todo">
            
                <label className={todo.complete ? "complete": ""}>
                    <input 
                    type="checkbox" 
                    checked={todo.complete}
                    onChange={() => toggleTodo(todo)}
                    />
                    
                    <strong className="todo-text">{todo.text}</strong></label>
                    <small className="todo-time">{new Date().toLocaleDateString()}</small>

                    <button onClick={() => deleteTodo(todo)} className="todo-button" ><span className="far fa-trash-alt"></span></button>

                    
            
        </div>
    )
}