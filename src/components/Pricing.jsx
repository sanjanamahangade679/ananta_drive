import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const pricing = [
    {
      name: "Premium",
      price: "₹149/mo",
      desc: "Best for personal websites",
      features: ["Free SSL", "Free Domain", "100 GB SSD", "Weekly Backups"],
      popular: false,
    },
    {
      name: "Business",
      price: "₹249/mo",
      desc: "Best for small businesses",
      features: ["Free SSL", "Free Domain", "200 GB SSD", "Daily Backups"],
      popular: true,
    },
    {
      name: "Cloud",
      price: "₹499/mo",
      desc: "Best for large projects",
      features: ["Free SSL", "Free Domain", "Unlimited SSD", "Priority Support"],
      popular: false,
    },
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-inner">
        <h2 className="section-title">Affordable Pricing Plans</h2>
        <p className="section-subtitle">
          Choose a plan that fits your needs and scale anytime.
        </p>

        <div className="pricing-grid">
          {pricing.map((item, index) => (
            <div
              key={index}
              className={`pricing-card ${item.popular ? "popular" : ""}`}
            >
              {item.popular && <div className="badge">Most Popular</div>}

              <h3 className="plan-name">{item.name}</h3>
              <div className="plan-price">{item.price}</div>
              <p className="price-desc">{item.desc}</p>

              <ul className="features-list">
                {item.features.map((f, i) => (
                  <li key={i}>
                    <span className="tick">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="btn-choose full">
                Choose Plan
                <span className="arrow">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
