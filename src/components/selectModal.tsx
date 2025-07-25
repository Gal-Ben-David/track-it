import { useEffect, useRef } from "react";

interface SelectModalProps {
    title: string
    options: string[]
    onSelect: (value: string) => void
    onClose: () => void
    position: { top: number; left: number }
}

export function SelectModal({ title, options, onSelect, onClose, position }: SelectModalProps) {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <div
            ref={modalRef}
            className="dropdown-modal"
            style={{
                position: 'absolute',
                top: position.top,
                left: position.left,
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                zIndex: 9999,
                padding: '0.5rem',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
            }}
        >
            <ul>
                {options.map(option => (
                    <li key={option}>
                        <button
                            style={{ display: 'block', width: '100%' }}
                            onClick={() => {
                                onSelect(option)
                                onClose()
                            }}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}