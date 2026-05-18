import './Footer.css';

export default function Footer() {
  const yr = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <img src="/images/logo.jpeg" alt="Crew Fit Logo" className="footer__logo-img" />
            </a>
            <p className="footer__tagline">
              Premium custom apparel for corporates, events, sports teams, and startup brands.
            </p>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-title">Quick Links</h4>
            <ul className="footer__links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#print-guide">Print Guide</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-title">Products</h4>
            <ul className="footer__links">
              <li><a href="#products">Oversized T-Shirts</a></li>
              <li><a href="#products">Classic Polos</a></li>
              <li><a href="#products">Round Neck Tees</a></li>
              <li><a href="#products">Custom Jerseys</a></li>
            </ul>
          </div>
          <div className="footer__section">
            <h4 className="footer__section-title">Contact</h4>
            <ul className="footer__links">
              <li><a href="tel:7338723696">7338723696</a></li>
              <li><a href="mailto:crewfitfashion@gmail.com">crewfitfashion@gmail.com</a></li>
              <li><span>Chennai, TN 600125</span></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© {yr} Crew Fit. All rights reserved.</p>
          <p className="footer__made">Made with ❤️ in Chennai</p>
        </div>
      </div>
    </footer>
  );
}
