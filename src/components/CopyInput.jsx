import { useState } from "react"
import PopupContent from "./PopupContent";


const CopyInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [copied , setCopied] = useState(false);

    const copy = (e)=>{
       setInputValue(e.target.value);
    }

    const handlChange = ()=>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setCopied(true);
            setTimeout(()=>setCopied(false),10000);
        })
    }

  return (
    <div>
        <input type="text" value={inputValue} onChange={copy} />
        <button onClick={handlChange}>Copy</button>

        <PopupContent copied = {copied}/>
      
    </div>
  )
}

export default CopyInput
