import { useState } from "react";
const Counter = () => {
    const [cou,setCou] = useState(()=>{
        const value = 0;
        return value;
    })
    const increment = ()=>{setCou(cou+1);}
  return (
    <div>
        <h1>Counter</h1>
        <p>{cou}</p>
        <button onClick={increment}>increase</button>
    </div>
  )
}

export default Counter

