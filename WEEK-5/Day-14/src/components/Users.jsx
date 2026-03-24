function Users(props){
    let {user}=props;
    return(
        <div className="text-center p-5 shadow-2xl">
            <img className="m-auto rounded-2xl" src={user.image} alt="" />
            <h1  className="text-orange-400">{user.name}</h1>
            <p>{user.email}</p>
        </div>
    )
}

export default Users