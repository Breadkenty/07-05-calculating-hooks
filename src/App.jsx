import React, { useState, useEffect } from 'react'
import KeyboardEventHandler from 'react-keyboard-event-handler'

function App() {
  let [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState()
  const [firstOperand, setFirstOperand] = useState()
  const [secondOperand, setSecondOperand] = useState()
  const [calculation, setCalculation] = useState()
  const [history, setHistory] = useState([])

  function onClickNumber(event, typedKey) {
    if (event && display.length === 1 && display === '0') {
      setDisplay(event.target.innerText)
    } else if (event) {
      setDisplay(display + event.target.innerText)
    } else if (
      event === undefined &&
      typedKey &&
      display.length === 1 &&
      display === '0'
    ) {
      setDisplay(typedKey)
    } else if (event === undefined && typedKey) {
      setDisplay(display + typedKey)
    }
  }

  function onTypeNumber(event) {
    console.log(event)
    switch (event) {
      case '1':
        onClickNumber(undefined, '1')
        break
      case '2':
        onClickNumber(undefined, '2')
        break
      case '3':
        onClickNumber(undefined, '3')
        break
      case '4':
        onClickNumber(undefined, '4')
        break
      case '5':
        onClickNumber(undefined, '5')
        break
      case '6':
        onClickNumber(undefined, '6')
        break
      case '7':
        onClickNumber(undefined, '7')
        break
      case '8':
        onClickNumber(undefined, '8')
        break
      case '9':
        onClickNumber(undefined, '9')
        break
      case '0':
        console.log('hello')
        onClickNumber(undefined, '0')
        break
      case '/':
        onClickOperator('/')
        break
      case '*':
        onClickOperator('*')
        break
      case '-':
        onClickOperator('-')
        break
      case '+':
        onClickOperator('+')
        break
      case 'Enter':
        onClickEqual()
        break
    }
  }

  function onClickOperator(operator) {
    if (!firstOperand) {
      setFirstOperand(display)
      // setDisplay('0')
      setOperator(operator)
    } else {
      setOperator(operator)
      onClickEqual()
    }
  }

  function onClickEqual() {
    let answer
    if (operator === '/') {
      answer = parseFloat(firstOperand) / parseFloat(display)
    } else if (operator === '*') {
      answer = parseFloat(firstOperand) * parseFloat(display)
    } else if (operator === '-') {
      answer = parseFloat(firstOperand) - parseFloat(display)
    } else if (operator === '+') {
      answer = parseFloat(firstOperand) + parseFloat(display)
    }
    let calculationAsString = `${firstOperand} ${operator} ${display} = ${answer}`
    setDisplay(answer % 1 === 0 ? answer : answer.toFixed(4))
    setCalculation(calculationAsString)
    RecordHistory(calculationAsString)
  }

  function RecordHistory(calculationAsString) {
    setHistory([...history, calculationAsString])
  }

  function clearState() {
    setDisplay('0')
    setOperator()
    setFirstOperand()
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
          '/',
          '*',
          '-',
          '+',
          'Enter',
        ]}
        onKeyEvent={onTypeNumber}
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
            <button className="button fn">&#177;</button>
            <button className="button fn">&#37;</button>
            <button
              className="button op"
              onClick={() => {
                onClickOperator('/')
              }}
            >
              &#247;
            </button>
            <button className="button" onClick={onClickNumber}>
              7
            </button>
            <button className="button" onClick={onClickNumber}>
              8
            </button>
            <button className="button" onClick={onClickNumber}>
              9
            </button>
            <button
              className="button op"
              onClick={() => {
                onClickOperator('*')
              }}
            >
              &#215;
            </button>
            <button className="button" onClick={onClickNumber}>
              4
            </button>
            <button className="button" onClick={onClickNumber}>
              5
            </button>
            <button className="button" onClick={onClickNumber}>
              6
            </button>
            <button
              className="button op"
              onClick={() => {
                onClickOperator('-')
              }}
            >
              &#8722;
            </button>
            <button className="button" onClick={onClickNumber}>
              1
            </button>
            <button className="button" onClick={onClickNumber}>
              2
            </button>
            <button className="button" onClick={onClickNumber}>
              3
            </button>
            <button
              className="button op"
              onClick={() => {
                onClickOperator('+')
              }}
            >
              &#43;
            </button>
            <button className="button x2" onClick={onClickNumber}>
              0
            </button>
            <button className="button">.</button>
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
          <ul>
            {history.map((calculation, index) => (
              <li key={index}>{calculation}</li>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default App
