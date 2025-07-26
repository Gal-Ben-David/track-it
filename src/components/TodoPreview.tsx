import type { Todo } from "../types/todo";

export function TodoPreview({ todo, setEditingTodo }: { todo: Todo, setEditingTodo: (todo: Todo) => void }) {
    return (
        <>
            <p className="todo-title">{todo.title}</p>
            <div className="todo-metadata">
                <span>{todo.priority}</span>
                <span>{todo.status}</span>
                <span> {todo.dueDate ? new Date(todo.dueDate).toLocaleDateString() : ''}</span>
                <span onClick={() => setEditingTodo(todo)}>🔘</span>
                <span>🔴</span>
            </div>
        </>
    )
}