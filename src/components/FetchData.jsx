import { useEffect, useState } from "react"


const FetchData = () => {
    const [post,Setpost]=useState(0)
    useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json()
            Setpost(data)
        }
        fetchData()

    },[])

   
  return (
    <div>
      <h1>First post title: </h1>
      {post.length > 0 ? <h2>{post[0].title}</h2> : <p>Loading...</p> }
    </div>
  )
}

export default FetchData
