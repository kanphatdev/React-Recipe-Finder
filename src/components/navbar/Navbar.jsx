import { Search } from "lucide-react"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    
    <Link to={"/"} className="btn btn-ghost text-xl uppercase">k foods finder</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
        <Link to={"/"} className="capitalize text-base-content">
        
        home
        </Link>
    </li>
    <li>
    <Link to={"/aboutv "} className="capitalize text-base-content">
        
        about
        </Link>
    </li>
    <li>
    <Link to={"/contacts"} className="capitalize text-base-content">
        
        contacts
        </Link>
    </li>
    <li>
    <Link to={"/services"} className="capitalize text-base-content">
        
        services
        </Link>
    </li>
    </ul>
  </div>
  <div className="navbar-end">
  <label className="input">
  <Search size={16}/>
  <input type="search" required placeholder="Search"/>
</label>
  </div>
</div>
    </div>
  )
}
export default Navbar