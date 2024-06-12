import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../stores/userStore'
import Input from './Input.jsx'
import styles from './clientStyles.module.css'
function UserProfile() {
    const { userData, updateProfile, setUserData, loading } = useUserStore();
    const [editProfile, setEditProfile] = useState(false)
    const [formData, setFormData] = useState(userData)
    const toggleEdit = () => {
        setEditProfile(!editProfile);
      };

    	const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        setEditProfile(false)
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
        <div className={styles.profileHeader}><h3 className={styles.header}>USER PROFILE</h3>
        <div className={styles.toggleSwitchContainer}> <label className={styles.toggleSwitch}>
          <input type="checkbox" checked={editProfile} onChange={toggleEdit} />
          <span className={styles.slider}></span>
        </label>Edit Profile</div>
      </div>
{  !loading &&  <form onSubmit={handleUpdateSubmit}>
            <Input setFormData={setFormData} label="First Name" data="firstName" editProfile={editProfile}/>
            <Input setFormData={setFormData} label="Last Name" data="lastName" editProfile={editProfile}/>
            <Input setFormData={setFormData} label={editProfile ? "To change your Email address, contact us to ..." : "Email"} data="email" editProfile={editProfile}/>
            <Input setFormData={setFormData} label="Main Phone#" data="phone" editProfile={editProfile}/>
            <div className={styles.entry} style={{display: !editProfile ? !userData.contactPreference && "none" : "flex"}}>
              <label htmlFor={userData.contactPreference} className={styles.label}>Contact Preference</label>
              <select
                name={userData.contactPreference}
                value={userData.contactPreference}
                disabled={!editProfile}
                className={styles.input}
                onChange={(e)=> setFormData(prevState => ({...prevState, contactPreference: e.target.value}))}
              >
              <option value='Email'>Email</option>
              <option value='Phone Call'>Phone Call</option>
              <option value='Text Message'>Text Message</option>
              <option value='WhatsApp'>WhatsApp</option>
              </select>
            </div> 
            {editProfile && <button type="submit" className={styles.toggleButton}>Update</button>}
            </form>}
      </div>
    );
}

export default UserProfile