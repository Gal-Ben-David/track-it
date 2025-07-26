import { useEffect, useRef } from "react";

interface SelectModalProps {
    options: string[]
    onSelect: (value: string) => void
    onClose: () => void
    position: { top: number; left: number }
}

export function SelectModal({ options, onSelect, onClose, position }: SelectModalProps) {
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
                top: position.top + 5,
                left: position.left,
            }}
        >
            <ul className="option-list">
                {options.map(option => (
                    <li key={option} >
                        <button
                            className={`${option}`}
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