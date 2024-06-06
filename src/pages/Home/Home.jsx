import React from 'react';
import styles from './home.module.css';
import { Hero } from '../../components/Home/Hero.jsx';
import { useUserStore } from '../../stores/userStore';
function Home({ user, loading }) {
	const { userData } = useUserStore();
	const loadedContent = (
		<>
			<Hero /> <h1>Hello {user}</h1>
		</>
	);

	return (
		<div className={styles.home}>
			<div className={styles.cardsContainer}>{loading ? <h1>Loading content...</h1> : loadedContent}</div>
		</div>
	);
}

export default Home;
