import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import styles from './navbar.module.css';
import {useAuthStore} from '../../stores/authStore'
import logo from '/images/logo.png'
import{auth} from '../../auth/firebase.js'


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); //manages menu on mobile screen
  const navigate = useNavigate()
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const {userData, logOut} = useAuthStore()
  const [dropdownBtn, setDropdownBtn] = useState([])
  async function handleClientPortal(action){
    if(action == "Log Out"){
      logOut()
      navigate('/')
    }else{
      let newAction = action.replace(" ", "-")
      navigate(`/clientPortal/${newAction}`)
    }
  }
useEffect(()=>{
  if(userData){
    setDropdownBtn(["My Portal", "Log Out"])
  }else{
    setDropdownBtn(["My Portal", "New Client"])

  }
}, [userData])
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
           
                {dropdownBtn.map((action, i) => 
                  <div key={i} 
                  onClick={()=>handleClientPortal(action)}
                  className={styles.dropdownLink}>{action?.toUpperCase()}
                  </div>
              )}
            </div>
          </div>
          {/* <Link to="/login" className={styles.link}>LOGIN/SIGNUP</Link> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
