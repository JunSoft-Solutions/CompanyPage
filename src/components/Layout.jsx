/**
 * Layout: Wraps all pages with header and navigation.
 * Hamburger menu for mobile-friendly navigation.
 */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="layout">
      <header className="site-header">
        <button
          type="button"
          className="hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/images/JunSoft.jpg" alt="Junsoft Solutions" className="logo-img" />
          Junsoft Solutions
        </Link>
        <nav className={`site-nav ${menuOpen ? 'site-nav-open' : ''}`}>
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About Us
          </NavLink>
        </nav>
        {menuOpen && (
          <div
            className="nav-overlay"
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            onClick={closeMenu}
            onKeyDown={(e) => e.key === 'Escape' && closeMenu()}
          />
        )}
      </header>
      {children}
      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Junsoft Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
