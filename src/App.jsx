import React, { useState } from 'react'

function App() {
  const [display, setDisplay] = useState('0')
  const [operator, setOperator] = useState()
  const [leftOperand, setLeftOperand] = useState()
  const [rightOperand, setRightOperand] = useState()
  const [total, setTotal] = useState()

  function onClickNumber(event) {
    if (display.length === 1 && display === '0') {
      setDisplay(event.target.innerText)
    } else {
      setDisplay(display + event.target.innerText)
    }
  }

  function onClickOperator(operator) {
    setLeftOperand(parseFloat(display))
    setDisplay('0')
    setOperator(operator)
  }

  function onClickEqual() {
    setRightOperand(parseFloat(display))

    switch (operator) {
      case '/':
        setDisplay(leftOperand / rightOperand)
        break
      case '*':
        setDisplay(leftOperand * rightOperand)
        break
      case '-':
        setDisplay(leftOperand - rightOperand)
        break
      case '+':
        setDisplay(leftOperand + rightOperand)
        break
    }
  }

  function clearState() {
    setDisplay('0')
    setOperator()
    setLeftOperand()
    setRightOperand()
  }

  return (
    <main>
      <div className="calculator">
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
    </main>
  )
}

export default App
