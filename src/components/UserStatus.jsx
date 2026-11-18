const UserStatus = (props) => {
  if(props.isLogin == true && props.isAdmin == true){
    return <h1>Welcome Admin</h1>
  }
  else if(props.isLogin == true && props.isAdmin == false){
    return <h1>Welcome User</h1>
  }
}

export default UserStatus
