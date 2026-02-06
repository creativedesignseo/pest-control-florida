import { Link } from 'react-router-dom'
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/images/Exterminator.svg" alt="Florida Pest Control" className="logo-img" />
            </Link>
            <p className="footer-tagline">
              Protecting Florida families since 2008. Safe treatments for homes with kids and pets.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">All Services</Link></li>
              <li><Link to="/services#termites">Termite Control</Link></li>
              <li><Link to="/services#mosquitoes">Mosquito Control</Link></li>
              <li><Link to="/services#rodents">Rodent Control</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li><Link to="/residential">Residential</Link></li>
              <li><Link to="/commercial">Commercial</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <Phone size={18} />
                <a href="tel:+15551234567">(555) 123-4567</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:info@floridapestcontrol.com">info@floridapestcontrol.com</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Serving Tampa, Orlando, Miami & Jacksonville</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-badges">
            <span className="badge">FL License #JB123456</span>
            <span className="badge">BBB Accredited</span>
            <span className="badge">Family Owned Since 2008</span>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Florida Pest Control. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
