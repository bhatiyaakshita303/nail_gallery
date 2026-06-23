import React from 'react';
import styles from './Shared.module.css';

const NailStroke = () => (
  <svg 
    className={styles.nailStroke} 
    viewBox="0 0 400 80" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path 
      d="M-10 60C50 20 150 10 250 30C350 50 400 20 420 10" 
      stroke="#C9847A" 
      strokeWidth="4" 
      strokeLinecap="round"
      opacity="0.6"
    />
    <path 
      d="M-10 70C60 40 160 30 260 45C360 60 410 35 430 25" 
      stroke="#E8D5C4" 
      strokeWidth="6" 
      strokeLinecap="round"
      opacity="0.8"
    />
  </svg>
);

export default NailStroke;