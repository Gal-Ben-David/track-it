import { useState } from "react";
import type { Todo } from "../types/todo";
import { TodoPreview } from "./TodoPreview";
import { TodoForm } from "./TodoForm";
import { todoService } from "../services/todo.service";

export function TodoList({ todos, onSubmit, editingTodo, setEditingTodo, onRemoveTodo }:
    {
        todos: Todo[],
        onSubmit: (todo: Todo) => void,
        editingTodo: Todo | null,
        setEditingTodo: (todo: Todo) => void,
        onRemoveTodo: (id: string) => void
    }) {
    const [display, setDisplay] = useState<string>('table')

    const handleDisplayChange = () => {
        setDisplay(prev => prev === 'table' ? 'cards' : 'table')
    }

    return (
        <>
            <button onClick={handleDisplayChange}>Toggle display</button>
            <button onClick={() => setEditingTodo(todoService.getEmptyTodo())}>Add task</button>

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

                {editingTodo && <TodoForm onSubmit={onSubmit} display={display} todo={editingTodo} />}

                {todos.map(todo =>
                    <li key={todo.id} className={`todo-preview ${display}`} style={{ display: editingTodo?.id === todo.id ? 'none' : 'flex' }}>
                        <TodoPreview todo={todo} setEditingTodo={setEditingTodo} onRemoveTodo={onRemoveTodo} />
                    </li>
                )}
            </ul>
        </>
    )
}