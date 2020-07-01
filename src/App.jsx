import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Page from './pages/Page'
import Page2 from './pages/Page2'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <main>
        <div class="calculator">
          <div class="display">0</div>
          <div class="buttons">
            <button class="button fn">AC</button>
            <button class="button fn">&#177;</button>
            <button class="button fn">&#37;</button>
            <button class="button op">&#247;</button>
            <button class="button">7</button>
            <button class="button">8</button>
            <button class="button">9</button>
            <button class="button op">&#215;</button>
            <button class="button">4</button>
            <button class="button">5</button>
            <button class="button">6</button>
            <button class="button op">&#8722;</button>
            <button class="button">1</button>
            <button class="button">2</button>
            <button class="button">3</button>
            <button class="button op">&#43;</button>
            <button class="button x2">0</button>
            <button class="button">.</button>
            <button class="button op">&#61;</button>
          </div>
        </div>
      </main>
    </Router>
  )
}

export default App
