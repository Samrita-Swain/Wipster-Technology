import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="https://wipstertechnologies.com/assets/img/WipsterTechnology.png" alt="logo" />
        </Link>
      </div>

      <ul className={menuOpen ? 'menu active' : 'menu'}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/teams" onClick={() => setMenuOpen(false)}>Team</Link></li>
        <li><Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      <div className="right-part">
        <button>Get Started</button>

        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
