import { motion } from 'framer-motion';
import './About.css';

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Product Design Support',
    description: 'Expert guidance from concept to final product — we help you create apparel that tells your brand story.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Corporate & Events',
    description: 'Recreational t-shirts for corporates, events, and organizations — bulk orders with premium quality.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
    title: 'Sports Team Jerseys',
    description: 'High-performance jerseys with antimicrobial, superwick, and UV protection fabrics for athletes.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    title: 'Startup Brands',
    description: 'Low MOQ options starting from just 5 pcs per color — perfect for emerging brands and small batches.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Why Crew Fit</span>
          <h2 className="section-title">Built for Your Brand</h2>
          <p className="section-subtitle">
            We specialize in bulk customized apparel with durable fabrics,
            modern designs, and a commitment to making your brand stand out.
          </p>
        </motion.div>

        <motion.div
          className="about__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="about__card glass-card"
              variants={cardVariants}
            >
              <div className="about__card-icon">{service.icon}</div>
              <h3 className="about__card-title">{service.title}</h3>
              <p className="about__card-desc">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="about__highlights"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="about__highlight">
            <span className="about__highlight-icon">🧵</span>
            <div>
              <strong>Premium Fabrics</strong>
              <p>100% Cotton, French Terry, Single Jersey, Micro Polyester</p>
            </div>
          </div>
          <div className="about__highlight">
            <span className="about__highlight-icon">🎨</span>
            <div>
              <strong>40+ Color Options</strong>
              <p>Standard palette + custom colors with 60 pcs MOQ</p>
            </div>
          </div>
          <div className="about__highlight">
            <span className="about__highlight-icon">📐</span>
            <div>
              <strong>Size Range S–2XL</strong>
              <p>Comprehensive sizing with detailed measurement charts</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
