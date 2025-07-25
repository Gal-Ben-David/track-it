import { useState } from "react"
import type { Todo } from "../types/todo"
import { demoTodos } from "../data/demoTodo"
import { TodoList } from "../components/TodoList"

export function TodoIndex() {
    const [todos, setTodos] = useState<Todo[]>(demoTodos)

    return (
        <main className="todo-index main-layout">
            <h1>Track it</h1>
            <TodoList todos={todos} />
        </main>
    )
}