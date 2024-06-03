import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import styles from './navbar.module.css';
import axios from 'axios'
import logo from '/images/logo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); //manages menu on mobile screen
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const dropdownBtn = ["My Portal", "New Client"]

  return (
    <>
      <nav className={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="shop logo" className={styles.logo} />
        </Link>
        <div className={styles.hamburger} onClick={toggleMenu}>
          ☰
        </div>
        <div className={`${menuOpen ? styles.menu :  styles.displayNone} ${menuOpen ? styles.menuOpen : ''}`}>
          <Link to="/" className={styles.link}>HOME</Link>
          <Link to="/about-us" className={styles.link}>ABOUT US</Link>
          <div className={styles.dropdown}>
            <div className={styles.dropbtn}>CLIENT PORTAL</div>
            <div className={styles.dropdownContent}>
                {dropdownBtn.map((action, i) =>  <Link key={i} to={`/clientportal/${action}`} className={styles.dropdownLink}>{action?.toUpperCase()}</Link> )}
            </div>
          </div>
          {/* <Link to="/login" className={styles.link}>LOGIN/SIGNUP</Link> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
