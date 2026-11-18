import ProductList from "./components/ProductList"
import UserList from "./components/UserList"

const App = () => {
  const userInfo=[
    {
      username : "shubham",
      email : "231b328@juetguna.in",
      location : "USA"
    },
    {
      username : "spiderman",
      email : "231b000@juetguna.in",
      location : "USA"
    },
    {
      username : "shaktiman",
      email : "231b008@juetguna.in",
      location : "USA"
    }
  ]
  return (
    <main>
      <UserList/>
      <ProductList/>

    </main>
  )
}

export default App
