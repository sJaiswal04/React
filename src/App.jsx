import {useState} from 'react'

const App = () => {
  const [count,setCount] = useState(2);
  const increment = ()=> setCount(count+1)

  const decrement = ()=> setCount(count-1)
  return (
    <section>
      {count}
      <button onClick={increment}>+</button>

      <button onClick={decrement}>-</button>
    </section>
  )
}

export default App
