import { use, useState } from "react"

const ExampleOne = () => {

    const [count,setCount] = useState(()=>{
        const initialCount = 10;
        return initialCount;
    })

    const inc =()=> {setCount(prevCount => prevCount+1)}
  return (
    <div>
        <h1>count:{count}</h1>
        <button onClick={inc}>increment</button>
      <p>ExampleOne</p>
    </div>
  )
}

export default ExampleOne
