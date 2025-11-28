/**
 * HangmanDrawing Component
 * Renders the hangman figure progressively as incorrect guesses are made
 * Uses CSS animations for smooth transitions
 */

const BODY_PARTS = [
  // Head - appears on 1st wrong guess
  <circle key="head" cx="130" cy="50" r="20" fill="none" stroke="#00d4ff" strokeWidth="2" />,
  // Body - appears on 2nd wrong guess
  <line key="body" x1="130" y1="70" x2="130" y2="110" stroke="#00d4ff" strokeWidth="2" />,
  // Left Arm - appears on 3rd wrong guess
  <line key="left-arm" x1="130" y1="80" x2="100" y2="70" stroke="#00d4ff" strokeWidth="2" />,
  // Right Arm - appears on 4th wrong guess
  <line key="right-arm" x1="130" y1="80" x2="160" y2="70" stroke="#00d4ff" strokeWidth="2" />,
  // Left Leg - appears on 5th wrong guess
  <line key="left-leg" x1="130" y1="110" x2="110" y2="140" stroke="#00d4ff" strokeWidth="2" />,
  // Right Leg - appears on 6th wrong guess
  <line key="right-leg" x1="130" y1="110" x2="150" y2="140" stroke="#00d4ff" strokeWidth="2" />,
]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="drawing">
      <svg width="200" height="250" viewBox="0 0 200 250">
        {/* Gallows structure */}
        {/* Base */}
        <line x1="10" y1="230" x2="150" y2="230" stroke="#00d4ff" strokeWidth="3" />
        {/* Vertical post */}
        <line x1="50" y1="230" x2="50" y2="20" stroke="#00d4ff" strokeWidth="3" />
        {/* Top beam */}
        <line x1="50" y1="20" x2="130" y2="20" stroke="#00d4ff" strokeWidth="3" />
        {/* Rope */}
        <line x1="130" y1="20" x2="130" y2="40" stroke="#00d4ff" strokeWidth="2" />

        {BODY_PARTS.slice(0, numberOfGuesses)}
      </svg>
    </div>
  )
}