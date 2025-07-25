import type { Todo } from "../types/todo";

export function TodoPreview({ todo }: { todo: Todo }) {
    return (
        <>
            <p className="todo-title">{todo.title}</p>
            <div className="todo-metadata">
                <span>{todo.priority}</span>
                <span>{todo.done ? 'Done' : 'In progress'}</span>
                <span>{new Date(todo.dueDate).toLocaleDateString()}</span>
            </div>
        </>
    )
}