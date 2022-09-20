import IconBtn from "../SearchBar/iconBtn"

function NavBar() {
  return (
    <div className="navbar ">
        <div className="log">
            <IconBtn/>
        </div>
        <div className="navLinks">
            <ul>
                <li>Home</li>
                <li>Categories</li>
                <li>Sales</li>
                <li>Brands</li>
                <li></li>
            </ul>
        </div>
        <div className="User-Info">
            <IconBtn/>
        </div>
      
    </div>
  )
}

export default NavBar
