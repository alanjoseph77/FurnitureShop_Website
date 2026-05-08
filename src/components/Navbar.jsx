import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-glass ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="nav-logo">
          LUMINA
        </Link>
        
        {/* Desktop Nav */}
        <nav className="nav-links" style={{ display: 'none' }}>
        </nav>
        
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
          <Link to="/products" className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}>Collections</Link>
          <Link to="#" className="nav-link">About</Link>
          <Link to="#" className="nav-link">Showroom</Link>
        </div>

        <div className="nav-actions">
          <button style={{ background: 'none', border: 'none', cursor: 'pointer' }} aria-label="Search">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative' }} aria-label="Cart">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span style={{ position: 'absolute', top: -4, right: -6, background: 'var(--accent-gold)', color: '#fff', fontSize: '10px', width: '16px', height: '16px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>0</span>
          </button>
          <button 
            style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '1rem', display: 'none' }} 
            className="mobile-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
{/* 
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}} /> */}
    </header>
  );
};

export default Navbar;
