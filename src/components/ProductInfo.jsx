const ProductInfo = () => {
    const product = {
        name:"laptop",
        price:1200,
        availablity:"In stock"
    }
  return (
    <div>
      <h1>Name : {product.name}</h1>
      <h3>Price : {product.price}</h3>
      <h3>Availability : {product.availablity}</h3>
    </div>
  )
}

export default ProductInfo;
