import React, { useState, useEffect } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'

function App() {
  let [display, setDisplay] = useState('0')
  const [firstOperandSelected, setFirstOperandSelected] = useState(true)
  let [showEquals, setShowEquals] = useState(false)
  const [firstInput, setFirstInput] = useState(true)
  let [firstOperand, setFirstOperand] = useState('0')
  const [operator, setOperator] = useState()
  let [secondOperand, setSecondOperand] = useState('0')
  let [equals, setEquals] = useState()
  const [history, setHistory] = useState([])

  useEffect(displayOperands, [firstOperand])
  useEffect(displayOperands, [secondOperand])
  useEffect(displayOperands, [showEquals])

  function displayOperands() {
    if (firstOperandSelected && !showEquals) {
      setDisplay(firstOperand)
    } else if (!firstOperandSelected && !showEquals) {
      setDisplay(secondOperand)
    } else if (showEquals) {
      setDisplay(equals)
    }
  }

  function updateOperand(event, typedKey) {
    let input = event !== undefined ? event.target.innerText : typedKey
    setShowEquals(false)

    if (firstOperandSelected === true) {
      if (firstInput === true) {
        setFirstOperand(input)
        setFirstInput(false)
      } else {
        if (firstOperand.length < 10) {
          setFirstOperand(firstOperand + input)
        } else {
          setFirstOperand(
            [...firstOperand.toString()]
              .reverse()
              .slice(0, 10)
              .reverse()
              .join('') + input
          )
        }
      }
    } else if (firstOperandSelected === false) {
      if (firstInput === true) {
        setSecondOperand(input)
        setFirstInput(false)
      } else {
        if (secondOperand.length < 10) {
          setSecondOperand(secondOperand + input)
        } else {
          setSecondOperand(
            [...secondOperand.toString()]
              .reverse()
              .slice(0, 10)
              .reverse()
              .join('') + input
          )
        }
      }
    }
  }

  function backspaceOnDisplay() {
    if (firstOperandSelected) {
      setFirstOperand(
        display.length > 1 ? display.substring(0, display.length - 1) : '0',
        setFirstInput(true)
      )
      setDisplay(firstOperand)
    } else {
      setSecondOperand(
        display.length > 1 ? display.substring(0, display.length - 1) : '0',
        setFirstInput(true)
      )
      setDisplay(secondOperand)
    }
  }

  function handleKeypress(event) {
    console.log(event)
    switch (event) {
      case '1':
        updateOperand(undefined, '1')
        break
      case '2':
        updateOperand(undefined, '2')
        break
      case '3':
        updateOperand(undefined, '3')
        break
      case '4':
        updateOperand(undefined, '4')
        break
      case '5':
        updateOperand(undefined, '5')
        break
      case '6':
        updateOperand(undefined, '6')
        break
      case '7':
        updateOperand(undefined, '7')
        break
      case '8':
        updateOperand(undefined, '8')
        break
      case '9':
        updateOperand(undefined, '9')
        break
      case '0':
        updateOperand(undefined, '0')
        break
      case '.':
        updateOperand(undefined, '.')
        break
      case 'shift + 5':
        if (firstOperandSelected) {
          setFirstOperand(firstOperand / 100)
        } else {
          setSecondOperand(secondOperand / 100)
        }
      case '/':
        selectOperator('/')
        break
      case '*':
        selectOperator('*')
        break
      case '-':
        if (firstInput) {
          updateOperand(undefined, '-')
        } else {
          selectOperator('-')
        }
        break
      case '+':
        selectOperator('+')
        break
      case 'Backspace':
        backspaceOnDisplay()
        break
      case 'Enter':
        onClickEqual()
        break
      case 'Clear':
        clearState()
        break
    }
  }

  function selectOperator(operator) {
    setOperator(operator)
    setFirstOperandSelected(false)
    setFirstInput(true)

    if (showEquals === false && secondOperand === 0) {
      setSecondOperand(firstOperand)
      onClickEqual()
    }
  }

  function onClickEqual() {
    let answer
    if (operator === '/') {
      answer = parseFloat(firstOperand) / parseFloat(secondOperand)
    } else if (operator === '*') {
      answer = parseFloat(firstOperand) * parseFloat(secondOperand)
    } else if (operator === '-') {
      answer = parseFloat(firstOperand) - parseFloat(secondOperand)
    } else if (operator === '+') {
      answer = parseFloat(firstOperand) + parseFloat(secondOperand)
    } else if (operator === undefined) {
      answer = parseFloat(firstOperand)
    }
    setEquals(answer % 1 === 0 ? answer : answer.toFixed(8))
    setFirstOperand(answer % 1 === 0 ? answer : answer.toFixed(8))
    setShowEquals(true)
    setFirstInput(true)
    setFirstOperandSelected(true)
    RecordHistory(`${firstOperand} ${operator} ${secondOperand} = ${answer}`)
  }

  function RecordHistory(calculationAsString) {
    setHistory([...history, calculationAsString])
  }

  function clearState() {
    setDisplay('0')
    setFirstOperand('0')
    setSecondOperand('0')
    setOperator()
    setFirstInput(true)
    setShowEquals(false)
    setFirstOperandSelected(true)
    setEquals()
    setHistory([])
  }

  return (
    <>
      <KeyboardEventHandler
        handleKeys={[
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '0',
          '.',
          '/',
          '*',
          '-',
          '+',
          'shift + 5',
          'Enter',
          'Clear',
          'Backspace',
        ]}
        onKeyEvent={handleKeypress}
      />

      <main>
        <div className="calculator">
          <div className="display">
            {[...display.toString()].reverse().slice(0, 10).reverse().join('')}
          </div>
          <div className="buttons">
            <button className="button fn" onClick={clearState}>
              AC
            </button>
            <button className="button fn" onClick={updateOperand}>
              -
            </button>
            <button
              className="button fn"
              onClick={() => {
                if (firstOperandSelected) {
                  setFirstOperand(firstOperand / 100)
                } else if (!firstOperandSelected) {
                  setSecondOperand(secondOperand / 100)
                }
              }}
            >
              &#37;
            </button>
            <button
              className="button op"
              onClick={() => {
                selectOperator('/')
              }}
            >
              &#247;
            </button>
            <button className="button" onClick={updateOperand}>
              7
            </button>
            <button className="button" onClick={updateOperand}>
              8
            </button>
            <button className="button" onClick={updateOperand}>
              9
            </button>
            <button
              className="button op"
              onClick={() => {
                selectOperator('*')
              }}
            >
              &#215;
            </button>
            <button className="button" onClick={updateOperand}>
              4
            </button>
            <button className="button" onClick={updateOperand}>
              5
            </button>
            <button className="button" onClick={updateOperand}>
              6
            </button>
            <button
              className="button op"
              onClick={() => {
                selectOperator('-')
              }}
            >
              &#8722;
            </button>
            <button className="button" onClick={updateOperand}>
              1
            </button>
            <button className="button" onClick={updateOperand}>
              2
            </button>
            <button className="button" onClick={updateOperand}>
              3
            </button>
            <button
              className="button op"
              onClick={() => {
                selectOperator('+')
              }}
            >
              &#43;
            </button>
            <button className="button x2" onClick={updateOperand}>
              0
            </button>
            <button className="button" onClick={updateOperand}>
              .
            </button>
            <button
              className="button op"
              onClick={() => {
                onClickEqual()
              }}
            >
              &#61;
            </button>
          </div>
        </div>
        <div className="history-container">
          <h2>History</h2>
          <div>
            <ul>
              {history
                .map((calculation, index) => <li key={index}>{calculation}</li>)
                .reverse()}
            </ul>
          </div>
        </div>

        <ul className="keybinding-legend">
          <li>
            <strong>Keybinding:</strong>
          </li>
          <li>Delete: Backspace</li>
          <li>Equal: Return/Enter</li>
          <li>AC: Clear(Numpad)</li>
          <li>&#37;: Shift + 5</li>
          <li>&#247;: /</li>
          <li>&#215;: *</li>
          <li>+: +</li>
          <li>-: -</li>
        </ul>
      </main>
    </>
  )
}

export default App
