import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <nav className="navbar" ref={navRef}>
      {/* Left Logo */}
      <div className="nav-left">
        <div className="brand">
          <span className="brand-text">ANANTA</span>
          <span className="brand-wave"></span>
        </div>
      </div>

      {/* Center */}
      <div className="nav-center">
        {/* SERVICES Mega Menu */}
        <div className="nav-item">
          <button className="nav-link" onClick={() => toggleMenu("services")}>
            Services <span className="arrow">▾</span>
          </button>

          {openMenu === "services" && (
            <div className="mega-dropdown">
              <div className="mega-grid">
                {/* Column 1 */}
                <div className="mega-col">
                  <p className="mega-title">HOSTING</p>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🟦</span>
                    <span className="mi-text">
                      <b>Managed hosting for WordPress</b>
                      <small>Optimized for the world’s most popular CMS</small>
                    </span>
                    <span className="tag ai">AI</span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🛒</span>
                    <span className="mi-text">
                      <b>Managed hosting for WooCommerce</b>
                      <small>Build and grow an ecommerce website</small>
                    </span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🌐</span>
                    <span className="mi-text">
                      <b>Web hosting</b>
                      <small>Secure, speedy, reliable services</small>
                    </span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">☁️</span>
                    <span className="mi-text">
                      <b>Cloud hosting</b>
                      <small>The tools to level-up your business</small>
                    </span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🏢</span>
                    <span className="mi-text">
                      <b>Agency hosting</b>
                      <small>Designed for professionals and agencies</small>
                    </span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">⚙️</span>
                    <span className="mi-text">
                      <b>Node.js web apps hosting</b>
                      <small>Deploy modern web apps instantly</small>
                    </span>
                    <span className="tag popular">POPULAR</span>
                  </a>
                </div>

                {/* Column 2 */}
                <div className="mega-col">
                  <p className="mega-title">WEBSITES</p>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🧩</span>
                    <span className="mi-text">
                      <b>Website Builder</b>
                      <small>Create a website in 3 easy steps</small>
                    </span>
                    <span className="tag ai">AI</span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🛍️</span>
                    <span className="mi-text">
                      <b>Ecommerce Website Builder</b>
                      <small>Get straight to business with an online store</small>
                    </span>
                    <span className="tag ai">AI</span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">✨</span>
                    <span className="mi-text">
                      <b>Horizons</b>
                      <small>Launch a no-code site or web app with AI</small>
                    </span>
                    <span className="tag ai">AI</span>
                  </a>

                  <p className="mega-title mega-spacer">VPS</p>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🖥️</span>
                    <span className="mi-text">
                      <b>VPS hosting</b>
                      <small>Get a powerful AI-managed VPS</small>
                    </span>
                    <span className="tag ai">AI</span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🔗</span>
                    <span className="mi-text">
                      <b>Self-hosted n8n</b>
                      <small>Run n8n AI workflows with full control</small>
                    </span>
                    <span className="tag popular">POPULAR</span>
                  </a>
                </div>

                {/* Column 3 */}
                <div className="mega-col">
                  <p className="mega-title">DOMAINS</p>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🌍</span>
                    <span className="mi-text">
                      <b>Domain name search</b>
                      <small>Find and register your website address</small>
                    </span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">🔁</span>
                    <span className="mi-text">
                      <b>Domain transfer</b>
                      <small>Transfer a domain fast and easy</small>
                    </span>
                  </a>

                  <p className="mega-title mega-spacer">EMAIL</p>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">📣</span>
                    <span className="mi-text">
                      <b>Email marketing</b>
                      <small>Create & send campaigns with AI</small>
                    </span>
                    <span className="tag new">NEW</span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">✉️</span>
                    <span className="mi-text">
                      <b>Business email</b>
                      <small>Professional email to build your brand</small>
                    </span>
                  </a>

                  <a className="mega-item" href="/">
                    <span className="mi-icon">G</span>
                    <span className="mi-text">
                      <b>Google Workspace</b>
                      <small>Boost productivity for your team</small>
                    </span>
                  </a>

                  {/* Bottom Card */}
                  <a className="mega-bottom-card" href="/">
                    <div>
                      <b>Migrate a website</b>
                      <p>Migrate a site from elsewhere, fast and free</p>
                    </div>
                    <span className="go">↗</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* DOMAINS small dropdown */}
        <div className="nav-item">
          <button className="nav-link" onClick={() => toggleMenu("domains")}>
            Domains <span className="arrow">▾</span>
          </button>

          {openMenu === "domains" && (
            <div className="dropdown">
              <a href="/">Register Domain</a>
              <a href="/">Transfer Domain</a>
              <a href="/">WHOIS Lookup</a>
              <a href="/">Premium Domains</a>
            </div>
          )}
        </div>

        {/* Pricing */}
        <div className="nav-item">
          <a className="nav-link simple-link" href="/">
            Pricing
          </a>
        </div>

        {/* Support */}
        <div className="nav-item">
          <button className="nav-link" onClick={() => toggleMenu("support")}>
            Support <span className="arrow">▾</span>
          </button>

          {openMenu === "support" && (
            <div className="dropdown">
              <a href="/">Help Center</a>
              <a href="/">Tutorials</a>
              <a href="/">Live Chat</a>
              <a href="/">Contact Us</a>
            </div>
          )}
        </div>
      </div>

      {/* Right */}
      <div className="nav-right">
        <a className="login" href="/">
          Login
        </a>
        <button className="btn-start">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
