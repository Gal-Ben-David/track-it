
export function DisplayToggle({ display, setDisplay }: { display: 'table' | 'cards', setDisplay: (value: 'table' | 'cards') => void }) {
    return (
        <div className="toggle-container">
            <button
                className={`toggle-btn ${display === 'table' ? 'active' : ''}`}
                onClick={() => setDisplay('table')}
            >
                Table
            </button>
            <button
                className={`toggle-btn ${display === 'cards' ? 'active' : ''}`}
                onClick={() => setDisplay('cards')}
            >
                Cards
            </button>
        </div>
    )
}