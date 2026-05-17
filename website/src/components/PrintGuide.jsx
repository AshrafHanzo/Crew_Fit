import { motion } from 'framer-motion';
import './PrintGuide.css';

const placements = [
  { name: 'Brand Logo', desc: 'Pocket area — ideal for subtle brand identity', position: 'top-left' },
  { name: 'Chest', desc: 'Center chest — maximum visibility and impact', position: 'top-center' },
  { name: 'Sleeve', desc: 'Left or right sleeve — modern and trendy', position: 'top-right' },
  { name: 'A4 Print', desc: 'Back A4 size — great for detailed designs', position: 'bottom-left' },
  { name: 'A3 Print', desc: 'Back A3 size — full back statement piece', position: 'bottom-center' },
  { name: 'Collar', desc: 'Inside collar — premium branding touch', position: 'bottom-right' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PrintGuide() {
  return (
    <section className="print-guide section" id="print-guide">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Customization</span>
          <h2 className="section-title">Know Your Print Placement</h2>
          <p className="section-subtitle">
            Choose from 6 strategic print positions to make your brand pop.
            All printing charges are included in our pricing.
          </p>
        </motion.div>

        <div className="print-guide__content">
          <motion.div
            className="print-guide__image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/page_8.png"
              alt="Print placement guide showing all 6 positions"
              className="print-guide__image"
            />
            <div className="print-guide__image-glow"></div>
          </motion.div>

          <motion.div
            className="print-guide__placements"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {placements.map((placement, index) => (
              <motion.div
                key={index}
                className="print-guide__placement glass-card"
                variants={itemVariants}
              >
                <div className="print-guide__placement-number">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="print-guide__placement-info">
                  <h4 className="print-guide__placement-name">{placement.name}</h4>
                  <p className="print-guide__placement-desc">{placement.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
