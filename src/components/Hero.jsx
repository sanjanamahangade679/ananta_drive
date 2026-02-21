import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1 className="hero-title">
          Unlimited Space. <br />
          <span>Infinite Possibilities.</span>
        </h1>

        <p className="hero-desc">
          Experience lightning-fast speeds, 99.9% uptime, and 24/7 expert
          support. Ananta Drive is the engine your digital dreams have been
          waiting for.
        </p>

        <div className="search-box">
          <input type="text" placeholder="Find your perfect domain name..." />

          <select>
            <option>.com</option>
            <option>.in</option>
            <option>.net</option>
            <option>.org</option>
          </select>

          <button className="btn-search">Search</button>
        </div>

        <div className="features">
          <div className="feature">✅ Free SSL Certificate</div>
          <div className="feature">✅ 1-Click WordPress</div>
          <div className="feature">✅ Money-Back Guarantee</div>
        </div>
      </div>

      {/* Floating icons */}
      <div className="floating-icons">
        <div className="circle whatsapp">💬</div>
        <div className="circle chat">🟢</div>
      </div>
    </section>
  );
};

export default Hero;
