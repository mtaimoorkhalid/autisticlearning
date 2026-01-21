import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const { comfortMode, toggleComfortMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the mobile menu open/closed
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Closes the menu when a link is clicked (UX best practice)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        
        {/* LOGO */}
        <Link to="/" className="logo-link" onClick={closeMenu}>
           Autistic Learning
        </Link>

        {/* MOBILE HAMBURGER ICON */}
        {/* The 'active' class triggers the CSS animation to turn lines into an X */}
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* NAVIGATION LINKS */}
        <nav>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
                <Link to="/families" className="nav-link" onClick={closeMenu}>For Families</Link>
            </li>
            <li>
                <Link to="/educators" className="nav-link" onClick={closeMenu}>For Educators</Link>
            </li>
            <li>
                <Link to="/method" className="nav-link" onClick={closeMenu}>Method</Link>
            </li>
            <li>
                <Link to="/tools" className="nav-link" onClick={closeMenu}>Tools</Link>
            </li>
            <li>
                <Link to="/safeguarding" className="nav-link" onClick={closeMenu}>Safeguarding</Link>
            </li>
            <li>
                <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
            </li>
            
            {/* Call to Action Button */}
            <li>
                <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
                    Contact
                </Link>
            </li>

            {/* COMFORT MODE TOGGLE */}
            <li>
                <button className="toggle-btn" onClick={() => { toggleComfortMode(); closeMenu(); }}>
                {comfortMode ? (
                    <><span>Turn Off</span></>
                ) : (
                    <><span>👁️ Comfort Mode</span></>
                )}
                </button>
            </li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
