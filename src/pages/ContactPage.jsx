import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'
import './ContactPage.css'

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: 'residential',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would send to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Schedule your free inspection or ask us anything. We're here to help!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>Have questions? Need an urgent inspection? Reach out to us directly or fill out the form and we'll get back to you within 24 hours.</p>

              <div className="contact-methods">
                <div className="contact-method">
                  <Phone className="contact-icon" />
                  <div>
                    <strong>Call Us</strong>
                    <a href="tel:+15551234567">(555) 123-4567</a>
                  </div>
                </div>
                <div className="contact-method">
                  <Mail className="contact-icon" />
                  <div>
                    <strong>Email Us</strong>
                    <a href="mailto:info@floridapestcontrol.com">info@floridapestcontrol.com</a>
                  </div>
                </div>
                <div className="contact-method">
                  <Clock className="contact-icon" />
                  <div>
                    <strong>Hours</strong>
                    <span>Mon-Fri: 7am - 6pm<br />Sat: 8am - 2pm</span>
                  </div>
                </div>
                <div className="contact-method">
                  <MapPin className="contact-icon" />
                  <div>
                    <strong>Service Areas</strong>
                    <span>Tampa, Orlando, Miami, Jacksonville & surrounding areas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="success-message">
                  <CheckCircle className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>We've received your message and will contact you within 24 hours to schedule your free inspection.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Request Free Inspection</h3>
                  
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="serviceType">Service Type</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                    >
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="termite">Termite Inspection</option>
                      <option value="emergency">Emergency Service</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      placeholder="Tell us about your pest issue..."
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg btn-block">
                    Request Free Inspection
                  </button>

                  <p className="form-note">
                    By submitting, you agree to receive communications about our services. We never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
