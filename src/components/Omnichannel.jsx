import React from 'react';
import { MessageSquare, Mail, PhoneCall } from 'lucide-react';
import './Omnichannel.css';

const Omnichannel = () => {
  return (
    <section className="omnichannel">
      <div className="container omnichannel-container">
        <div className="omni-visual">
          <div className="omni-image-wrapper">
            <img src="/omnichannel.png" alt="Omnichannel Notifications" className="omni-graphic" />
          </div>
        </div>
        
        <div className="omni-content">
          <h2 className="section-title">Never Miss a Beat with Triple-Threat Notifications.</h2>
          <p className="omni-desc">
            We don't just send emails. FoxBook AI keeps your customers engaged through their preferred channels.
          </p>
          
          <ul className="omni-features">
            <li className="omni-feature-item">
              <div className="icon-wrapper">
                <MessageSquare size={24} />
              </div>
              <div className="feature-text">
                <h4>SMS Alerts</h4>
                <p>Instant confirmations and reminders directly to their phone.</p>
              </div>
            </li>
            
            <li className="omni-feature-item">
              <div className="icon-wrapper">
                <Mail size={24} />
              </div>
              <div className="feature-text">
                <h4>Smart Email</h4>
                <p>Beautifully branded, AI-optimized templates for higher engagement.</p>
              </div>
            </li>
            
            <li className="omni-feature-item">
              <div className="icon-wrapper">
                <PhoneCall size={24} />
              </div>
              <div className="feature-text">
                <h4>Voice Call Messaging</h4>
                <p>Automated voice reminders for high-value appointments.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Omnichannel;
