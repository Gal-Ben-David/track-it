import type { Todo } from "../types/todo"
import { storageService } from "./localStorage.service"
import { demoTodos } from "../data/demoTodo"

const ENTITY_TYPE = 'todos'

const initDemoData = async () => {
    const existingTodos = await storageService.query<Todo>(ENTITY_TYPE)
    if (!existingTodos.length) {
        storageService.saveMany<Todo>(ENTITY_TYPE, demoTodos)
    }
}

const query = (): Promise<Todo[]> => {
    return storageService.query(ENTITY_TYPE)
}

const add = (todo: Todo): Promise<Todo> => {
    return storageService.post(ENTITY_TYPE, todo)
}

const save = (todo: Todo): Promise<Todo> => {
    return storageService.put(ENTITY_TYPE, todo)
}

const remove = (id: string) => {
    return storageService.remove<Todo>('todos', id)
}

const getEmptyTodo = () => {
    return {
        id: '',
        title: '',
        priority: '',
        status: 'in progress',
        dueDate: null,
        createdAt: null
    }
}

export const todoService = {
    getEmptyTodo,
    query,
    add,
    save,
    remove,
    initDemoData
}