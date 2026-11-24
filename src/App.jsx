import { useRef } from "react"

const App = () => {
  const inputElement = useRef(null);
  
  
  const focusbro = () =>{
    inputElement.current.focus();
    inputElement.current.value = "focus on Study"
  }
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={()=>focusbro()}>Focus Baby</button>
    </div>
  )
}

export default App
