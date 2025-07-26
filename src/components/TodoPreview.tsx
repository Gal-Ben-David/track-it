import type { Todo } from "../types/todo";

export function TodoPreview({ todo, setEditingTodo, onRemoveTodo }:
    { todo: Todo, setEditingTodo: (todo: Todo) => void, onRemoveTodo: (id: string) => void }) {
    return (
        <>
            <p className="todo-title">{todo.title}</p>
            <div className="todo-metadata">
                <span className={`priority ${todo.priority}`}>{todo.priority}</span>
                <span>{todo.status}</span>
                <span> {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : ''}</span>
                <span className="action" onClick={() => setEditingTodo(todo)}>🔘</span>
                <span className="action" onClick={() => onRemoveTodo(todo.id)}>🔴</span>
            </div>
        </>
    )
}