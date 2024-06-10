import { useEffect, useState } from 'react';
import SidebarNav from '../../components/clientDashboard/SidebarNav.jsx';
import AddPet from '../../components/clientDashboard/AddPet.jsx';
import AddEmergencyContact from '../../components/clientDashboard/AddEmergencyContact.jsx';
import UserProfile from '../../components/clientDashboard/UserProfile.jsx';
import UserServices from '../../components/clientDashboard/UserServices.jsx';
import ViewPets from '../../components/clientDashboard/ViewPets.jsx';
import { useUserStore } from '../../stores/userStore.js';
import styles from './clientPortal.module.css';
import HouseInstructions from '../../components/clientDashboard/HouseInstructions.jsx';
import VetInfo from '../../components/clientDashboard/VetInfo.jsx';
function ClientPortal() {
	const [selectedMenuItem, setSelectedMenuItem] = useState('profile');
	const { profile, service, myPets, info, toggleProfile } = useUserStore();
	const { userData } = useUserStore();
	return (
		<div className={styles.clientPortal}>
			<SidebarNav setSelectedMenuItem={setSelectedMenuItem} />
			<div className={styles.content}>
				<div className={styles.fullPage}>
					{selectedMenuItem == 'profile' && <UserProfile />}
					{selectedMenuItem == 'emergencyContact' && <AddEmergencyContact />}
					{selectedMenuItem == 'houseInstructions' && <HouseInstructions />}
					{selectedMenuItem == 'vetInfo' && <VetInfo />}
					{selectedMenuItem == 'pets' && <ViewPets />}
					{selectedMenuItem == 'addPet' && <AddPet />}
				</div>
			</div>
		</div>
	);
}

export default ClientPortal;
