import React from 'react';
import { Link } from 'react-router-dom';
import { brandName, brandTagline, navLinks, contactDetails } from '../../data/content';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer} role="contentinfo">
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <div className={styles.logo}>
            <span className={styles.logoMain}>{brandName}</span>
            <span className={styles.logoTag}>{brandTagline}</span>
          </div>
          <p className={styles.tagline}>
            Luxury nail artistry in Surat, crafted just for you. Where every set is a masterpiece.
          </p>
        </div>

        {/* Quick Links */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Explore</h4>
          <ul className={styles.linkList}>
            {navLinks.map(link => (
              <li key={link.path}><Link to={link.path}>{link.name}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.contactCol}>
          <h4 className={styles.colTitle}>Get in Touch</h4>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📍</span>
            <p>{contactDetails.address}</p>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📞</span>
            <a href={`tel:${contactDetails.phone}`}>{contactDetails.phone}</a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.icon}>📧</span>
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} {brandName}. All rights reserved.
        </p>
        <p className={styles.madeWith}>
          Made with 💅 in Surat
        </p>
        <div className={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">{contactDetails.instagram}</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;