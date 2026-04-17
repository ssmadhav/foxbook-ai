import React from 'react';
import { Settings, Users, Globe, ShieldCheck } from 'lucide-react';
import './Features.css';

const featuresData = [
  {
    icon: <Settings size={28} />,
    title: 'No-Code Setup',
    description: 'Launch your booking page in under 2 minutes.'
  },
  {
    icon: <Users size={28} />,
    title: 'Team Management',
    description: 'Sync multiple staff members and locations effortlessly.'
  },
  {
    icon: <Globe size={28} />,
    title: 'Global Ready',
    description: 'Automatic timezone detection and multi-language support.'
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Deposit Protection',
    description: 'Take payments upfront via Shopify or Square to secure bookings.'
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Everything Covered</h2>
          <p className="section-subtitle">
            All the powerful features you need, without the bloat.
          </p>
        </div>
        
        <div className="features-grid">
          {featuresData.map((feature, i) => (
            <div key={i} className="feature-card glass-panel">
              <div className="fc-icon">
                {feature.icon}
              </div>
              <h3 className="fc-title">{feature.title}</h3>
              <p className="fc-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
