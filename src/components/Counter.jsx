import { useState } from "react";
const Counter = () => {
    const [cou,setCou] = useState(()=>{
        const value = 0;
        return value;
    })
    const increment = ()=>{setCou(cou+1);}
  return (
    <div>
        <h1>You clicked {cou} times</h1>
        <button onClick={increment}>increase</button>
    </div>
  )
}

export default Counter

