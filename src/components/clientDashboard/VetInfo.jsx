import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../stores/userStore'
import Input from './Input.jsx'
import styles from './clientStyles.module.css'
function VetInfo() {
    const { userData, updateProfile, setUserData, loading } = useUserStore();
    const [editVetInfo, setEditVetInfo] = useState(false)
    const [formData, setFormData] = useState(userData)
    const toggleEdit = () => {
        setEditVetInfo(!editVetInfo);
      };

    	const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        setEditVetInfo(false)
        const payload = formData;
        console.log('payload', payload);
        updateProfile(payload)
        // userStore.updateProfile(payload);
        // navigate('/');
      };
      useEffect(() => {
        setFormData(userData);
      }, [userData]);
    return (
      <div className={styles.userProfile}>
        <div className={styles.profileHeader}><p className={styles.header}>VETERINARIAN CONTACT INFORMATION</p>
        <div className={styles.toggleSwitchContainer}> <label className={styles.toggleSwitch}>
          <input type="checkbox" checked={editVetInfo} onChange={toggleEdit} />
          <span className={styles.slider}></span>
        </label>Edit Vet Info</div>
      </div>
{  !loading &&  <form onSubmit={handleUpdateSubmit}>
            <Input setFormData={setFormData} label="Name of Dr or institution" data="vet" nestedData={userData.vetInfo["vet"]}  editProfile={editVetInfo}/>
            <Input setFormData={setFormData} label="Address" data="address" nestedData={userData.vetInfo["address"]}   editProfile={editVetInfo}/>
            <Input setFormData={setFormData} label="Website" data="website" nestedData={userData.vetInfo["website"]}   editProfile={editVetInfo}/>
            <Input setFormData={setFormData} label="Phone" data="phone" nestedData={userData.vetInfo["phone"]}   editProfile={editVetInfo}/>
            {editVetInfo && <button type="submit" className={styles.toggleButton}>Update</button>}
            </form>}
      </div>
    );
}

export default VetInfo