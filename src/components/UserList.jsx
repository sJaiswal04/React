const UserList = () => {
    const users = [
        {id:1,name:"Alice",age:25}, 
        {id:2,name:"Bob",age:30}, 
        {id:3,name:"Charlie",age:22},
    ]
  return (
    <div>
       {users.map((use)=>(
        <div key={use.id}>
            <h1>Id : {use.id}</h1>
            <h1>Name : {use.name}</h1>
            <h1>Age : {use.age}</h1>
        </div>
       ))

}
    </div>
  )
}

export default UserList
