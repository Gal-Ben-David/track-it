export interface Todo {
    id: string
    title: string
    priority: 'low' | 'medium' | 'high'
    done: boolean
    dueDate: number
    createdAt: number
}