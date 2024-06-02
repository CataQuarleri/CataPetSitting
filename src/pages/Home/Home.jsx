import React from 'react';
import styles from './home.module.css';
import {Link} from 'react-router-dom'

function Home({categories, loading}){
  
const loadedContent =  <h1>I'm Home!</h1>


  return (
    <div className={styles.home}>
      <div className={styles.cardsContainer}>
        {loading ? <h1>Loading content...</h1> : loadedContent}
      </div>
    </div>
  );
};

export default Home;
