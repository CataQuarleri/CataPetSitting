import { useEffect, useState } from 'react';
import Sidenav from '../../components/clientDashboard/Sidenav.jsx';
import PetAddition from '../../components/clientDashboard/PetAddition.jsx';
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
			<Sidenav setSelectedMenuItem={setSelectedMenuItem} />
			<div className={styles.content}>
				<div className={styles.fullPage}>
					{selectedMenuItem == 'services' && <UserServices />}
					{selectedMenuItem == 'profile' && <UserProfile />}
					{selectedMenuItem == 'emergencyContact' && <AddEmergencyContact />}
					{selectedMenuItem == 'houseInstructions' && <HouseInstructions />}
					{selectedMenuItem == 'vetInfo' && <VetInfo />}
					{userData.pets.map((eachPet, i)=>{
						if(selectedMenuItem == eachPet.name){
							return  <ViewPets key={i} pet={eachPet} setSelectedMenuItem={setSelectedMenuItem}/>
						}
					})}
					
					{selectedMenuItem == 'addPet' && <PetAddition setSelectedMenuItem={setSelectedMenuItem}/>}
				</div>
			</div>
		</div>
	);
}

export default ClientPortal;
