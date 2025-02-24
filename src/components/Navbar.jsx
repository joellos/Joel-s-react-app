import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation(); // Hämtar den aktuella sidans URL

    return (
        <header>
            <Link to="/" className="logo">
                <h2>Joel</h2>
            </Link>

            {/* Menyknapp, visas bara på mindre skärmar */}
            <button className="menu-btn" onClick={() => setIsNavOpen(!isNavOpen)}>
                ☰
            </button>

            {/* Navigationsmeny */}
            <nav className={isNavOpen ? "nav-menu show" : "nav-menu hidden"}>
                <ul className="nav-links">
                    <li><Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setIsNavOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setIsNavOpen(false)}>About</Link></li>
                    <li><Link to="/cv" className={location.pathname === "/cv" ? "active" : ""} onClick={() => setIsNavOpen(false)}>CV</Link></li>
                    <li><Link to="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={() => setIsNavOpen(false)}>Portfolio</Link></li>
                    <li><Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setIsNavOpen(false)}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;