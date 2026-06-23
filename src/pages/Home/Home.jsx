import React from 'react';
import { images, asSeenIn, featuredServices, testimonials } from '../../data/content';
import Button from '../../components/UI/Button';
import NailStroke from '../../components/Shared/NailStroke';
import styles from './Home.module.css';

const Home = () => {
  const galleryImages = [
    images.portfolio1, images.portfolio2, images.portfolio3, images.portfolio4,
    images.portfolio5, images.portfolio6
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className={styles.hero} aria-label="Homepage Hero">
        <div className={styles.heroBg}>
          <div className={styles.heroBlur1}></div>
          <div className={styles.heroBlur2}></div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Art You Wear.<br />
            <span className={styles.heroItalic}>Every Single Day.</span>
          </h1>
          <p className={styles.heroSub}>
            Luxury nail artistry in Surat, crafted just for you.
          </p>
          <div className={styles.heroCtas}>
            <Button to="/booking">Book Appointment</Button>
            <Button to="/portfolio" variant="secondary">View Portfolio</Button>
          </div>
        </div>
      </section>

      {/* As Seen In */}
      <section className={styles.asSeenIn} aria-label="Press Features">
        <div className={styles.asSeenInContainer}>
          {asSeenIn.map((name) => (
            <span key={name} className={styles.pressName}>{name}</span>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className={`section-padding ${styles.featured}`} aria-label="Featured Services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.strokeWrapper}>
              <NailStroke />
              <h2 className={styles.sectionTitle}>Curated Services</h2>
            </div>
            <p className={styles.sectionSub}>Signature experiences designed for the modern muse.</p>
          </div>
          
          <div className={styles.featuredGrid}>
            {featuredServices.map((service) => (
              <article key={service.id} className={styles.featuredCard}>
                <span className={styles.featuredIcon}>{service.icon}</span>
                <h3 className={styles.featuredName}>{service.title}</h3>
                <p className={styles.featuredDesc}>{service.description}</p>
                <Button to={service.link} variant="secondary" className={styles.cardBtn}>
                  Learn More
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonials} aria-label="Client Testimonials">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.strokeWrapper}>
              <NailStroke />
              <h2 className={styles.sectionTitle}>Kind Words</h2>
            </div>
          </div>
          <div className={styles.testimonialScroll}>
            {testimonials.map((t) => (
              <blockquote key={t.id} className={styles.testimonialCard}>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <footer className={styles.testimonialAuthor}>
                  <img src={t.image} alt={t.name} className={styles.testimonialImg} loading="lazy" />
                  <div>
                    <cite className={styles.testimonialName}>{t.name}</cite>
                    <p className={styles.testimonialRole}>{t.role}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className={`section-padding ${styles.gallery}`} aria-label="Instagram Gallery">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.strokeWrapper}>
              <NailStroke />
              <h2 className={styles.sectionTitle}>The Archive</h2>
            </div>
            <p className={styles.sectionSub}>A glimpse into the Nailavé diary. Follow along @nailave.priya</p>
          </div>
          <div className={styles.galleryGrid}>
            {galleryImages.map((img, i) => (
              <div key={i} className={styles.galleryItem}>
                <img src={img} alt={`Nail art design ${i + 1}`} loading="lazy" />
                <div className={styles.galleryOverlay}>
                  <span>View Look</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className={styles.footerCta}>
        <div className={styles.footerCtaContent}>
          <h2 className={styles.footerCtaTitle}>Ready to transform your nails?</h2>
          <Button to="/booking" variant="dark" className={styles.footerCtaBtn}>
            Book Your Session
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;