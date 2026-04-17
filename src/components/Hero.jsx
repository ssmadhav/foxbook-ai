import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge">
            🦊 100% Bootstrapped by Quanfox
          </div>
          <h1 className="hero-title">
            The Future of Scheduling is <span className="text-gradient-primary">Intelligent.</span><br/>
            Meet FoxBook AI.
          </h1>
          <p className="hero-subtitle">
            The first AI-powered booking engine built for the modern merchant. Whether you're on Shopify, WooCommerce, or Magento, FoxBook AI automates your appointments so you can focus on growing your business.
          </p>
          
          <div className="hero-cta">
            <div className="waitlist-form glass-panel">
              <input type="email" placeholder="Enter your email address" className="waitlist-input" />
              <button className="btn-primary">
                Join the Waitlist
                <ArrowRight size={18} />
              </button>
            </div>
            <p className="hero-note">Coming Soon. Be the first to get access.</p>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="visual-wrapper glass-panel">
            <img src="/hero.png" alt="FoxBook AI Dashboard" className="dashboard-preview" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
