// import { useRef } from "react"

import FocusInput from "./components/FocusInput"
import Timer from "./components/Timer"

// const App = () => {
//   const inputElement = useRef(null);
  
  
//   const focusbro = () =>{
//     inputElement.current.focus();
//     inputElement.current.value = "focus on Study"
//   }
//   return (
//     <div>
//       <input type="text" ref={inputElement} />
//       <button onClick={()=>focusbro()}>Focus Baby</button>
//     </div>
//   )
// }

// export default App


const App = () => {
  return (
    <div>
      <FocusInput/>
      <Timer/>
    </div>
  )
}

export default App
