import React, { useState } from 'react';
import { servicesList, faqs, images } from '../../data/content';
import Button from '../../components/UI/Button';
import NailStroke from '../../components/Shared/NailStroke';
import styles from './Services.module.css';

const Services = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="page-container">
      {/* Hero Banner */}
      <section className={styles.hero} aria-label="Services Header">
        <div className={styles.heroBg}>
          <img src={images.service1} alt="" aria-hidden="true" />
          <div className={styles.heroOverlay}></div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.strokeWrapper}>
            <NailStroke />
            <h1 className={styles.title}>The Menu</h1>
          </div>
          <p className={styles.subtitle}>
            Curated treatments designed to nourish, beautify, and transform. 
            Every service includes a complimentary consultation.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={`section-padding ${styles.servicesGrid}`} aria-label="Services List">
        <div className="container">
          <div className={styles.grid}>
            {servicesList.map((service) => (
              <article key={service.id} className={styles.card}>
                <span className={styles.cardIcon}>{service.icon}</span>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.cardName}>{service.name}</h3>
                    <span className={styles.cardPrice}>{service.price}</span>
                  </div>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <Button to="/booking" variant="secondary" className={styles.cardBtn}>
                    Book This
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection} aria-label="Frequently Asked Questions">
        <div className="container">
          <div className={styles.sectionHeader}>
            <div className={styles.strokeWrapper}>
              <NailStroke />
              <h2 className={styles.sectionTitle}>Questions & Answers</h2>
            </div>
          </div>
          
          <div className={styles.faqList} role="list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`${styles.faqItem} ${openFaq === index ? styles.faqOpen : ''}`}
                role="listitem"
              >
                <button 
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{faq.q}</span>
                  <span className={styles.faqIcon}>{openFaq === index ? '−' : '+'}</span>
                </button>
                <div 
                  id={`faq-answer-${index}`}
                  className={styles.faqAnswer}
                  role="region"
                  hidden={openFaq !== index}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;