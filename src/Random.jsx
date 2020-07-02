import React, { useState } from 'react'
import snowman0 from './images/snowman/step_0.png'
import snowman1 from './images/snowman/step_1.png'
import snowman2 from './images/snowman/step_2.png'
import snowman3 from './images/snowman/step_3.png'
import snowman4 from './images/snowman/step_4.png'
import snowman5 from './images/snowman/step_5.png'
import snowman6 from './images/snowman/step_6.png'
import snowman7 from './images/snowman/step_7.png'
import words from './data/words'

const allLetters = [...Array(26).keys()].map(index =>
  String.fromCharCode(97 + index)
)

const snowmen = [
  snowman0,
  snowman1,
  snowman2,
  snowman3,
  snowman4,
  snowman5,
  snowman6,
  snowman7,
]

function AlphabetLetter(props) {
  if (props.used) {
    return <li className="used">{props.letter}</li>
  } else {
    return (
      <li onClick={() => props.onClickLetter(props.letter)}>{props.letter}</li>
    )
  }
}

function randomInteger(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function App() {
  const [
    numberOfCorrectlyGuessedLetters,
    setNumberOfCorrectlyGuessedLetters,
  ] = useState(0)

  const [lettersGuessedSoFar, setLettersGuessedSoFar] = useState([])

  const [secretWord, setSecretWord] = useState(
    words[randomInteger(words.length)]
  )
  const [revealedWord, setRevealedWord] = useState('_______')

  console.log(secretWord)

  const snowman = snowmen[numberOfCorrectlyGuessedLetters]

  const onClickLetter = letter => {
    const newArrayOfLettersGuessedSoFar = [...lettersGuessedSoFar, letter]

    setLettersGuessedSoFar(newArrayOfLettersGuessedSoFar)

    const indexOfLetter = secretWord.indexOf(letter)
    if (indexOfLetter !== -1) {
      setNumberOfCorrectlyGuessedLetters(numberOfCorrectlyGuessedLetters + 1)

      const revealedWordAsArray = [...revealedWord]
      revealedWordAsArray[indexOfLetter] = letter

      const newRevealedWord = revealedWordAsArray.join('')

      setRevealedWord(newRevealedWord)
    }
  }

  return (
    <section>
      <h1>Snowman</h1>
      <img
        alt="snowman"
        src={snowman}
        className={numberOfCorrectlyGuessedLetters === 7 ? 'winner' : 'playing'}
      />
      <ul>
        {[...revealedWord].map((letter, index) => (
          <li key={index}>{letter}</li>
        ))}
      </ul>
      <ul className="alphabet">
      <AlphabetLetter
            key={letter}
            letter={letter}
            used={lettersGuessedSoFar.includes(letter)}
            onClickLetter={onClickLetter}
          />
        {/* {allLetters.map(letter => (
          <AlphabetLetter
            key={letter}
            letter={letter}
            used={lettersGuessedSoFar.includes(letter)}
            onClickLetter={onClickLetter}
          />
        ))} */}
      </ul>
    </section>
  )
}

export default App
