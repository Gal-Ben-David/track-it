
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
    getEmptyTodo
}