import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Shield, Phone } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/residential', label: 'Residential' },
  { path: '/commercial', label: 'Commercial' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="navbar">
      <div className="container">
        <nav className="navbar-inner">
          <Link to="/" className="logo">
            <img src="/images/Exterminator-logo-2.svg" alt="Florida Pest Control" className="logo-img" />
          </Link>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <a href="tel:+15551234567" className="phone-link">
              <Phone size={18} />
              <span>(555) 123-4567</span>
            </a>
            <Link to="/contact" className="btn btn-primary">
              Get Inspection
            </Link>
          </div>

          <button 
            className="mobile-toggle" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
