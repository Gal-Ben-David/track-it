import { useState } from "react"
import type { Todo } from "../types/todo"
import { demoTodos } from "../data/demoTodo"
import { TodoList } from "../components/TodoList"
import { v4 as uuidv4 } from 'uuid'

export function TodoIndex() {
    const [todos, setTodos] = useState<Todo[]>(demoTodos)
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

    const onRemoveTodo = (id: string) => {
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }

    const onSubmit = (todo: Todo) => {
        const isUpdate = todo.id
        if (isUpdate) {

            setTodos(prev =>
                prev.map(t => t.id === todo.id ? { ...t, ...todo } : t)
            )
        } else {
            const newTodo: Todo = {
                ...todo,
                id: uuidv4(),
                createdAt: Date.now()
            }
            setTodos(prev => [newTodo, ...prev,])
        }

        setEditingTodo(null)
    }

    console.log('todos', todos)

    return (
        <main className="todo-index main-layout">
            <h1>Track it</h1>
            <TodoList todos={todos}
                onSubmit={onSubmit}
                editingTodo={editingTodo}
                setEditingTodo={setEditingTodo}
                onRemoveTodo={onRemoveTodo} />
        </main>
    )
}