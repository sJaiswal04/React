import {useState} from 'react'

const App = () => {

  const [friends, setFriends] = useState(['Jatin','Naman'])

  const newFriend = ()=>setFriends([...friends,'Shubham'])


  const removeFriend = ()=>setFriends(friends.filter((f)=> f != "Jatin"))

  return (
    <section>

      {friends.map(f =>(
        <li key={Math.random()}>{f}</li>
      ))}

      <button onClick={newFriend}>Add new Friend</button>

      <button onClick={removeFriend}>Remove a Friend</button>
      
    </section>
  )
}

export default App
