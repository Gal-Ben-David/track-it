import { useEffect, useState } from "react"
import { todoService } from "../services/todo.service"
import { SelectModal } from "./selectModal"
import type { Todo } from "../types/todo"

export function TodoForm({ todo, onSubmit, display, setEditingTodo }:
    { todo: Todo, onSubmit: (todo: Todo) => void, display: string, setEditingTodo: (todo: Todo | null) => void }) {
    const [todoToEdit, setTodoToEdit] = useState(todo ?? todoService.getEmptyTodo())
    const [modalField, setModalField] = useState<'priority' | 'status' | null>(null)
    const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null)

    const fields = [
        {
            name: 'priority',
            label: 'Priority',
            type: 'text' as const,
            isModal: true,
        },
        {
            name: 'status',
            label: 'Status',
            type: 'text' as const,
            isModal: true,
        },
        {
            name: 'dueDate',
            label: 'Due Date',
            type: 'date' as const,
            isModal: false,
        },
    ]

    useEffect(() => {
        setTodoToEdit(todo)
    }, [todo])

    function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = ev.target
        setTodoToEdit(prev => ({
            ...prev,
            [name]: name === 'dueDate' ? new Date(value).getTime() : value
        }))
    }

    function handleSelect(field: 'priority' | 'status', ev: React.MouseEvent<HTMLInputElement>) {
        const rect = ev.currentTarget.getBoundingClientRect()
        setDropdownPos({ top: rect.bottom + window.scrollY, left: rect.left + window.scrollX })
        setModalField(field)
    }

    const handleOptionSelect = (value: string) => {
        setTodoToEdit(prev => ({ ...prev, [modalField!]: value }))
    }

    return (
        <form className={`todo-form todo-preview ${display}`} onSubmit={(ev) => { ev.preventDefault(); onSubmit(todoToEdit) }}>
            <input type="text" name="title" placeholder="Type here..." value={todoToEdit.title} onChange={handleChange} />

            <div className="headline todo-metadata">
                {fields.map(field => (
                    <input
                        key={field.name}
                        className="field"
                        type={field.type}
                        name={field.name}
                        placeholder={field.label}
                        readOnly={field.isModal}
                        onClick={field.isModal ? (ev) => handleSelect(field.name as 'priority' | 'status', ev) : undefined}
                        onChange={field.isModal ? undefined : handleChange}
                        value={
                            field.name === 'dueDate'
                                ? todoToEdit.dueDate
                                    ? new Date(todoToEdit.dueDate).toISOString().split('T')[0]
                                    : ''
                                : (todoToEdit as any)[field.name]
                        }
                    />
                ))}

                <button className="save-task-button" disabled={!todoToEdit.title}>✔️</button>
                {todoToEdit && <button className="save-task-button" type="button" onClick={() => setEditingTodo(null)}>✖️</button>}
            </div>

            {modalField && dropdownPos && (
                <SelectModal
                    options={modalField === 'priority' ? ['low', 'medium', 'high'] : ['in progress', 'done']}
                    onSelect={handleOptionSelect}
                    onClose={() => setModalField(null)}
                    position={dropdownPos}
                />
            )}
        </form>
    )
}