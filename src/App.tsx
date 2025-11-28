import { useCallback, useEffect, useState } from "react"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import { GameStatus } from "./GameStatus"
import { HintButton } from "./HintButton"
import { RestartButton } from "./RestartButton"
import { getRandomWord } from "./utils/wordList"
import "./App.css"


function App() {
  // Game state
  const [wordToGuess, setWordToGuess] = useState<string>(getRandomWord)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [hintsRemaining, setHintsRemaining] = useState<number>(1)
  const [usedHintLetter, setUsedHintLetter] = useState<string | null>(null)

  // Derived state
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  const isLoser = incorrectLetters.length >= 6
  const isWinner = wordToGuess
    .split("")
    .every(letter => guessedLetters.includes(letter))
  const gameOver = isWinner || isLoser


  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || gameOver) return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, gameOver]
  )

  const useHint = useCallback(() => {
    if (hintsRemaining === 0 || gameOver) return

    const unreveledLetters = wordToGuess
      .split("")
      .filter(letter => !guessedLetters.includes(letter))

    if (unreveledLetters.length === 0) return

    const randomLetter =
      unreveledLetters[Math.floor(Math.random() * unreveledLetters.length)]

    setGuessedLetters(current => [...current, randomLetter])
    setUsedHintLetter(randomLetter)
    setHintsRemaining(0)

    setTimeout(() => setUsedHintLetter(null), 1500)
  }, [hintsRemaining, gameOver, wordToGuess, guessedLetters])


  const restartGame = useCallback(() => {
    let newWord = getRandomWord()
    // Ensure we don't get the same word twice
    while (newWord === wordToGuess) {
      newWord = getRandomWord()
    }
    setWordToGuess(newWord)
    setGuessedLetters([])
    setHintsRemaining(1)
    setUsedHintLetter(null)
  }, [wordToGuess])


  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase()

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault()
      addGuessedLetter(key)
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [addGuessedLetter])


  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== "Enter" || !gameOver) return

      e.preventDefault()
      restartGame()
    }

    document.addEventListener("keydown", handleKeyPress)
    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [gameOver, restartGame])

  return (
    <div className="app-container">
      <div className="content-wrapper">
        {/* Header */}
        <div className="header">
          <h1 className="title">Hangman</h1>
          <p className="subtitle">Guess the word before running out of attempts</p>
        </div>

        {/* Game Status */}
        <GameStatus isWinner={isWinner} isLoser={isLoser} />

        {/* Main Game Area */}
        <div className="game-area">
          {/* Hangman Drawing */}
          <div className="drawing-container">
            <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
          </div>

          {/* Word and Stats */}
          <div className="word-container">
            <HangmanWord
              reveal={isLoser}
              guessedLetters={guessedLetters}
              wordToGuess={wordToGuess}
              hintedLetter={usedHintLetter}
            />

            {/* Game Stats */}
            <div className="stats">
              <div className="stat">
                <span className="stat-label">Incorrect Guesses:</span>
                <span className="stat-value">
                  {incorrectLetters.length} / 6
                </span>
              </div>
              <div className="stat">
                <span className="stat-label">Remaining Attempts:</span>
                <span className="stat-value">{6 - incorrectLetters.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="controls">
          <HintButton
            onHint={useHint}
            hintsRemaining={hintsRemaining}
            disabled={gameOver}
          />
          {gameOver && <RestartButton onRestart={restartGame} />}
        </div>

        {/* Keyboard */}
        <div className="keyboard-wrapper">
          <Keyboard
            disabled={gameOver}
            activeLetters={guessedLetters.filter(letter =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
      </div>
    </div>
  )
}

export default App