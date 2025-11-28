/**
 * HangmanWord Component
 * Displays the word with guessed letters revealed and unrevealed letters hidden
 * Hinted letters are highlighted with special styling
 */

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
  hintedLetter?: string | null
}

export function HangmanWord({
  guessedLetters,
  wordToGuess,
  reveal = false,
  hintedLetter = null,
}: HangmanWordProps) {
  return (
    <div className="word-display">
      {wordToGuess.split("").map((letter, index) => {
        const isRevealed = guessedLetters.includes(letter) || reveal
        const isHinted = letter === hintedLetter

        return (
          <span
            key={index}
            className={`letter ${isRevealed ? "revealed" : "hidden"} ${
              isHinted ? "hinted" : ""
            }`}
          >
            <span className="letter-content">{isRevealed ? letter : ""}</span>
          </span>
        )
      })}
    </div>
  )
}