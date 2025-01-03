import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div>
      <h1>Get In Touch</h1>
      
      <div className="container">
        <h2>Contact Information</h2>
        <div className="contact-info">
          <div className="contact-item">
            <h4>📧 Email</h4>
            <p>hello@example.com</p>
          </div>
          <div className="contact-item">
            <h4>📱 Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="contact-item">
            <h4>📍 Location</h4>
            <p>San Francisco, CA</p>
          </div>
          <div className="contact-item">
            <h4>🕒 Available</h4>
            <p>Mon - Fri, 9AM - 6PM</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Send a Message</h2>
        {isSubmitted ? (
          <div className="success-message">
            <h3>✅ Message Sent!</h3>
            <p>Thank you for reaching out. I'll get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        )}
      </div>

      <div className="container">
        <h2>Let's Connect</h2>
        <p>I'm always interested in discussing new opportunities, creative projects, or just having a chat about technology and development.</p>
        <div className="social-links">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">GitHub</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">Portfolio</a>
        </div>
      </div>
    </div>
  );
}

export default Contact;