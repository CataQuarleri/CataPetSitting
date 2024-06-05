import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <Link to="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
        <Link to="/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
        <Link to="/contact" className={styles.footerLink}>Contact</Link>
      </div>
      <div className={styles.footerText}>
        &copy; {new Date().getFullYear()} Cata's Pet Sitting Services.  All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
