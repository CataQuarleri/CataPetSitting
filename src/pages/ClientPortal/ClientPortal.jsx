import { useEffect, useState } from 'react';
import SidebarNav  from '../../components/clientDashboard/SidebarNav.jsx';
import AddPet from '../../components/clientDashboard/AddPet.jsx';
import { useClientStore } from '../../stores/clientStore.js';
import styles from './clientPortal.module.css'
function ClientPortal() {
	const [selectedMenuItem, setSelectedMenuItem] = useState()
const {profile, service, myPets, info, toggleProfile} = useClientStore()

	return (
	  <div className={styles.clientPortal}>
		<SidebarNav setSelectedMenuItem={setSelectedMenuItem}/>
		<div className={styles.content}>
		  <div className={styles.fullPage}>
			{selectedMenuItem == 'addPet' && <AddPet/>}
			<div onClick={()=> toggleProfile()} style={{cursor: 'pointer'}}>CHANGE PROFILE - {profile.toString()}</div>
		  </div>
		</div>
		{/* {isMobile && <SidebarNav isMobile={true} />} */}
	  </div>
	);
  };

export default ClientPortal;
