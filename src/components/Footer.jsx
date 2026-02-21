import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Grid */}
        <div className="footer-grid">
          <div className="footer-col">
            <h4>HOSTING</h4>
            <a href="/">Web hosting</a>
            <a href="/">Hosting for WordPress</a>
            <a href="/">VPS hosting</a>
            <a href="/">Cloud hosting</a>
            <a href="/">Business email</a>
            <a href="/">Hosting for agencies</a>
          </div>

          <div className="footer-col">
            <h4>DOMAIN</h4>
            <a href="/">Domain name search</a>
            <a href="/">Cheap domain names</a>
            <a href="/">WHOIS Lookup</a>
            <a href="/">Free SSL certificate</a>
            <a href="/">Domain transfer</a>
            <a href="/">Premium domains</a>
          </div>

          <div className="footer-col">
            <h4>TOOLS</h4>
            <a href="/">Website Builder</a>
            <a href="/">AI Website Builder</a>
            <a href="/">Ecommerce Website Builder</a>
            <a href="/">Domain Name Generator</a>
            <a href="/">AI Logo Generator</a>
            <a href="/">Migrate to Ananta</a>
          </div>

          <div className="footer-col">
            <h4>INFORMATION</h4>
            <a href="/">Pricing</a>
            <a href="/">Reviews</a>
            <a href="/">Affiliate program</a>
            <a href="/">Referral program</a>
            <a href="/">System status</a>
            <a href="/">Sitemap</a>
          </div>

          <div className="footer-col">
            <h4>COMPANY</h4>
            <a href="/">About Ananta</a>
            <a href="/">Our technology</a>
            <a href="/">Newsroom</a>
            <a href="/">Career</a>
            <a href="/">Blog</a>
            <a href="/">Sustainability</a>
          </div>

          <div className="footer-col">
            <h4>SUPPORT</h4>
            <a href="/">Tutorials</a>
            <a href="/">Knowledge Base</a>
            <a href="/">Ananta Academy</a>
            <a href="/">Contact us</a>
            <a href="/">Report abuse</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div>
            <h2 className="footer-logo">ANANTA</h2>

            <div className="payments">
              <span>VISA</span>
              <span>MC</span>
              <span>AMEX</span>
              <span>DISC</span>
              <span>UPI</span>
              <a href="/" className="more">
                and more
              </a>
            </div>
          </div>

          <div className="socials">
            <a href="/">in</a>
            <a href="/">f</a>
            <a href="/">ig</a>
            <a href="/">x</a>
            <a href="/">yt</a>
            <a href="/">t</a>
          </div>
        </div>

        {/* Last */}
        <div className="footer-last">
          <p>
            © 2004-2026 Ananta — Launch, grow, and succeed online, supported by
            AI.
          </p>

          <div className="footer-links">
            <a href="/">Privacy policy</a>
            <a href="/">Refund policy</a>
            <a href="/">Terms of service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
