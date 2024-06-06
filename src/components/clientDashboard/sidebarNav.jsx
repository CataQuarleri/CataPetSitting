
import { Link } from 'react-router-dom';
import styles from './sidebarNav.module.css';

function SidebarNav({ setSelectedMenuItem }) {
  return (
    <div className={`${styles.sidebar}`}>
    <button onClick={()=> setSelectedMenuItem('profile')} className={styles.link}>My Profile</button>
    <button onClick={()=> setSelectedMenuItem('service')} className={styles.link}>Request a Service</button>
    <button onClick={()=> setSelectedMenuItem('pets')} className={styles.link}>My Pets</button>
    <button onClick={()=> setSelectedMenuItem('addInfo')} className={styles.link}>Add Information</button>
    <button onClick={()=> setSelectedMenuItem('addPet')} className={styles.link}>Add a Pet</button>
    <button onClick={()=> setSelectedMenuItem('logOut')} className={`${styles.link} ${styles.lastLink}`}>Log Out</button>
  </div>
  );
};

export default SidebarNav;
