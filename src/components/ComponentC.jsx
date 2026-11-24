import ComponentB from "./ComponentB"
import { useContext } from "react"
import { Data,Data1 } from "../App"

const ComponentA = () => {
    const userName = useContext(Data);
    const userAge = useContext(Data1);
  return (
    <h1>My name is {userName} and my age is {userAge}</h1>
  )
}

export default ComponentA
