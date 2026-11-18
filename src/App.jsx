import Greeting from "./components/Greeting"
import UserStatus from "./components/UserStatus"
import Weather from "./components/Weather"

const App = () => {
  return (
    <div>
      <UserStatus 
        isLogin = {true}
        isAdmin = {true}/>
      <Weather/>
      <Greeting timeOfDay = "morning"/>
    </div>
  )
}

export default App
