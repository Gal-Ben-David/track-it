
const getEmptyTodo = () => {
    return {
        title: '',
        priority: '',
        done: false,
    }
}

export const todoService = {
    getEmptyTodo
}