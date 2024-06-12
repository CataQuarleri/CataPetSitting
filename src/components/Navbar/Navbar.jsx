import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import { useUserStore } from '../../stores/userStore';
import logo from '/images/logo.png';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false); //manages menu on mobile screen
	const navigate = useNavigate();
	const toggleMenu = () => setMenuOpen(!menuOpen);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

	const { userData, logOut } = useUserStore();

	const [dropdownBtn, setDropdownBtn] = useState([]);
	async function handleClientPortal(action) {
		if (action == 'Log Out') {
			logOut();
			navigate('/');
		} else {
			let newAction = action.replace(' ', '-');
			navigate(`/clientPortal/${newAction}`);
		}
	}
	useEffect(() => {
		if (userData) {
			console.log('USER IS IN');
			setDropdownBtn(['My Portal', 'Log Out']);
		} else {
			console.log('USER IS OUT');

			setDropdownBtn(['My Portal', 'New Client']);
		}
	}, [userData]);
	return (
		<>
			<nav className={styles.navbar}>
				<Link to='/'>
					<img
						src={logo}
						alt='shop logo'
						className={styles.logo}
					/>
				</Link>
				<div
					className={styles.hamburger}
					onClick={toggleMenu}>
					☰
				</div>
				<div className={`${menuOpen ? styles.menu : styles.displayNone} ${menuOpen ? styles.menuOpen : ''}`}>
					<Link
						to='/'
						className={styles.link}>
						HOME
					</Link>
					<Link
						to='/about-us'
						className={styles.link}>
						ABOUT US
					</Link>
					{userData ? (
						<>
							<Link
								to='/myprofile'
								className={styles.link}>
								MY PROFILE
							</Link>
							<div
								onClick={() => {
									logOut()
								navigate('/')}}
								className={styles.link}>
								LOG OUT
							</div>
						</>
					) : (
						<>
							<Link
								to='/login'
								className={styles.link}>
								LOGIN
							</Link>
							<Link
								to='/register'
								className={styles.link}>
								REGISTER
							</Link>
						</>
					)}

					{/* <div className={styles.dropdown}>
            <div className={styles.dropbtn}>CLIENT PORTAL</div>
            <div className={styles.dropdownContent}>
           
                {dropdownBtn.map((action, i) => 
                  <div key={i} 
                  onClick={()=>handleClientPortal(action)}
                  className={styles.dropdownLink}>{action?.toUpperCase()}
                  </div>
              )}
            </div>
          </div> */}
					{/* <Link to="/login" className={styles.link}>LOGIN/SIGNUP</Link> */}
				</div>
			</nav>
			{/* <SidebarNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> */}
		</>
	);
}

export default Navbar;
