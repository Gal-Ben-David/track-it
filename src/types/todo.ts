export interface Todo {
    id: string
    title: string
    priority: string
    status: string
    dueDate?: number | null
    createdAt: number | null
}