import { useState } from "react"
import { todoService } from "../services/todo.service"
import { SelectModal } from "./selectModal"

export function TodoForm() {
    const [todoToEdit, setTodoToEdit] = useState(todoService.getEmptyTodo())
    const [modalField, setModalField] = useState<'priority' | 'status' | null>(null)
    const [dropdownPos, setDropdownPos] = useState<{ top: number; left: number } | null>(null)


    function handleChange(ev: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = ev.target
        setTodoToEdit(prev => ({ ...prev, [name]: value }))
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
        <form className="todo-form todo-preview">
            <input type="text" name="title" placeholder="Type here..." value={todoToEdit.title} />
            <div className="headline todo-metadata">
                <input className="field" type="text" name="priority" placeholder="priority" onClick={(ev) => handleSelect('priority', ev)} readOnly />
                <input className="field" type="text" name="status" placeholder="status" onClick={(ev) => handleSelect('status', ev)} readOnly />
                <input className="field" type="date" name="due-date" placeholder="due-date" />
            </div>

            {modalField && dropdownPos && (
                <SelectModal
                    title={`Select ${modalField}`}
                    options={modalField === 'priority' ? ['low', 'medium', 'high'] : ['in progress', 'done']}
                    onSelect={handleOptionSelect}
                    onClose={() => setModalField(null)}
                    position={dropdownPos}
                />
            )}
        </form>
    )
}