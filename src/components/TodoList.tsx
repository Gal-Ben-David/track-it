import { useState } from "react";
import type { Todo } from "../types/todo";
import { TodoPreview } from "./TodoPreview";

export function TodoList({ todos }: { todos: Todo[] }) {
    const [display, setDisplay] = useState<string>('table')

    const handleDisplayChange = () => {
        setDisplay(prev => prev === 'table' ? 'cards' : 'table')
    }

    return (
        <>
            <button onClick={handleDisplayChange}>Toggle display</button>

            <ul className="todo-list">
                {todos.map(todo =>
                    <li key={todo.id} className={`todo-preview ${display}`}>
                        <TodoPreview todo={todo} />
                    </li>
                )}
            </ul>
        </>
    )
}