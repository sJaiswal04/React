const ComponentOne = ({count,onClickHandler}) => {

    const HandleClick = ()=>onClickHandler();
  return (
    <div>
      <p>{count}</p>
      <button onClick={HandleClick}>Increment</button>
    </div>
  )
}

export default ComponentOne
