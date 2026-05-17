import { motion, AnimatePresence } from 'framer-motion';
import './SizeChart.css';

export default function SizeChart({ product, onClose }) {
  if (!product) return null;

  const { sizeChart, colors, moq, moqExtra, fabric, features, name, subtitle } = product;

  return (
    <AnimatePresence>
      <motion.div
        className="size-chart-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="size-chart-modal"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="size-chart-modal__close" onClick={onClose} id="close-size-chart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>

          <div className="size-chart-modal__header">
            <h3 className="size-chart-modal__title">{name}</h3>
            <p className="size-chart-modal__subtitle">{subtitle}</p>
          </div>

          {/* Fabric Info */}
          <div className="size-chart-modal__info">
            <div className="size-chart-modal__info-item">
              <span className="size-chart-modal__info-label">Fabric</span>
              <span className="size-chart-modal__info-value">{fabric}</span>
            </div>
            <div className="size-chart-modal__info-item">
              <span className="size-chart-modal__info-label">Features</span>
              <div className="size-chart-modal__tags">
                {features.map((f) => (
                  <span key={f} className="size-chart-modal__tag">{f}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Size Chart Table */}
          <div className="size-chart-modal__table-wrapper">
            <h4 className="size-chart-modal__table-title">{sizeChart.label}</h4>
            <table className="size-chart-modal__table">
              <thead>
                <tr>
                  <th>Area</th>
                  {sizeChart.sizes.map((s) => (
                    <th key={s}>{s}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Object.entries(sizeChart.measurements).map(([area, values]) => (
                  <tr key={area}>
                    <td className="size-chart-modal__area">{area}</td>
                    {values.map((v, i) => (
                      <td key={i}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="size-chart-modal__unit">* All measurements in inches</p>
          </div>

          {/* Colors */}
          <div className="size-chart-modal__colors">
            <h4>Available Colors</h4>
            <div className="size-chart-modal__color-grid">
              {colors.map((color) => (
                <div key={color.name} className="size-chart-modal__color-item">
                  <span
                    className="size-chart-modal__color-swatch"
                    style={{ backgroundColor: color.hex }}
                  ></span>
                  <span className="size-chart-modal__color-name">{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* MOQ */}
          <div className="size-chart-modal__moq">
            <p><strong>MOQ:</strong> {moq}</p>
            <p className="size-chart-modal__moq-extra">{moqExtra}</p>
          </div>

          {/* CTA */}
          <a href="#contact" className="btn btn-primary size-chart-modal__cta" onClick={onClose}>
            Get a Quote for This Product
          </a>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
