/**
 * Layout: Wraps all pages with header and navigation.
 * Hamburger menu for mobile-friendly navigation.
 */
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = (): void => setMenuOpen(false);

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
          <NavLink to="/projects" onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/partners" onClick={closeMenu}>
            Partners
          </NavLink>
        </nav>
        {menuOpen && (
          <div
            className="nav-overlay"
            role="button"
            tabIndex={0}
            aria-label="Close menu"
            onClick={closeMenu}
            onKeyDown={(e: React.KeyboardEvent) => e.key === 'Escape' && closeMenu()}
          />
        )}
      </header>
      {children}
      <footer className="site-footer">
        <p> Junsoft Solutions. EST 2024.</p>
      </footer>
    </div>
  );
}

export default Layout;
