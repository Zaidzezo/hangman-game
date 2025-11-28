/**
 * Keyboard Component
 * Displays letter buttons in a grid layout
 * Shows visual feedback for correct (green) and incorrect (red) guesses
 * Buttons are disabled after being guessed
 */

const KEYS = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z",
]

type KeyboardProps = {
  disabled?: boolean
  activeLetters: string[] // Correct guesses
  inactiveLetters: string[] // Incorrect guesses
  addGuessedLetter: (letter: string) => void
}

export function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
  disabled = false,
}: KeyboardProps) {
  return (
    <div className="keyboard-grid">
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        const isDisabled = isInactive || isActive || disabled

        return (
          <button
            key={key}
            onClick={() => addGuessedLetter(key)}
            disabled={isDisabled}
            className={`keyboard-btn ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            aria-label={`Letter ${key}`}
            title={isActive ? "Correct!" : isInactive ? "Wrong guess" : "Click to guess"}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}