import { useState } from "react";
import type { Todo } from "../types/todo";
import { TodoPreview } from "./TodoPreview";
import { TodoForm } from "./TodoForm";

export function TodoList({ todos }: { todos: Todo[] }) {
    const [display, setDisplay] = useState<string>('table')
    const [todoToEdit, setTodoToEdit] = useState(false)

    const handleDisplayChange = () => {
        setDisplay(prev => prev === 'table' ? 'cards' : 'table')
    }

    return (
        <>
            <button onClick={handleDisplayChange}>Toggle display</button>
            <button onClick={() => setTodoToEdit(prev => !prev)}>Add task</button>

            <ul className="todo-list">
                {display === 'table' &&
                    <li className="headline todo-preview">
                        <p>Task</p>
                        <div className="headline todo-metadata">
                            <span>Priority</span>
                            <span>Status</span>
                            <span>Due Date</span>
                        </div>
                    </li>
                }

                {todoToEdit && <TodoForm />}

                {todos.map(todo =>
                    <li key={todo.id} className={`todo-preview ${display}`}>
                        <TodoPreview todo={todo} />
                    </li>
                )}
            </ul>
        </>
    )
}