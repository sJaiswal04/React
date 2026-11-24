import { useReducer, useState } from "react"
import { counterReducer,initialState } from "./counterReducer"





const Counter = () => {
  const [state,dispatch] = useReducer(counterReducer,initialState)


  const [inputValue,setInputValue] = useState(0);


  const handleDecrement = ()=>{
    dispatch({type:"decrement"})
  }

  const handleIncrement = ()=>{
    dispatch({type : "increment"})
  }

  const addbyAmt = ()=>{
    dispatch({type:"incrementByAmount", payload :+inputValue})
    setInputValue(0);
  }

  const subbyAmt = ()=>{
    dispatch({type:"decrementByAmount" ,payload :+inputValue})
    setInputValue(0);
  }



  return (
    <div>
      <h2>Count : {state.count}</h2>
      <button onClick={handleIncrement}>Increment</button>

      <button onClick={handleDecrement}>Decrement</button>

      <div>
        <input type="number" value={inputValue} onChange={e=>setInputValue(e.target.value)} placeholder="Enter a value"/>

        <button onClick={addbyAmt}>Add</button>
        <button onClick={subbyAmt
        }>Subtract</button>
      </div>
    </div>
    

  )
}

export default Counter
