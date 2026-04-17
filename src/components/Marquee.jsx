import React from 'react';
import './Marquee.css';
import { ShoppingCart, Package, ShoppingBag, Store } from 'lucide-react';

const platforms = [
  { name: 'Shopify', icon: <ShoppingBag size={24} /> },
  { name: 'WooCommerce', icon: <ShoppingCart size={24} /> },
  { name: 'Magento', icon: <Package size={24} /> },
  { name: 'BigCommerce', icon: <Store size={24} /> },
  { name: 'Wix', icon: <ShoppingBag size={24} /> },
  { name: 'Ecwid', icon: <ShoppingCart size={24} /> },
];

const Marquee = () => {
  return (
    <section className="marquee-section">
      <div className="container text-center">
        <p className="marquee-label">Your Business, Everywhere. Natively integrates with:</p>
        <div className="marquee-wrapper">
          <div className="marquee">
            {platforms.map((platform, i) => (
              <div key={i} className="marquee-item">
                {platform.icon}
                <span>{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
