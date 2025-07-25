import type { Todo } from '../types/todo'

export const demoTodos: Todo[] = [
    {
        id: '101',
        title: 'Website Development',
        priority: 'high',
        done: false,
        createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
        dueDate: Date.now() + 1000 * 60 * 60 * 24 * 3,
    },
    {
        id: '102',
        title: 'Buy Groceries',
        priority: 'medium',
        done: true,
        createdAt: Date.now() - 1000 * 60 * 60 * 12,
        dueDate: Date.now() + 1000 * 60 * 60 * 6,
    },
    {
        id: '103',
        title: 'Read UX Design Article',
        priority: 'low',
        done: false,
        createdAt: Date.now() - 1000 * 60 * 60 * 1,
        dueDate: Date.now() + 1000 * 60 * 60 * 48,
    },
]