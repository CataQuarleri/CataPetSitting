import React, { useEffect, useState } from 'react'
import { useUserStore } from '../../stores/userStore'
import styles from './clientStyles.module.css'
function UserProfile() {
    const { userData } = useUserStore();
    const [entries, setEntries] = useState([]);
    const [editProfile, setEditProfile] = useState(false)
    useEffect(() => {
      let entries = Object.entries(userData);
      let eachEntry = entries.map((entry, i) => {
        if (entry[0] === '_id' || entry[0] === '__v') {
          return null;
        } else if(typeof entry[1] === 'object') {
            for (const key in entry[1]){
             return  <div key={i} className={styles.entry}>
                <label htmlFor={entry[1][key]} className={styles.label}>{key}</label>
                <input
                  name={entry[1][key]}
                  value={entry[1][key]}
                  disabled
                  className={styles.input}
                />
              </div>
            }
        }else {
          return (
            <div key={i} className={styles.entry}>
              <label htmlFor={entry[1]} className={styles.label}>{entry[0]}</label>
              <input
                name={entry[1]}
                value={entry[1]}
                disabled
                className={styles.input}
              />
            </div>
          );
        }
      });
      setEntries(eachEntry);
    }, [userData]);
  
    return (
      <div className={styles.userProfile}>
        <h3 className={styles.header}>User Profile</h3>
        <button className={styles.toggleButton} onClick={()=>setEditProfile(!editProfile)}>Edit my profile</button>
        {/* {entries} */}
        
        <div className={styles.entry} style={{display: !editProfile ? userData.firstName && "flex" : "none"}}>
              <label htmlFor={userData.firstName} className={styles.label}>First Name</label>
              <input
                name={userData.firstName}
                value={userData.firstName}
                disabled={!editProfile}
                className={styles.input}
              />
            </div>
           <div className={styles.entry} style={{display: !editProfile ? userData.lastName && "flex" : "none"}}>
              <label htmlFor={userData.lastName} className={styles.label}>Last Name</label>
              <input
                name={userData.lastName}
                value={userData.lastName}
                disabled={!editProfile}
                className={styles.input}
              />
            </div> 
            <div className={styles.entry}>
              <label htmlFor={userData.phone} className={styles.label}>Main Phone#</label>
              <input
                name={userData.phone}
                value={userData.phone}
                disabled={!editProfile}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor={userData.email} className={styles.label}> {editProfile ? "To change your Email address, contact us to ..." : "Email"}</label>
              <input
                name={userData.email}
                value={userData.email}
                disabled={!editProfile}
                className={styles.input}
              />
            </div>
            <div className={styles.entry} style={{display: !editProfile ? userData.contactPreference && "flex" : "none"}}>
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
            {/* <div className={styles.entry}>
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
      </div>
    );
}

export default UserProfile