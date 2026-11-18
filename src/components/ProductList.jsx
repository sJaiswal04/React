const ProductList = () => {
    const products = [
        {id:1,name:"Phone",price: "$699"},
        {id:2,name:"Laptop",price: "$1200"},
        {id:3,name:"Headphones",price: "$199"},
    ];
  return (
    <div>
        {products.map((use)=>(
            <ul key={Math.random()}>
                <li>{use.id}</li>
                <li>{use.name}</li>
                <li>{use.age}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList
