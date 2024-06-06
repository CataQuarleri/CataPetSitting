import Navbar from './components/Navbar/Navbar.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';
import Home from './pages/Home/Home.jsx';
import Login from './components/AuthPages/Login.jsx'
import ClientPortal from './pages/ClientPortal/ClientPortal.jsx';
import SignUp from './components/AuthPages/SignUp.jsx';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useAuthStore } from './stores/authStore.js';
import { useEffect } from 'react';
import { auth } from './auth/firebase.js';
import Footer from './components/Footer/Footer.jsx';

function App() {
	const { userData, authIsReady, initialLoad } = useAuthStore();
	useEffect(() => {
		let unsub = auth.onAuthStateChanged((user) => {
			console.log('authentication', user);
			initialLoad(user);
			// axios.defaults.headers.common['Authorization'] = `Bearer ${user.accessToken}`;
			// setUserAuth({authIsReady:true,user:user})
			unsub();
		});
	}, []);
	return (
		<>
			{authIsReady && (
					<div className='body'>
						<Navbar />

						<Routes>
							<Route
								path='/'
								element={<Home user={userData?.firstName} />}
							/>
							<Route
								path='/about-us'
								element={<AboutUs />}
							/>
							{userData ? (
								<Route
									path='/myprofile'
									element={<ClientPortal />}
								/>
							) : (
								<Route
									path='/login'
									element={<Login />}
								/>
							)}
							<Route
								path='/register'
								element={<SignUp />}
							/>
						</Routes>
					<Footer />
					</div>
			)}
		</>
	);
}

export default App;
