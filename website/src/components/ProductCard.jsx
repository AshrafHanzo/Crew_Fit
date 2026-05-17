import { motion } from 'framer-motion';

export default function ProductCard({ product, index, onViewDetails }) {
  return (
    <motion.div
      className="product-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      layout
    >
      <div className="product-card__image-wrapper">
        <img
          src={product.image}
          alt={`${product.name} — ${product.subtitle}`}
          className="product-card__image"
          loading="lazy"
        />
        <span className="product-card__badge">₹{product.price}</span>
        <span className="product-card__gsm">{product.gsm} GSM</span>
      </div>

      <div className="product-card__body">
        <span className="product-card__fit">{product.fit}</span>
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__subtitle">{product.subtitle}</p>

        <div className="product-card__fabric">
          <span className="product-card__fabric-dot"></span>
          {product.fabric}
        </div>

        <div className="product-card__features">
          {product.features.map((f) => (
            <span key={f} className="product-card__feature-tag">
              {f}
            </span>
          ))}
        </div>

        <div className="product-card__colors">
          {product.colors.slice(0, 6).map((color) => (
            <span
              key={color.name}
              className="product-card__color-swatch"
              style={{ backgroundColor: color.hex }}
              title={color.name}
              data-color={color.name}
            ></span>
          ))}
          {product.colors.length > 6 && (
            <span className="product-card__color-more">
              +{product.colors.length - 6}
            </span>
          )}
        </div>

        <div className="product-card__footer">
          <div className="product-card__price">
            <span className="product-card__price-amount">₹{product.price}</span>
            <span className="product-card__price-note">{product.priceNote}</span>
          </div>
          <div className="product-card__moq">
            <strong>MOQ</strong>
            {product.moq}
          </div>
        </div>

        <button
          className="product-card__view-btn"
          onClick={onViewDetails}
          id={`view-details-${product.id}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
          View Size Chart & Details
        </button>
      </div>
    </motion.div>
  );
}
