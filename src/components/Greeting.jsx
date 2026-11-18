const Greeting = (props) => {
  return (
    props.timeOfDay === 'morning' ?"Good Morning" : "Good Afternoon"
  )
}

export default Greeting
