import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../stores/userStore'
import Input from './Input.jsx'
import styles from './clientStyles.module.css'
function HouseInstructions() {
    const { userData, updateProfile, setUserData, loading } = useUserStore();
    const [editHouseInstructions, setEditHouseInstructions] = useState(false)
    const [formData, setFormData] = useState(userData)
    const toggleEdit = () => {
        setEditHouseInstructions(!editHouseInstructions);
      };

    	const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        setEditHouseInstructions(false)
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
        <div className={styles.profileHeader}><h3 className={styles.header}>HOUSE INSTRUCTIONS</h3>
        <div className={styles.toggleSwitchContainer}> <label className={styles.toggleSwitch}>
          <input type="checkbox" checked={editHouseInstructions} onChange={toggleEdit} />
          <span className={styles.slider}></span>
        </label>Edit House Instructions</div>
      </div>
{  !loading &&  <form onSubmit={handleUpdateSubmit}>
            <Input setFormData={setFormData} label="Street" data="address.street"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="City" data="address.city"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="State" data="address.state"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="Country" data="address.country"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="Zip Code" data="address.zip"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="House Instructions" data="houseInstructions" editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="Who's Address is this?" data="address.typeOfAddress" editProfile={editHouseInstructions}/>
    <div className={styles.entry} style={{display: !editHouseInstructions ? !userData.houseInstructions && "none" : "flex"}}>
            
            <label htmlFor="houseInstructions" className={styles.label}>House Instructions</label>
            <textarea type="text" name="houseInstructions" placeholder="Write as many details as you consider important: How to access? Any tricks with any door? When to take out the trash. Does any plant have special needs? "  className={styles.input} style={{width: '100%'}}></textarea>
            </div>
            {editHouseInstructions && <button type="submit" className={styles.toggleButton}>Update</button>}
            </form>}
      </div>
    );
}

export default HouseInstructions