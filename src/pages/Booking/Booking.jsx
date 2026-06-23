import React, { useState } from 'react';
import { servicesList, timeSlots } from '../../data/content';
import Button from '../../components/UI/Button';
import NailStroke from '../../components/Shared/NailStroke';
import styles from './Booking.module.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', date: '', time: '', requests: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone)) tempErrors.phone = 'Valid 10-digit phone is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) tempErrors.email = 'Valid email is required';
    if (!formData.service) tempErrors.service = 'Please select a service';
    if (!formData.date) tempErrors.date = 'Please select a date';
    if (!formData.time) tempErrors.time = 'Please select a time';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <div className="page-container">
        <section className={`section-padding ${styles.successSection}`}>
          <div className={styles.successCard}>
            <span className={styles.successIcon}>✓</span>
            <h2>Booking Request Received!</h2>
            <p>Thank you, {formData.name}. We will confirm your appointment for <strong>{formData.service}</strong> within 2 hours via WhatsApp or email.</p>
            <Button to="/" variant="secondary" className={styles.successBtn}>Back to Home</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page-container">
      <section className={`section-padding ${styles.bookingSection}`}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles.strokeWrapper}>
              <NailStroke />
              <h1 className={styles.title}>Book Your Session</h1>
            </div>
            <p className={styles.subtitle}>Secure your spot. We'll confirm within 2 hours.</p>
          </div>

          <div className={styles.layout}>
            <form onSubmit={handleSubmit} className={styles.form} noValidate>
              <div className={styles.formGroup}>
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Priya Sharma" />
                {errors.name && <span className={styles.error}>{errors.name}</span>}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="9876543210" />
                  {errors.phone && <span className={styles.error}>{errors.phone}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="hello@example.com" />
                  {errors.email && <span className={styles.error}>{errors.email}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="service">Service *</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a service</option>
                  {servicesList.map(s => <option key={s.id} value={s.name}>{s.name} - {s.price}</option>)}
                </select>
                {errors.service && <span className={styles.error}>{errors.service}</span>}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="date">Preferred Date *</label>
                  <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
                  {errors.date && <span className={styles.error}>{errors.date}</span>}
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="time">Preferred Time *</label>
                  <select id="time" name="time" value={formData.time} onChange={handleChange}>
                    <option value="">Select time</option>
                    {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.time && <span className={styles.error}>{errors.time}</span>}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="requests">Special Requests</label>
                <textarea id="requests" name="requests" rows="4" value={formData.requests} onChange={handleChange} placeholder="Any specific designs, colors, or preferences..."></textarea>
              </div>

              <Button type="submit" className={styles.submitBtn}>Confirm Booking Request</Button>
            </form>

            <aside className={styles.sidebar}>
              <div className={styles.whatsappCta}>
                <h3>Prefers WhatsApp?</h3>
                <p>Skip the form and book us directly on WhatsApp for instant replies.</p>
                <a 
                  href="https://wa.me/919876543210?text=Hi%20Priya!%20I'd%20like%20to%20book%20a%20nail%20appointment." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.waBtn}
                >
                  Chat on WhatsApp
                </a>
              </div>
              <div className={styles.infoCard}>
                <p><strong>📍 Location:</strong> Adajan, Surat</p>
                <p><strong>🕐 Hours:</strong> Mon-Sat, 10AM - 8PM</p>
                <p><strong>💳 Payment:</strong> Cash, UPI, Cards accepted</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;