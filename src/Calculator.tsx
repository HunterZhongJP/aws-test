import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


type CalculatorProps = {
  onBack: () => void
}

function Calculator({ onBack }: CalculatorProps) {
  const [displayNumber, setDisplayNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState<number | null>(null)
  const [operator, setOperator] = useState<string | null>(null)
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false)
  //const [secondNumber, setSecondNumber] = useState<number | null>(null)



  function handleDigit(num: string) {
    // the execution for when a digit button is clicked
    // if waitingForSecondNumber is true, set displayNumber to num and set waitingForSecondNumber to false
    // else, if displayNumber is '0', set displayNumber to num
    // else, append num to displayNumber  
    if (waitingForSecondNumber) {
      setDisplayNumber(num)
      setWaitingForSecondNumber(false)
    } else {
      setDisplayNumber(displayNumber === '0' || displayNumber === 'Error' ? num : displayNumber + num)
    } 
  }

  function handleOperator(op: string) {
    // the execution for when an operator button is clicked
    // if firstNumber is null, set firstNumber to the numeric value of displayNumber
    
    const currentNumber = parseInt(displayNumber)
    if (firstNumber === null) {
      setFirstNumber(currentNumber)
    } 
    setOperator(op)
    setWaitingForSecondNumber(true)

  }
  function handleClear() {
    // the execution for when clear button is clicked
    // reset the states of diplayNumber, firstNumber, operator, waitingForSecondNumber
    setDisplayNumber('0')
    setFirstNumber(null)
    setOperator(null)
    setWaitingForSecondNumber(false)
  }
  function handleEqual() {
    // the execution for when equal button is clicked
    // if operator and firstNumber, second number are not null, perform the calculation based on the operator and set the result to displayNumber
    if (operator && firstNumber !== null) {
      const currentNumber = parseInt(displayNumber)
      //setSecondNumber(currentNumber)
      let result: number | 'Error' = calculation(firstNumber, currentNumber, operator)
      if (result === 'Error') {
        setDisplayNumber('Error')
        setFirstNumber(null)
      } else {
        setDisplayNumber(result.toString())
        setFirstNumber(result)
      }
      setOperator(null)
      setWaitingForSecondNumber(false)
    }
  }

  function calculation(num1: number, num2: number, op: string): number | 'Error' {
    switch (op) {
      case '+': 
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/':
        if (num2 === 0) {
        return 'Error'
      }
      return Math.floor(num1 / num2)
      default:
        return 0
    }
  }


  return (
      <section id="center">
        
        <div>
          <h1>Calculator</h1>
          <p>
            Edit <code>src/Calculator.tsx</code> and save to test <code>HMR</code>
          </p>
         
        </div>
        <div>
            <div className='display'>{displayNumber}</div>
             <div>         
              <button className='counter' onClick={() => handleDigit('7')}>7</button>
              <button className='counter' onClick={() => handleDigit('8')}>8</button>
              <button className='counter' onClick={() => handleDigit('9')}>9</button>
              <button className='counter' onClick={() => handleOperator('/')}>/</button>
            </div>

            <div>         
              <button className='counter' onClick={() => handleDigit('4')}>4</button>
              <button className='counter' onClick={() => handleDigit('5')}>5</button>
              <button className='counter' onClick={() => handleDigit('6')}>6</button>
              <button className='counter' onClick={() => handleOperator('*')}>*</button>
            </div>

            <div>         
              <button className='counter' onClick={() => handleDigit('1')}>1</button>
              <button className='counter' onClick={() => handleDigit('2')}>2</button>
              <button className='counter' onClick={() => handleDigit('3')}>3</button>
              <button className='counter' onClick={() => handleOperator('-')}>-</button>
            </div>

            <div>         
              <button className='counter' onClick={() => handleDigit('0')}>0</button>
              <button className='counter' onClick={handleClear}>C</button>
              <button className='counter' onClick={handleEqual}>=</button>
              <button className='counter' onClick={() => handleOperator('+')}>+</button>
            </div>

        </div>
      <button className='counter' onClick={onBack}>Back</button>
      </section>
  )
}
export default Calculator