import { useState } from 'react'
import './App.css'
import Counter from './components/Component/Counter';



function App() {
  const [count, setCount] = useState(1)
  const onIncrement = () => {
    count < 10 ? setCount(count + 1) : "dsd"

  }
  const onDecrement = () => {
    if (count > 0)
      setCount((prev) => prev - 1)
  }



  return (
    <div>
      <Counter onIncrement={onIncrement} onDecrement={onDecrement} count={count}></Counter>
    </div>
  )
}

export default App
