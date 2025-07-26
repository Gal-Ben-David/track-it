import { useState } from "react";
import type { Todo } from "../types/todo";
import { TodoPreview } from "./TodoPreview";
import { TodoForm } from "./TodoForm";
import { todoService } from "../services/todo.service";
import { DisplayToggle } from "./DisplayToggle";

export function TodoList({ todos, onSubmit, editingTodo, setEditingTodo, onRemoveTodo }:
    {
        todos: Todo[],
        onSubmit: (todo: Todo) => void,
        editingTodo: Todo | null,
        setEditingTodo: (todo: Todo) => void,
        onRemoveTodo: (id: string) => void
    }) {

    const [display, setDisplay] = useState<'table' | 'cards'>('table')

    return (
        <>
            <div className="actions">
                <DisplayToggle setDisplay={setDisplay} display={display} />
                <button className="adding-task-btn" onClick={() => setEditingTodo(todoService.getEmptyTodo())}>➕</button>
            </div>

            <ul className={`todo-list ${display}`}>
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