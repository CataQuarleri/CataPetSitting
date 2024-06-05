// HeroSection.jsx
import React from 'react';
import styles from './hero.module.css';

function Hero(){
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>Professional Dog Walking and Pet Sitting Services</h1>
        <p>Teiemer ntoferioh daow oosg suiafd srahointes</p>
        <button className={styles.ctaButton}>Frelim us</button>
      </div>
    </section>
  );
};

export {Hero};
