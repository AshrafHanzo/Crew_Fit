import { useState } from 'react';
import { motion } from 'framer-motion';
import products from '../data/products';
import ProductCard from './ProductCard';
import SizeChart from './SizeChart';
import './Products.css';

const categories = [
  { key: 'all', label: 'All Products' },
  { key: 'oversized', label: 'Oversized Tees' },
  { key: 'polo', label: 'Classic Polos' },
  { key: 'roundneck', label: 'Round Neck' },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filtered =
    activeCategory === 'all'
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="products section" id="products">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Collection</span>
          <h2 className="section-title">Product Catalog</h2>
          <p className="section-subtitle">
            Explore our premium range of custom apparel — from oversized tees to
            classic polos, all at competitive prices including printing.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="products__tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`products__tab ${activeCategory === cat.key ? 'products__tab--active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
              id={`filter-${cat.key}`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <motion.div
          className="products__grid"
          layout
        >
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onViewDetails={() => setSelectedProduct(product)}
            />
          ))}
        </motion.div>
      </div>

      {/* Size Chart Modal */}
      {selectedProduct && (
        <SizeChart
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
