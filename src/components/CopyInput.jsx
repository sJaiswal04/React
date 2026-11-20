import { useState } from "react"


const CopyInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [copied , setCopied] = useState(false);

    const copy = (e)=>{
       setInputValue(e.target.value);
    }

    const handlChange = ()=>{
        navigator.clipboard.writeText(inputValue).then(()=>{
            setTimeout(()=>setCopied(false),2000);
        })
    }

  return (
    <div>
        <input type="text" value={inputValue} onChange={copy} />
        <button onClick={handlChange}>Copy</button>
      
    </div>
  )
}

export default CopyInput
