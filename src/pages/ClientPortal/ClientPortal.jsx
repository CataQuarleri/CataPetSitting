import { useEffect, useState } from 'react';
import SidebarNav from '../../components/clientDashboard/SidebarNav.jsx';
import AddPet from '../../components/clientDashboard/AddPet.jsx';
import UpdateUser from '../../components/clientDashboard/UpdateUser.jsx';
import UserProfile from '../../components/clientDashboard/UserProfile.jsx';
import UserServices from '../../components/clientDashboard/UserServices.jsx';
import ViewPets from '../../components/clientDashboard/ViewPets.jsx';
import { useUserStore } from '../../stores/userStore.js';
import styles from './clientPortal.module.css';
function ClientPortal() {
	const [selectedMenuItem, setSelectedMenuItem] = useState();
	const { profile, service, myPets, info, toggleProfile } = useUserStore();
	const { userData } = useUserStore();
	return (
		<div className={styles.clientPortal}>
			<SidebarNav setSelectedMenuItem={setSelectedMenuItem} />
			<div className={styles.content}>
				<div className={styles.fullPage}>
					{selectedMenuItem == 'addPet' && <AddPet />}
					{selectedMenuItem == 'profile' && <UserProfile />}
					{selectedMenuItem == 'service' && <UserServices />}
					{selectedMenuItem == 'addInfo' && <UpdateUser />}
					{selectedMenuItem == 'pets' && <ViewPets />}
				</div>
			</div>
		</div>
	);
}

export default ClientPortal;
