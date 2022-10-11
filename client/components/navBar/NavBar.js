import IconBtn from "../SearchBar/iconBtn"
import * as IonIcon from "react-icons/io5";
import * as Gi from  "react-icons/gi";
import  Link from 'next/link'
function NavBar() {
  return (
    <div className="navbar ">
        <div className="logo">
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
            <Link href="Authentication/WholeLogin"><button>Login</button></Link>
            
        </div>
      
    </div>
  )
}

export default NavBar
