import React from "react";
import "./HostingPlans.css";

const HostingPlans = () => {
  const plans = [
    {
      title: "Web Hosting",
      desc: "Perfect for beginners and small websites.",
      icon: "🌐",
      tag: "Most Popular",
    },
    {
      title: "Cloud Hosting",
      desc: "High performance hosting for growing businesses.",
      icon: "☁️",
      tag: "Best Value",
    },
    {
      title: "VPS Hosting",
      desc: "Full control with powerful resources.",
      icon: "🖥️",
      tag: "Advanced",
    },
    {
      title: "WordPress Hosting",
      desc: "Optimized hosting for WordPress websites.",
      icon: "🟦",
      tag: "Fast Setup",
    },
  ];

  return (
    <section className="plans-section">
      <div className="plans-inner">
        <h2 className="section-title">Choose Your Hosting</h2>
        <p className="section-subtitle">
          Everything you need to build, launch and grow your online presence —
          with speed, security and support.
        </p>

        <div className="plans-grid">
          {plans.map((item, index) => (
            <div className="plan-card" key={index}>
              <div className="plan-top">
                <div className="plan-icon">{item.icon}</div>
                <span className="plan-tag">{item.tag}</span>
              </div>

              <h3 className="plan-title">{item.title}</h3>
              <p className="plan-desc">{item.desc}</p>

              <div className="plan-actions">
                <button className="btn-outline">Learn More</button>
                <button className="btn-solid">Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingPlans;
