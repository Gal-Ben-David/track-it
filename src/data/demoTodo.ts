import type { Todo } from '../types/todo'

export const demoTodos: Todo[] = [
    {
        id: '101',
        title: 'Website Development',
        priority: 'high',
        status: 'in progress',
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
        dueDate: Date.now() + 1000 * 60 * 60 * 24 * 3,
    },
    {
        id: '102',
        title: 'Buy Groceries',
        priority: 'medium',
        status: 'done',
        createdAt: Date.now() - 1000 * 60 * 60 * 12,
        dueDate: Date.now() + 1000 * 60 * 60 * 6,
    },
    {
        id: '103',
        title: 'Read UX Design Article',
        priority: 'low',
        status: 'in progress',
        createdAt: Date.now() - 1000 * 60 * 60 * 1,
        dueDate: Date.now() + 1000 * 60 * 60 * 48,
    },
]