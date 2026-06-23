import React, { useState } from 'react';
import { contactDetails } from '../../data/content';
import Button from '../../components/UI/Button';
import NailStroke from '../../components/Shared/NailStroke';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="page-container">
      <section className={`section-padding ${styles.contactHero}`}>
        <div className="container">
          <div className={styles.header}>
            <div className={styles.strokeWrapper}>
              <NailStroke />
              <h1 className={styles.title}>Let's Connect</h1>
            </div>
          </div>

          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.infoCol}>
              <div className={styles.infoBlock}>
                <h3>Visit the Studio</h3>
                <p>{contactDetails.address}</p>
              </div>
              <div className={styles.infoBlock}>
                <h3>Call or Text</h3>
                <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
              </div>
              <div className={styles.infoBlock}>
                <h3>Email Us</h3>
                <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              </div>
              <div className={styles.infoBlock}>
                <h3>Studio Hours</h3>
                <p>{contactDetails.hours}</p>
              </div>
              <div className={styles.socialRow}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  Instagram: {contactDetails.instagram}
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formCol}>
              {isSent ? (
                <div className={styles.sentNotice}>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you shortly.</p>
                  <button onClick={() => setIsSent(false)} className={styles.sentBtn}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name">Your Name</label>
                    <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email">Your Email</label>
                    <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
                  </div>
                  <Button type="submit">Send Message</Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className={styles.mapSection} aria-label="Location Map">
        <iframe 
          src={contactDetails.mapEmbedUrl}
          width="100%" 
          height="450" 
          style={{ border: 0, display: 'block' }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Nailavé Studio Location Map"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;