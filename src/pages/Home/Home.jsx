import React from 'react';
import styles from './home.module.css';
import {Hero} from '../../components/Home/Hero.jsx'
import { useAuthStore } from '../../stores/authStore';
function Home({user, loading}){
  const {userData} = useAuthStore()
const loadedContent = <><Hero /></>


  return (
    <div className={styles.home}>
      <div className={styles.cardsContainer}>
        {loading ? <h1>Loading content...</h1> : loadedContent}
      </div>
    </div>
  );
};

export default Home;
