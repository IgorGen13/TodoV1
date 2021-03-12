import React, { ChangeEvent, FormEvent, useState } from "react";

interface AddTodoFormProps {
    addTodo: (newTodo: string) => void
}


export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo}) => {

    const [newTodo, setNewTodo] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

     const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
         e.preventDefault();
         addTodo(newTodo)
         setNewTodo("")
     }
    return (
        <div>
            <form>
                <input 
                type="text" 
                placeholder="Введите название заметки"
                value={newTodo}
                onChange={handleChange} />
                <button 
                type="submit"
                onClick={handleSubmit}
                >Добавить</button>
            </form>

        </div>
    )
}