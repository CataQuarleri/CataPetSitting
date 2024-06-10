
import { Link } from 'react-router-dom';
import styles from './sidebarNav.module.css';
import { useState } from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { MdOutlineContactEmergency } from "react-icons/md";
import { BsHouseHeart } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { LiaUserNurseSolid } from "react-icons/lia";
import { TbPaw } from "react-icons/tb";
import { TiPlus } from "react-icons/ti";

function SidebarNav({ setSelectedMenuItem }) {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = useState()
  const toggleProfileDropdown = () => {
    setProfileDropdownOpen(!isProfileDropdownOpen);
  };
  return (
    <div className={`${styles.sidebar}`}>
    {/* <button onClick={()=> setSelectedMenuItem('profile')} className={styles.link}>My Profile</button> */} 
    <button onClick={()=> setSelectedMenuItem('service')} className={styles.link}><FaRegCalendarAlt /> Services</button>
    <button className={styles.link} onClick={toggleProfileDropdown}>
    <FiUser />     
 My Profile {isProfileDropdownOpen ? <MdKeyboardArrowUp />
 : <MdKeyboardArrowDown />
}
      </button>
      {isProfileDropdownOpen && (
        <div className={styles.dropdownMenu}>
          <button onClick={()=> setSelectedMenuItem('profile')} className={styles.dropdownLink}><FiUser />
Client Details</button>
          <button onClick={()=> setSelectedMenuItem('emergencyContact')} className={styles.dropdownLink}><MdOutlineContactEmergency />
Emergency Contacts</button>
          <button onClick={()=> setSelectedMenuItem('houseInstructions')} className={styles.dropdownLink}><BsHouseHeart />
House Instructions</button>
          <button onClick={()=> setSelectedMenuItem('address')} className={styles.dropdownLink}><IoLocationOutline />
Address</button>
          <button onClick={()=> setSelectedMenuItem('vetInfo')} className={styles.dropdownLink}><LiaUserNurseSolid />
Vet Info</button>
          <div className={styles.dropdownSection}>
            <span className={styles.sectionTitle}><TbPaw />

 Pets</span>
            <button onClick={()=> setSelectedMenuItem('pets')} className={styles.dropdownLink}><TbPaw />
 MyPet1</button>
            <button onClick={()=> setSelectedMenuItem('addPet')} className={styles.dropdownLink}><TiPlus />
Add Pet</button>
          </div>
        </div>
      )}
   
    <button onClick={()=> setSelectedMenuItem('logOut')} className={`${styles.link} ${styles.lastLink}`}>Log Out</button>
  </div>
  );
};

export default SidebarNav;
