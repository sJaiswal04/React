import {useState} from 'react'

const App = () => {
  const [movie,setMovie] = useState({
    title:'Dhoom 3',
    rating : 8
  })

  const handleRating = ()=>{
    // const copyMovie = {
    //   ...movie,
    //   rating :5
    // }
    setMovie({...movie,rating:7.5});
  }

  
  return (
    <section>
      <h1>Movie : {movie.title}</h1>
      

      <p>Rating : {movie.rating}</p>

      <button onClick={handleRating}>Change Rating</button>
    </section>
  )
}

export default App
