type Todo = {
    text: string;
    complete: boolean;
    id: number;
}

type ToggleTodo = (selectedTodo: Todo) => void

type AddTodo = (newTodo: string) => void

type DeleteTodo = (deleteTodo: MouseEventHandler<number> ) => void

type DeleteTodoAll = (deleteTodoAll: MouseEventHandler<number> ) => void