const Greeting = () => {
    const greeting = 'Welcome to this page';
    const date = new Date();
    
  return (
    <div>
        <h1>{greeting}</h1>
        <p>Today's date is {date.getDate()}</p>

    </div>
  )
}

export default Greeting;
