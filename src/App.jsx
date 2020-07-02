import React, { useState, useEffect } from 'react'

function App() {
  let [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState()
  const [firstOperand, setFirstOperand] = useState()
  const [calculation, setCalculation] = useState()
  const [history, setHistory] = useState([])

  useEffect(capCalculatorDisplay, [display])

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
    switch (event.key) {
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
      case '=':
        onClickEqual()
        break
    }
  }

  function onClickOperator(operator) {
    setFirstOperand(display)
    setDisplay('0')
    setOperator(operator)
  }

  function onClickEqual() {
    let answer
    if (operator === '/') {
      answer = `${parseFloat(firstOperand) / parseFloat(display)}`
    } else if (operator === '*') {
      answer = `${parseFloat(firstOperand) * parseFloat(display)}`
    } else if (operator === '-') {
      answer = `${parseFloat(firstOperand) - parseFloat(display)}`
    } else if (operator === '+') {
      answer = `${parseFloat(firstOperand) + parseFloat(display)}`
    }
    let calculationAsString = `${firstOperand} ${operator} ${display} = ${answer}`
    setDisplay(answer)
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

  function capCalculatorDisplay() {
    if (display.length > 10) {
      display = display.substring(display.length - 10, display.length)
    }
  }

  return (
    <main>
      <div className="calculator" onKeyPress={onTypeNumber}>
        <div className="display">{display}</div>
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
          {history.map(calculation => (
            <li>{calculation}</li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default App
