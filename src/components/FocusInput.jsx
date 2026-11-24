import { useRef } from "react"


const FocusInput = () => {
  const input = useRef(null);
  const focusBro = ()=>{
    input.current.focus();
    input.current.value = "REACT is quite Easy"
  }
  return (
    <div>
      <input type="text" ref={input} placeholder="Click the button to focus"/>
      <button onClick={()=>focusBro()}>Click me to Focus</button>
    </div>
  )
}

export default FocusInput
