import { Link } from 'react-router-dom'
import { Shield, Clock, Award, Heart, Bug, Droplets, MousePointer2, Star, ArrowRight, CheckCircle } from 'lucide-react'
import './HomePage.css'

const trustBadges = [
  { icon: Clock, title: '15+ Years', subtitle: 'Florida Experience' },
  { icon: Heart, title: 'Family Owned', subtitle: 'Locally Operated' },
  { icon: Award, title: 'Licensed', subtitle: 'Fully Insured' },
  { icon: Shield, title: 'Safety First', subtitle: 'Pet & Kid Safe' },
]

const services = [
  { 
    icon: Bug, 
    title: 'Termite Defense', 
    description: 'Protect your investment from Florida\'s most destructive pests with our comprehensive termite solutions.',
    link: '/services#termites'
  },
  { 
    icon: Droplets, 
    title: 'Mosquito Control', 
    description: 'Reclaim your outdoor spaces with barrier treatments and misting systems that keep mosquitoes away.',
    link: '/services#mosquitoes'
  },
  { 
    icon: MousePointer2, 
    title: 'Rodent Exclusion', 
    description: 'Complete rodent removal and prevention with professional exclusion and monitoring services.',
    link: '/services#rodents'
  },
]

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'Tampa, FL',
    rating: 5,
    text: 'After trying multiple pest control companies, Florida Pest Control is the only one that actually solved our termite problem. Their technicians are professional and the treatments are safe for our kids and dogs.',
  },
  {
    name: 'Michael R.',
    location: 'Orlando, FL',
    rating: 5,
    text: 'We can finally enjoy our backyard again! The mosquito treatments have been a game-changer for our family. Highly recommend their subscription service.',
  },
  {
    name: 'Jennifer L.',
    location: 'Miami, FL',
    rating: 5,
    text: 'Their team is responsive, thorough, and always on time. We\'ve been customers for 3 years and couldn\'t be happier with the service and peace of mind.',
  },
]

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Florida's Trusted Protection <span>Safe for Kids & Pets.</span></h1>
            <p className="hero-subtitle">
              Experience comprehensive, eco-friendly pest control. Protecting Florida homes with precision since 2008.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Free Inspection
                <ArrowRight size={20} />
              </Link>
              <Link to="/pricing" className="btn btn-outline btn-lg">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            {trustBadges.map((badge, index) => (
              <div key={index} className="trust-badge">
                <badge.icon className="trust-icon" />
                <div className="trust-text">
                  <strong>{badge.title}</strong>
                  <span>{badge.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Tailored Solutions for Florida Pests</h2>
            <p className="section-subtitle">
              Comprehensive protection against the pests that threaten Florida homes most.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card card ${service.image ? 'has-image' : ''}`}>
                {service.image ? (
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                ) : (
                  <div className="service-icon-wrapper">
                    <service.icon className="service-icon" />
                  </div>
                )}
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.link} className="service-link">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="promise-section section bg-gray">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Our Promise to You</h2>
          </div>
          <div className="promise-grid">
            <div className="promise-item">
              <CheckCircle className="promise-icon" />
              <h4>100% Satisfaction Guarantee</h4>
              <p>If pests return between services, so do we — at no additional cost.</p>
            </div>
            <div className="promise-item">
              <CheckCircle className="promise-icon" />
              <h4>EPA-Approved, Pet-Safe Products</h4>
              <p>Every product we use is selected specifically for homes with children and pets.</p>
            </div>
            <div className="promise-item">
              <CheckCircle className="promise-icon" />
              <h4>Same-Week Service Availability</h4>
              <p>We understand pest problems are urgent. Most inspections scheduled within 48 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Happy Neighbors</h2>
            <p className="section-subtitle">
              See what Florida families are saying about our services.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready for a pest-free home?</h2>
            <p>Schedule your free inspection today and take the first step toward peace of mind.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Schedule Free Inspection
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
