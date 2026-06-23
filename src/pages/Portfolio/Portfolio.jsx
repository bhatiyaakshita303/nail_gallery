import React, { useState } from 'react';
import { portfolioItems } from '../../data/content';
import Button from '../../components/UI/Button';
import NailStroke from '../../components/Shared/NailStroke';
import styles from './Portfolio.module.css';

const categories = ['All', 'Gel', 'Nail Art', 'Bridal', 'Extensions'];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <div className="page-container">
      <section className={`section-padding ${styles.portfolioHeader}`} aria-label="Portfolio Header">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.strokeWrapper}>
              <NailStroke />
              <h1 className={styles.title}>The Portfolio</h1>
            </div>
            <p className={styles.subtitle}>
              A curated collection of bespoke nail art, extensions, and bridal masterpieces.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className={styles.filters} role="tablist" aria-label="Filter portfolio by category">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeFilter === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveFilter(cat)}
                role="tab"
                aria-selected={activeFilter === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className={styles.gallerySection} aria-label="Portfolio Gallery">
        <div className={`container ${styles.masonryGrid}`}>
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`${styles.masonryItem} ${index % 3 === 1 ? styles.masonryTall : ''}`}
            >
              <img src={item.image} alt={item.alt} loading="lazy" />
              <div className={styles.masonryOverlay}>
                <span className={styles.masonryCat}>{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className={styles.customCta} aria-label="Custom Nail Art Request">
        <div className="container">
          <div className={styles.customCtaContent}>
            <h2>Have a unique vision?</h2>
            <p>Send us your mood board, and Priya will create a custom nail art design just for you.</p>
            <Button to="/contact" variant="secondary" className={styles.customCtaBtn}>
              Request Custom Art
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;