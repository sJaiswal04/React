const ComponentTwo = ({count,onClickHandler}) => {

    const HandleClic = ()=>onClickHandler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={HandleClic}>Increment</button>
    </div>
  )
}

export default ComponentTwo
