const Copy = () => {
  const copyHandler =()=> console.log("Stop stealing my work")
  return (
    <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quas nam excepturi beatae ex sed sapiente atque, ducimus ad amet magni, veritatis libero incidunt odit deleniti? Expedita officiis illum nemo!</p>
  )
}

const App = () => {
  return (
    <div>
      <Copy/>
    </div>
  )
}

export default App


