import ComponentB from "./ComponentB"
import { useContext } from "react"
import { Data,Data1 } from "../App"

const ComponentA = () => {
    // const userName = useContext(Data);
    // const userAge = useContext(Data1);
  return (
      <Data.Consumer>
        {(name)=>{
            return(
                <Data1.Consumer>
                    {(age)=>{
                        return <h1>My name is {name} and my age is {age}</h1>
                    }}
                </Data1.Consumer>
            )
        }}
      </Data.Consumer>
  )
}

export default ComponentA
