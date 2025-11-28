/**
 * GameStatus Component
 * Displays win/loss message with smooth animations
 * Only renders when game is over
 */

type GameStatusProps = {
  isWinner: boolean
  isLoser: boolean
}

export function GameStatus({ isWinner, isLoser }: GameStatusProps) {
  if (!isWinner && !isLoser) return null

  return (
    <div className={`game-status ${isWinner ? "winner" : "loser"}`}>
      <div className="status-content">
        {isWinner ? (
          <>
            <span className="status-icon">🎉</span>
            <h2>You Won!</h2>
            <p>Congratulations! You've guessed the word correctly.</p>
          </>
        ) : (
          <>
            <span className="status-icon">😔</span>
            <h2>Game Over</h2>
            <p>Nice try! Better luck next time.</p>
          </>
        )}
      </div>
    </div>
  )
}