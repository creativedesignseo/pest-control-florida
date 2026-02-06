import { Link } from 'react-router-dom'
import { Building2, UtensilsCrossed, Store, Warehouse, CheckCircle, ArrowRight, Clock, Shield, FileText } from 'lucide-react'
import './CommercialPage.css'

const industries = [
  { icon: UtensilsCrossed, title: 'Restaurants & Food Service' },
  { icon: Store, title: 'Retail & Hospitality' },
  { icon: Warehouse, title: 'Warehouses & Industrial' },
  { icon: Building2, title: 'Offices & Property Management' },
]

const features = [
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'After-hours and weekend service available to minimize disruption to your business operations.',
  },
  {
    icon: Shield,
    title: 'Compliance Ready',
    description: 'Documentation for health inspections, audits, and regulatory compliance requirements.',
  },
  {
    icon: FileText,
    title: 'Detailed Reporting',
    description: 'Comprehensive service reports, trend analysis, and recommendations for every visit.',
  },
]

const benefits = [
  'Customized service plans for your industry',
  'Priority emergency response',
  'Dedicated account manager',
  'Competitive volume pricing',
  'Multi-location discounts',
  'Digital service logs and documentation',
]

function CommercialPage() {
  return (
    <div className="commercial-page">
      {/* Hero */}
      <section className="page-hero commercial-hero">
        <div className="container">
          <h1>Commercial Pest Management</h1>
          <p>Protecting Florida businesses with discrete, compliant, and effective pest control solutions tailored to your industry.</p>
        </div>
      </section>

      {/* Industries */}
      <section className="industries-section section">
        <div className="container">
          <h2 className="section-title text-center">Industries We Serve</h2>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card card">
                <industry.icon className="industry-icon" />
                <h3>{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features-section section bg-gray">
        <div className="container">
          <h2 className="section-title text-center">Built for Business</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card card">
                <div className="feature-icon">
                  <feature.icon size={32} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section section">
        <div className="container">
          <div className="benefits-box">
            <h2>Why Florida Businesses Trust Us</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <CheckCircle className="check-icon" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section commercial-cta">
        <div className="container text-center">
          <h2>Request a Commercial Quote</h2>
          <p>Every business is unique. Contact us for a customized pest management proposal.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get a Free Business Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CommercialPage
