import React from 'react';
import { CalendarClock, BellRing, ArrowRightLeft } from 'lucide-react';
import './AiEdge.css';

const AiEdge = () => {
  return (
    <section className="ai-edge" id="product">
      <div className="container">
        <div className="text-center">
          <div className="badge">The "AI Edge"</div>
          <h2 className="section-title">Beyond the Calendar.</h2>
          <p className="section-subtitle">
            Traditional booking apps like Cowlendar or Calendly are just digital planners. FoxBook AI uses machine learning to redefine scheduling.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-item glass-panel feature-large">
            <div className="feature-icon">
              <CalendarClock size={32} />
            </div>
            <h3>Smart-Scheduling</h3>
            <p>Automatically optimizes your calendar to prevent burnout and maximize revenue. Our AI learns your working patterns.</p>
          </div>
          
          <div className="bento-item glass-panel feature-small">
            <div className="feature-icon">
              <BellRing size={32} />
            </div>
            <h3>Predictive Reminders</h3>
            <p>Our AI determines the best time to send notifications to ensure zero no-shows.</p>
          </div>

          <div className="bento-item glass-panel feature-wide">
            <div className="feature-icon">
              <ArrowRightLeft size={32} />
            </div>
            <h3>Seamless Migration</h3>
            <p className="migration-text">
              Switching from Cowlendar, Appointo, or BookX? Our AI migrates your data in one click.
              <br/><br/>
              <em>[Migration Text Placeholder: Provide the specific text to convince Cowlendar users to switch!]</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiEdge;
