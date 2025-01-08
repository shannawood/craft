import React, { useState } from 'react';

function Services() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: '🌐',
      price: '$2,500',
      description: 'Custom websites and web applications built with modern technologies',
      features: [
        'Responsive Design',
        'React/Vue.js Development',
        'API Integration',
        'Performance Optimization',
        'SEO Friendly',
        'Cross-browser Compatibility'
      ],
      timeline: '2-4 weeks'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: '📱',
      price: '$4,500',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: [
        'React Native Development',
        'User Authentication',
        'Push Notifications',
        'App Store Deployment',
        'Offline Functionality',
        'Real-time Features'
      ],
      timeline: '4-8 weeks'
    },
    {
      id: 3,
      title: 'UI/UX Design',
      icon: '🎨',
      price: '$1,800',
      description: 'Modern and intuitive user interface and experience design',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Visual Design',
        'Design Systems',
        'Usability Testing'
      ],
      timeline: '1-3 weeks'
    },
    {
      id: 4,
      title: 'E-commerce Solutions',
      icon: '🛒',
      price: '$3,800',
      description: 'Complete e-commerce platforms with payment processing',
      features: [
        'Shopping Cart',
        'Payment Integration',
        'Inventory Management',
        'Order Tracking',
        'Admin Dashboard',
        'Mobile Responsive'
      ],
      timeline: '3-6 weeks'
    },
    {
      id: 5,
      title: 'Database Design',
      icon: '🗄️',
      price: '$1,500',
      description: 'Efficient database architecture and optimization',
      features: [
        'Database Modeling',
        'Query Optimization',
        'Data Migration',
        'Backup Solutions',
        'Performance Tuning',
        'Security Implementation'
      ],
      timeline: '1-2 weeks'
    },
    {
      id: 6,
      title: 'Consulting & Support',
      icon: '💡',
      price: '$150/hr',
      description: 'Technical consulting and ongoing maintenance support',
      features: [
        'Technical Consultation',
        'Code Review',
        'Performance Analysis',
        'Bug Fixes',
        'Feature Updates',
        '24/7 Support'
      ],
      timeline: 'Ongoing'
    }
  ];

  return (
    <div>
      <h1>Services</h1>
      
      <div className="container">
        <h2>What I Offer</h2>
        <p>Professional development services tailored to your business needs. From web applications to mobile apps, I deliver high-quality solutions.</p>
      </div>

      <div className="container">
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <div className="service-price">{service.price}</div>
              </div>
              <div className="service-content">
                <p>{service.description}</p>
                <button 
                  className="details-btn"
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  {selectedService === service.id ? 'Hide Details' : 'View Details'}
                </button>
                {selectedService === service.id && (
                  <div className="service-details">
                    <h4>Features Included:</h4>
                    <ul>
                      {service.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                    <div className="service-timeline">
                      <strong>Timeline:</strong> {service.timeline}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <h2>Why Choose My Services?</h2>
        <div className="benefits-grid">
          <div className="benefit-item">
            <h4>⚡ Fast Delivery</h4>
            <p>Quick turnaround times without compromising on quality</p>
          </div>
          <div className="benefit-item">
            <h4>🔧 Modern Tech</h4>
            <p>Latest technologies and best practices in development</p>
          </div>
          <div className="benefit-item">
            <h4>📞 24/7 Support</h4>
            <p>Ongoing support and maintenance after project completion</p>
          </div>
          <div className="benefit-item">
            <h4>💰 Fair Pricing</h4>
            <p>Competitive rates with transparent pricing structure</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Ready to Get Started?</h2>
        <p>Let's discuss your project requirements and create something amazing together.</p>
        <div className="cta-buttons">
          <button className="primary-btn">Get Free Quote</button>
          <button className="secondary-btn">Schedule Consultation</button>
        </div>
      </div>
    </div>
  );
}

export default Services;