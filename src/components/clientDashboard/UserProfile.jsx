import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../stores/userStore'
import Input from './Input.jsx'
import styles from './clientStyles.module.css'
function UserProfile() {
    const { userData } = useUserStore();
    const [editProfile, setEditProfile] = useState(false)
    const toggleEdit = () => {
        setEditProfile(!editProfile);
      };
    
  
    return (
      <div className={styles.userProfile}>
        <div className={styles.profileHeader}><h3 className={styles.header}>User Profile</h3>
        <div className={styles.toggleSwitchContainer}> <label className={styles.toggleSwitch}>
          <input type="checkbox" checked={editProfile} onChange={toggleEdit} />
          <span className={styles.slider}></span>
        </label>Edit profile</div>
        
       
      </div>
      <form onSubmit="">
            <Input label="First Name" data="firstName" editProfile={editProfile}/>
            <Input label="Last Name" data="lastName" editProfile={editProfile}/>
            <Input label={editProfile ? "To change your Email address, contact us to ..." : "Email"} data="email" editProfile={editProfile}/>
            <Input label="Main Phone#" data="phone" editProfile={editProfile}/>
            <div className={styles.entry} style={{display: !editProfile ? !userData.contactPreference && "none" : "flex"}}>
              <label htmlFor={userData.contactPreference} className={styles.label}>Contact Preference</label>
              <select
                name={userData.contactPreference}
                value={userData.contactPreference}
                disabled={!editProfile}
                className={styles.input}
              >
              <option value='Email'>Email</option>
              <option value='Phone Call'>Phone Call</option>
              <option value='Text Message'>Text Message</option>
              <option value='WhatsApp'>WhatsApp</option>
              </select>
            </div> 
            <Input label="First Name" data="firstName" editProfile={editProfile}/>
            {/* <Input label="Address" data="address" editProfile={editProfile}/> */}
            {/* <div className={styles.entry}>
              <label htmlFor={userData.address.id} className={styles.label}>{entry[0]}</label>
              <input
                name={userData.address.id}
                value={entry[1]}
                disabled={!editProfile}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor={entry[1]} className={styles.label}>{entry[0]}</label>
              <input
                name={entry[1]}
                value={entry[1]}
                disabled={!editProfile}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor={entry[1]} className={styles.label}>{entry[0]}</label>
              <input
                name={entry[1]}
                value={entry[1]}
                disabled={!editProfile}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor={entry[1]} className={styles.label}>{entry[0]}</label>
              <input
                name={entry[1]}
                value={entry[1]}
                disabled={!editProfile}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor={entry[1]} className={styles.label}>{entry[0]}</label>
              <input
                name={entry[1]}
                value={entry[1]}
                disabled={!editProfile}
                className={styles.input}
              />
            </div> */}
            {editProfile && <button type="submit" className={styles.toggleButton}>Update</button>}
            </form>
      </div>
    );
}

export default UserProfile