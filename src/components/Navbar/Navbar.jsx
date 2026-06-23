import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navLinks, brandName, brandTagline } from '../../data/content';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location]);

  return (
    <header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      role="banner"
    >
      <nav className={styles.nav} aria-label="Main navigation">
        <Link to="/" className={styles.logo} aria-label={`${brandName} ${brandTagline} - Home`}>
          <span className={styles.logoMain}>{brandName}</span>
          <span className={styles.logoTag}>{brandTagline}</span>
        </Link>

        <ul className={`${styles.menu} ${isMobileOpen ? styles.menuOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={`${styles.link} ${location.pathname === link.path ? styles.active : ''}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className={styles.mobileCta}>
            <Link to="/booking" className={styles.navCta}>Book Now</Link>
          </li>
        </ul>

        <div className={styles.actions}>
          <Link to="/booking" className={styles.navCtaDesktop} aria-label="Book an appointment">
            Book Now
          </Link>
          
          <button 
            className={`${styles.hamburger} ${isMobileOpen ? styles.hamburgerOpen : ''}`} 
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;