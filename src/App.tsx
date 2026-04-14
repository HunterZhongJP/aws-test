import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Calculator from './Calculator.tsx'

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'calculator'>('home')
  const [count, setCount] = useState(0)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  
   if (currentPage === 'calculator') {
    return <Calculator onBack={() => setCurrentPage('home')} />
  }
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Hello World!</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px'}}>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <button
          className="counter"
        >
          Count is {count}
        </button>
        <button
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
          -  
        </button>
        </div>
        <div>
        <label htmlFor="password-input">Password</label>
        <br />
        <input
          id="password-input"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="calculator">
       
          <h2>Calculator</h2>
          <button onClick={() => setCurrentPage('calculator')}>
              Go to Calculator
      </button>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
