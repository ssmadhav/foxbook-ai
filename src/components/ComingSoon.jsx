import React from 'react';
import { ArrowRight } from 'lucide-react';
import './ComingSoon.css';

const ComingSoon = () => {
  return (
    <section className="coming-soon">
      <div className="cs-background" style={{ backgroundImage: "url('/abstract-bg.png')" }}></div>
      <div className="cs-overlay"></div>
      
      <div className="container cs-container">
        <h2 className="cs-title">Something Big is Hitting the App Store.</h2>
        <p className="cs-desc">
          We are currently in private beta, fine-tuning our AI to ensure your success. No reviews yet? That's because we're building the future, not repeating the past.
        </p>
        
        <button className="btn-primary glow-effect">
          Be the First to Know — Sign Up for Early Access
          <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default ComingSoon;
