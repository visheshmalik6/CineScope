import { Link } from "react-router-dom";
import "../css/Navbar.css"
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function NavBar(){
    const { user } = useAuth();
    console.log(user);
    
    return <nav className="navbar">
                <div className="navbar-brand">
                    <Link to ="/">CineScope</Link>
                </div>
                <div className="navbar-links">
                    <Link to ="/" className="nav-link">Home</Link>
                    <Link to ="/favorites" className="nav-link">Favorites</Link>
                </div>
                <button onClick={() => signOut(auth)}>Logout</button>
            </nav>
        
    
}

export default NavBar;