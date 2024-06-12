// HeroSection.jsx
import React from 'react';
import styles from './hero.module.css';

function Hero(){
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
        <h1>Professional Pet Sitting Services</h1>
        <p>Professionally trained service, insured and bonded, to take great care of your pet, your plants and your house</p>
        <button className={styles.ctaButton}>Get a quote!</button>
      </div>
    </section>
  );
};

export {Hero};
