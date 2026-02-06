import { Link } from 'react-router-dom'
import { CheckCircle, Star, ArrowRight, Shield, Clock, AlertTriangle } from 'lucide-react'
import './PricingPage.css'

const plans = [
  {
    name: 'Essential',
    price: '39',
    period: '/month',
    description: 'Basic protection for smaller properties',
    featured: false,
    services: [
      'Quarterly exterior treatments',
      'Common pest prevention (ants, roaches, spiders)',
      'Web and nest removal',
      'Satisfaction guarantee',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Premium',
    price: '79',
    period: '/month',
    description: 'Comprehensive protection for most homes',
    featured: true,
    services: [
      'Monthly exterior + interior treatments',
      'Full pest coverage including rodents',
      'Annual termite inspection',
      'Seasonal mosquito treatments',
      'Priority scheduling',
      '24/48-hour emergency response',
    ],
    cta: 'Most Popular',
  },
  {
    name: 'Complete',
    price: '129',
    period: '/month',
    description: 'Total protection with termite coverage',
    featured: false,
    services: [
      'Everything in Premium',
      'Full termite protection + warranty',
      'Year-round mosquito misting',
      'Wildlife exclusion services',
      'Dedicated technician',
      'Same-day emergency service',
    ],
    cta: 'Get Started',
  },
]

const faqs = [
  {
    question: 'Can I cancel anytime?',
    answer: 'Yes! Our subscriptions are flexible. You can cancel with 30 days notice. However, most customers stay for years because of our results.',
  },
  {
    question: 'What if pests come back between services?',
    answer: 'We\'ll come back and re-treat at no additional cost. That\'s our satisfaction guarantee.',
  },
  {
    question: 'Are your treatments safe for my family and pets?',
    answer: 'Absolutely. We use EPA-approved products specifically selected for homes with children and pets. We\'ll always tell you exactly what we\'re using.',
  },
  {
    question: 'Do you offer one-time treatments?',
    answer: 'Yes, we offer one-time services for specific issues. However, subscriptions provide better long-term protection and value.',
  },
]

function PricingPage() {
  return (
    <div className="pricing-page">
      {/* Hero */}
      <section className="page-hero pricing-hero">
        <div className="container">
          <h1>Simple, Transparent Pricing</h1>
          <p>No hidden fees. No long-term contracts. Just reliable pest protection with a satisfaction guarantee.</p>
        </div>
      </section>

      {/* Plans */}
      <section className="plans-section section">
        <div className="container">
          <div className="plans-grid">
            {plans.map((plan, index) => (
              <div key={index} className={`plan-card card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <span className="featured-badge">Most Popular</span>}
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">${plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
                <ul className="plan-services">
                  {plan.services.map((service, i) => (
                    <li key={i}>
                      <CheckCircle className="check-icon" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'} btn-block`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="guarantee-section section bg-gray">
        <div className="container">
          <div className="guarantee-box">
            <Shield className="guarantee-icon" />
            <h2>100% Satisfaction Guarantee</h2>
            <p>
              If you're not completely satisfied with our service, we'll re-treat your property 
              at no additional cost. If issues persist, we'll refund your last payment. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section section">
        <div className="container">
          <h2 className="section-title text-center">Common Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to get started?</h2>
          <p>Schedule your free inspection and we'll recommend the best plan for your home.</p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get Free Inspection <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PricingPage
