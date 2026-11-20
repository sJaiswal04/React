import { useState } from "react"


const ShoppingList = () => {
    const [items,setItems] = useState([])
    const [name, setName] = useState('');
    const [quantity,setQuantity] = useState('')

    const updateName = (e)=>{
        setName(e.target.value)
    }

    const updateQuantity = (e)=>{
        setQuantity(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        if(!name || !quantity) return ;

        const newItem = {
            name,quantity : parseInt(quantity),
        };
        setItems((prevItems)=> [...prevItems,newItem])

        setName('');
        setQuantity('');
    }

  return (
    <div>
        <h1>Shopping List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Product name" value={name} onChange={updateName} />

            <input type="number" placeholder="Enter Product quantity" value={quantity} onChange={updateQuantity} />

            <button type="submit">Add Item</button>

        </form>

        
        <ul>
            {items.map((items,index)=>(
                <li key={index}>{items.name} - Quantity : {items.quantity}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default ShoppingList
