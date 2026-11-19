import { useState } from "react"


const ExampleTwo = () => {

    const [randomNumber, setRandomNumber] = useState(()=>Math.floor(Math.random()*100))

    // const generate = ()=> setRandomNumber(Math.floor(Math.random()*100))


    const generate = ()=>{
        const newNumber = Math.floor(Math.random()*100)

        setRandomNumber(newNumber)
    }

  return (
    <div>
        <h1>Random Number : {randomNumber}</h1>

        <button onClick={generate}>Generat New Number</button>
      <p>ExampleTwo</p>
    </div>
  )
}

export default ExampleTwo
