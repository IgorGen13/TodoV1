import React from "react"
import "./TodoAll.css"

interface TodoAllProps {
    todos: Array<Todo>
    deleteTodoAll: DeleteTodoAll
}


export const TodoAll = ({todos, deleteTodoAll}: TodoAllProps) => {
return (
    <div className="all">
        <p>Удалить все выполненое</p>
        <button onClick={() => deleteTodoAll(todos)} className="todo-button"><span className="fas fa-trash-alt"></span></button>
    </div>
)
}
