import { useEffect, useState } from "react"
import type { Todo } from "../types/todo"
import { TodoList } from "../components/TodoList"
import { v4 as uuidv4 } from 'uuid'
import { todoService } from "../services/todo.service"

export function TodoIndex() {
    const [todos, setTodos] = useState<Todo[]>([])
    const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

    useEffect(() => {
        const loadTodos = async () => {
            try {
                await todoService.initDemoData()
                const loadedTodos = await todoService.query()
                setTodos(loadedTodos)
            } catch (err) {
                console.error('Failed to load todos')
            }
        }

        loadTodos()
    }, [])

    const onRemoveTodo = async (id: string) => {
        await todoService.remove(id)
        const updatedTodos = todos.filter(todo => todo.id !== id)
        setTodos(updatedTodos)
    }

    const onSubmit = async (todo: Todo) => {
        const isUpdate = todo.id
        if (isUpdate) {
            await todoService.save(todo)
            setTodos(prev => prev.map(t => t.id === todo.id ? { ...t, ...todo } : t))
        } else {
            const newTodo: Todo = {
                ...todo,
                id: uuidv4(),
                createdAt: Date.now()
            }

            await todoService.add(newTodo)
            setTodos(prev => [newTodo, ...prev,])
        }

        setEditingTodo(null)
    }

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