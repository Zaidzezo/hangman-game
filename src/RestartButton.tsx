/**
 * RestartButton Component
 * Appears when game is over (win or lose)
 * Resets the game state with a new word
 */

type RestartButtonProps = {
  onRestart: () => void
}

export function RestartButton({ onRestart }: RestartButtonProps) {
  return (
    <button
      onClick={onRestart}
      className="restart-btn"
      title="Start a new game (or press Enter)"
    >
      <span className="restart-icon">🔄</span>
      <span className="restart-text">Try Again</span>
    </button>
  )
}