import { useState } from 'react';
import './App.css';
import { AddTodoForm } from './components/AddTodoForn/AddTodoForm';
import { TodoAll } from './components/TodoAll/TodoAll';
import { TodoList } from './components/TodoList/TodoList';

const initialTodos: Array<Todo> = [
  { text: "Walk", complete: true, id:1},
  { text: "Погулять", complete: false, id:2},
  { text: "Обнять брата", complete: false, id:3}
]

const App = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: ToggleTodo = selectedTodo => {
    setTodos(todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo
    }))
  }

  const deleteTodo: DeleteTodo = (deleteTodo: Todo) => {
    setTodos(todos.filter( el => el.id !== deleteTodo.id))
  }

  const deleteTodoAll: DeleteTodoAll = (deleteTodoAll: Todo) => {
    setTodos(todos.filter(todo => todo.complete === false))
  } 
  
  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" &&
    setTodos([...todos, {text: newTodo, complete: false, id: Math.random()*1000}])
  }

  return (
    <div>
      <header><h1>Todo List</h1></header>
      <AddTodoForm addTodo={addTodo}/>
      <TodoAll 
      todos={todos}
      deleteTodoAll={deleteTodoAll}/>
      <TodoList 
      todos={todos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
      
      />
      
    </div> 
  )
}

export default App;
