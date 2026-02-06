import { Link } from 'react-router-dom'
import { Bug, Droplets, MousePointer2, Shield, CheckCircle, ArrowRight, AlertTriangle } from 'lucide-react'
import './ServicesPage.css'

const services = [
  {
    id: 'termites',
    icon: Bug,
    title: 'Termite Defense',
    threat: 'Florida is home to the most aggressive termite species in the country. Subterranean and drywood termites cause billions in damage annually, often going undetected until significant structural damage occurs.',
    solution: 'Our comprehensive termite program includes thorough inspection, targeted treatment using the latest technology, and ongoing monitoring to ensure your home stays protected.',
    guarantee: 'Annual warranty with free re-treatment if termites return',
    features: [
      'Full property inspection',
      'Liquid barrier or bait system treatment',
      'Annual monitoring visits',
      'WDO reports for real estate transactions',
      'Damage repair guarantee available',
    ]
  },
  {
    id: 'mosquitoes',
    icon: Droplets,
    title: 'Mosquito Control',
    threat: 'Florida\'s warm, humid climate creates ideal breeding conditions for mosquitoes. Beyond being a nuisance, they can transmit diseases like Zika, West Nile virus, and dengue fever.',
    solution: 'We eliminate mosquitoes at the source with barrier treatments that target adult mosquitoes and prevent larvae from developing. Enjoy your outdoor spaces again.',
    guarantee: 'Monthly treatments during peak season (April-October)',
    features: [
      'Yard barrier spray treatments',
      'Breeding site identification and elimination',
      'Automated misting systems available',
      'Special event treatments',
      'Environmentally responsible products',
    ]
  },
  {
    id: 'rodents',
    icon: MousePointer2,
    title: 'Rodent Exclusion',
    threat: 'Rats and mice contaminate food, spread disease, and cause property damage by gnawing through wires, insulation, and structural materials. They reproduce rapidly and are difficult to eliminate without professional help.',
    solution: 'Our rodent control goes beyond trapping. We identify and seal entry points, remove existing infestations, and provide ongoing monitoring to keep your property rodent-free.',
    guarantee: 'Complete exclusion with follow-up monitoring',
    features: [
      'Comprehensive property inspection',
      'Entry point sealing and exclusion',
      'Humane trapping and removal',
      'Sanitation recommendations',
      'Ongoing monitoring programs',
    ]
  },
]

function ServicesPage() {
  return (
    <div className="services-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <h1>Comprehensive Pest Control Solutions</h1>
          <p>Protecting Florida homes and businesses from termites, mosquitoes, and rodents with proven, family-safe treatments.</p>
        </div>
      </section>

      {/* Services */}
      <section className="services-detail section">
        <div className="container">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`service-block ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-content">
                <div className="service-header">
                  <div className="service-icon-lg">
                    <service.icon size={40} />
                  </div>
                  <h2>{service.title}</h2>
                </div>

                <div className="threat-box">
                  <AlertTriangle className="threat-icon" />
                  <div>
                    <h4>The Threat</h4>
                    <p>{service.threat}</p>
                  </div>
                </div>

                <div className="solution-box">
                  <Shield className="solution-icon" />
                  <div>
                    <h4>Our Solution</h4>
                    <p>{service.solution}</p>
                  </div>
                </div>

                <div className="guarantee-badge">
                  <CheckCircle size={20} />
                  <span>{service.guarantee}</span>
                </div>

                <ul className="features-list">
                  {service.features.map((feature, i) => (
                    <li key={i}>
                      <CheckCircle size={18} />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="btn btn-primary">
                  Schedule Inspection <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* General Pests */}
      <section className="general-pests section bg-gray">
        <div className="container text-center">
          <h2 className="section-title">General Pest Control</h2>
          <p className="section-subtitle">
            We also treat common Florida pests including ants, roaches, spiders, and more. 
            All treatments use EPA-approved, family-safe products.
          </p>
          <Link to="/contact" className="btn btn-secondary">
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Cross-sell Banner */}
      <section className="cross-sell-banner">
        <div className="container">
          <h3>Bundle services and save — see our subscription plans</h3>
          <Link to="/pricing" className="btn btn-primary">
            View Pricing <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
