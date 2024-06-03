import React from 'react';
import styles from './home.module.css';
import {Link} from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore';
function Home({user, loading}){
  const {userData} = useAuthStore()
const loadedContent =  <h1>I'm Home! Hello {userData?.firstName ? userData.firstName : "guest"}</h1>


  return (
    <div className={styles.home}>
      <div className={styles.cardsContainer}>
        {loading ? <h1>Loading content...</h1> : loadedContent}
      </div>
    </div>
  );
};

export default Home;
