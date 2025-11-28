/**
 * HintButton Component
 * Allows player to use their one hint per game
 * Shows hint count and provides visual feedback when used
 */

type HintButtonProps = {
  onHint: () => void
  hintsRemaining: number
  disabled: boolean
}

export function HintButton({
  onHint,
  hintsRemaining,
  disabled,
}: HintButtonProps) {
  const isHintAvailable = hintsRemaining > 0 && !disabled

  return (
    <button
      onClick={onHint}
      disabled={!isHintAvailable}
      className={`hint-btn ${isHintAvailable ? "available" : "used"}`}
      title={isHintAvailable ? "Reveal one random letter" : "Hint already used"}
    >
      <span className="hint-icon">💡</span>
      <span className="hint-text">Hint</span>
      <span className="hint-count">{hintsRemaining}</span>
    </button>
  )
}