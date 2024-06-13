import React from 'react';
import styles from './home.module.css';
import { Hero } from '../../components/Home/Hero.jsx';
import { useUserStore } from '../../stores/userStore';
import { Link } from 'react-router-dom';

function Home({ user, loading }) {
	const { userData } = useUserStore();
	const loadedContent = (
		<>
			<Hero /> <h1>Hello {user}</h1>
		</>
	);

	return (
		// <div className={styles.home}>
		// 	<div className={styles.cardsContainer}>{loading ? <h1>Loading content...</h1> : loadedContent}</div>
		// </div>
		<div className={styles.homePage}>
		<header className={styles.header}>
		  <h1>Welcome {user ? user : ""} to Cata's Pet Sitting</h1>
		  <p>Your one-stop solution for pet care and management.</p>
		  {user ? <Link to="/myprofile" className={styles.ctaButton}>Go to your profile</Link> : <Link to="/register" className={styles.ctaButton}>Register Now</Link>}
		</header>
		<section className={styles.features}>
		  <h2>Why Choose Us?</h2>
		  <div className={styles.featureCards}>
			<div className={styles.card}>
			  <h3>Manage Pet Information</h3>
			  <p>Fill out all the necessary information about your pet and keep it organized in one place.</p>
			</div>
			<div className={styles.card}>
			  <h3>Share with Caretakers</h3>
			  <p>Easily share your pet's information with sitters, vets, and caretakers.</p>
			</div>
			<div className={styles.card}>
			  <h3>Book Services</h3>
			  <p>Conveniently book pet care services directly through our platform.</p>
			</div>
		  </div>
		</section>
		<section className={styles.testimonials}>
		  <h2>What Our Users Say</h2>
		  <div className={styles.testimonialCards}>
			<div className={styles.card}>
			  <p>"This platform has made managing my dog's care so much easier. Highly recommend!"</p>
			  <cite>- Happy User</cite>
			</div>
			<div className={styles.card}>
			  <p>"Booking pet sitting services is a breeze now. I love the convenience!"</p>
			  <cite>- Satisfied Customer</cite>
			</div>
		  </div>
		</section>
	  </div>
	);
}

export default Home;
