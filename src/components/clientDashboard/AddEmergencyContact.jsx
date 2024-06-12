import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../stores/userStore'
import Input from './Input.jsx'
import styles from './clientStyles.module.css'
function UserProfile() {
    const { userData, updateProfile, setUserData, loading } = useUserStore();
    const [editEmergencyContact, setEditEmergencyContact] = useState(false)
    const [formData, setFormData] = useState(userData)
    const toggleEdit = () => {
        setEditEmergencyContact(!editEmergencyContact);
      };

    	const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        setEditEmergencyContact(false)
        const payload = formData;
        console.log('payload', payload);
        setUserData(payload)
        // userStore.updateProfile(payload);
        // navigate('/');
      };
      useEffect(() => {
        setFormData(userData);
      }, [userData]);
    return (
      <div className={styles.userProfile}>
        <div className={styles.profileHeader}><h3 className={styles.header}>EMERGENCY CONTACT</h3>
        <div className={styles.toggleSwitchContainer}> <label className={styles.toggleSwitch}>
          <input type="checkbox" checked={editEmergencyContact} onChange={toggleEdit} />
          <span className={styles.slider}></span>
        </label>Edit Contact</div>
      </div>
{  !loading &&  <form onSubmit={handleUpdateSubmit}>
            <Input setFormData={setFormData} label="Name" nestedData={userData?.emergencyContact?.name} data="emergencyContact.name" editProfile={editEmergencyContact}/>
            <Input setFormData={setFormData} label="Relation" nestedData={userData?.emergencyContact?.relation} data="emergencyContact.relation" editProfile={editEmergencyContact}/>
            <Input setFormData={setFormData} label="Phone" nestedData={userData?.emergencyContact?.phone} data="emergencyContact.phone" editProfile={editEmergencyContact}/>
            {editEmergencyContact && <button type="submit" className={styles.toggleButton}>Update</button>}
            </form>}
      </div>
    );
}

export default UserProfile