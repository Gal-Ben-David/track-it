import { todoService } from '../services/todo.service'
import type { Todo } from '../types/todo'

describe('todoService.add', () => {
    beforeEach(() => {
        localStorage.clear()
    })

    it('should add a new todo to localStorage', async () => {
        const newTodo: Todo = {
            id: '999',
            title: 'Test Todo',
            priority: 'high',
            status: 'done',
            createdAt: Date.now(),
            dueDate: Date.now() + 10000,
        }

        const saved = await todoService.add(newTodo)
        expect(saved).toEqual(newTodo)

        const stored = JSON.parse(localStorage.getItem('todos') as string)
        expect(stored.length).toBe(1)
        expect(stored[0].title).toBe('Test Todo')
    })
})