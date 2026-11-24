import { useEffect, useState } from "react"

const BasicEffect = () => {
    useEffect(()=>{
        console.log("Basic component mounted")
    },[])
  return (
    <div>
        <p>See Console to see message</p>
      
    </div>
  )
}

export default BasicEffect
