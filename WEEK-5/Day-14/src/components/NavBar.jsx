function NavBar(){
    return(
        <div className="flex justify-between bg-gray-500 text-white p-6">
            <h1>LOGO</h1>
            <ul className="flex gap-6">
                <li><a href="">Home</a></li>
                <li><a href="">SignUp</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </div>
    )
}

export default NavBar;