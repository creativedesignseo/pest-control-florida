import { Link } from 'react-router-dom'
import { Heart, Home, Smile, Shield, CheckCircle, Star, ArrowRight, Baby, Dog } from 'lucide-react'
import './ResidentialPage.css'

const pillars = [
  {
    icon: Heart,
    title: 'Protect Your Family',
    description: 'Kids and pets play on floors and grass. Our treatments are specifically selected to be safe for your loved ones while remaining effective against pests.',
  },
  {
    icon: Home,
    title: 'Preserve Your Investment',
    description: 'Termite damage can destroy equity and cost thousands in repairs. Prevention is always cheaper than repair — protect your home before damage occurs.',
  },
  {
    icon: Smile,
    title: 'Enjoy Your Home',
    description: 'No more mosquitoes ruining backyard time. No more rodent noises at night. Reclaim every corner of your property with confidence.',
  },
]

const benefits = [
  'Free initial inspection',
  'Customized treatment plan for your home',
  'Flexible subscription options (monthly, quarterly, annual)',
  '24/48-hour emergency response',
  'Satisfaction guarantee with free re-service',
  'Transparent pricing with no hidden fees',
]

const testimonials = [
  {
    name: 'Karen T.',
    location: 'Tampa, FL',
    text: 'With two young kids and a very curious dog, I was worried about pest control treatments. Florida Pest Control explained everything they use and my family has been safe and pest-free for over 2 years now.',
  },
  {
    name: 'David P.',
    location: 'Orlando, FL',
    text: 'The peace of mind is worth every penny. Knowing that our home is protected against termites and that the treatments are safe for our pets makes all the difference.',
  },
]

function ResidentialPage() {
  return (
    <div className="residential-page">
      {/* Hero */}
      <section className="page-hero residential-hero">
        <div className="container">
          <h1>Protecting Florida Families Since 2008</h1>
          <p>Safe, effective treatments for homes with kids and pets. Because your family deserves pest-free peace of mind.</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="pillars-section section">
        <div className="container">
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div key={index} className="pillar-card card">
                <div className="pillar-icon">
                  <pillar.icon size={32} />
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Promise */}
      <section className="safety-section section bg-gray">
        <div className="container">
          <div className="safety-box">
            <div className="safety-icons">
              <div className="safety-icon-circle">
                <Baby size={32} />
              </div>
              <div className="safety-icon-circle">
                <Dog size={32} />
              </div>
            </div>
            <h2>Our Family-Safe Promise</h2>
            <p>
              Every product we use is EPA-approved and selected specifically for homes with children and pets. 
              We'll always tell you exactly what we're applying and when it's safe to re-enter treated areas.
              Your family's safety is our top priority — no exceptions.
            </p>
            <div className="safety-badges">
              <span className="badge-pill">EPA-Approved</span>
              <span className="badge-pill">Pet-Safe Formula</span>
              <span className="badge-pill">Kid-Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section section">
        <div className="container">
          <div className="benefits-content">
            <h2 className="section-title">What Homeowners Get</h2>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <CheckCircle className="check-icon" />
                  {benefit}
                </li>
              ))}
            </ul>
            <Link to="/pricing" className="btn btn-primary">
              View Subscription Plans <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section bg-gray">
        <div className="container">
          <h2 className="section-title text-center">What Florida Families Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
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

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Schedule Your Free Home Inspection</h2>
          <p>Take the first step toward a pest-free home. Our friendly technicians are ready to help.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Book Free Inspection <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ResidentialPage
