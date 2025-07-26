export { }

declare global {
    interface Window {
        api: {
            getTodos: () => Promise<Todo[]>
            saveTodos: (todos: Todo[]) => Promise<void>
        }
    }
}