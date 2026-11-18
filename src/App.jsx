import Person from "./components/Person"
import Product from "./components/Product"
import ProductList from "./components/ProductList"
import UserList from "./components/UserList"

const App = () => {
  return (
    <div>
      <Product name = 'Iphone' price = {'$1200'}/>
      <Person name = 'Shubham' age ={20}/>
    </div>
    
  )
}

export default App
