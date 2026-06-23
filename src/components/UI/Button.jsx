import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = ({ children, to, onClick, type = 'button', variant = 'primary', className = '' }) => {
  const classNames = `${styles.btn} ${styles[variant]} ${className}`;
  
  if (to) {
    return (
      <Link to={to} className={classNames} role="button">
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classNames}>
      {children}
    </button>
  );
};

export default Button;