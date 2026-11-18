const Cart = () => {
    const items = ["Tomato","Potato"]
  return (
    <div>
        <h1>Cart</h1>
        {items.length>0 && <h2>You have {items.length} items in you cart</h2>}

        <ul>
            <h4>Products</h4>
            {items.map((use)=>(
                <li key={Math.random()}>{use}</li>
            ))}
        </ul>
    </div>
  )
}

export default Cart
