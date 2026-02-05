import { Link } from "react-router-dom";
import { useState } from "react";
import "../css/Navbar.css"
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

function NavBar(){
    const { user } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        signOut(auth);
        setIsMenuOpen(false);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
    
    return (
        <nav className="navbar" id="main-navbar">
            <div className="navbar-brand">
                <Link to="/">CineScope</Link>
            </div>
            
            {/* Hamburger Menu Button */}
            <button 
                className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Dropdown Menu */}
            <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" className="dropdown-item" onClick={closeMenu}>
                    <span className="item-icon">🏠</span>
                    Home
                </Link>
                <Link to="/favorites" className="dropdown-item" onClick={closeMenu}>
                    <span className="item-icon">⭐</span>
                    Favorites
                </Link>
                <button className="dropdown-item logout-btn" onClick={handleLogout}>
                    <span className="item-icon">🚪</span>
                    Logout
                </button>
            </div>

            {/* Backdrop for closing menu */}
            {isMenuOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
        </nav>
    );
}

export default NavBar;