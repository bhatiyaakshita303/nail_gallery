import React from 'react';
import { images, artistStats, certifications } from '../../data/content';
import NailStroke from '../../components/Shared/NailStroke';
import styles from './About.module.css';

const About = () => (
  <div className="page-container">
    <section className={`section-padding ${styles.aboutHero}`} aria-label="About Priya">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <img src={images.portrait} alt="Priya Mehta, luxury nail artist, smiling elegantly in a modern salon" />
            <div className={styles.imageBorder}></div>
          </div>
          <div className={styles.textWrapper}>
            <div className={styles.strokeWrapper}>
              <NailStroke />
              <h1 className={styles.title}>The Artist</h1>
            </div>
            <h2 className={styles.name}>Priya Mehta</h2>
            <p className={styles.bio}>
              With over 8 years of experience in nail artistry, I've worked with brides, celebrities, and everyday queens across Surat and Mumbai. Every set I create is a tiny canvas — and you're my muse.
            </p>
            <p className={styles.bio}>
              My journey started with a fascination for color and design, evolving into a deep passion for the transformative power of beauty. I believe your nails are the ultimate accessory—they speak before you even say a word.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.stats} aria-label="Statistics">
      <div className="container">
        <div className={styles.statsGrid}>
          {artistStats.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className={`section-padding ${styles.philosophy}`} aria-label="Philosophy">
      <div className="container">
        <div className={styles.philosophyContent}>
          <div className={styles.strokeWrapper}>
            <NailStroke />
            <h2 className={styles.sectionTitle}>My Philosophy</h2>
          </div>
          <blockquote className={styles.pullQuote}>
            "Luxury isn't about price; it's about the intention behind every stroke, the precision in every line, and the confidence it gives you when you walk out the door."
          </blockquote>
          <p className={styles.philosophyText}>
            I don't do mass production. I do bespoke art. From the initial consultation to the final top coat, every step is meticulously executed to ensure your nails are not just done, but curated.
          </p>
        </div>
      </div>
    </section>

    <section className={styles.certs} aria-label="Certifications">
      <div className="container">
        <h3 className={styles.certsTitle}>Credentials & Training</h3>
        <ul className={styles.certsList}>
          {certifications.map((cert) => (
            <li key={cert} className={styles.certItem}>
              <span className={styles.certIcon}>✦</span>
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);

export default About;