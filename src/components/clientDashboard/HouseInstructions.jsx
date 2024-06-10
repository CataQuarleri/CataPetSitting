import React, { useEffect, useState } from 'react';
import { useUserStore } from '../../stores/userStore';
import Input from './Input.jsx';
import styles from './clientStyles.module.css';
import '@geoapify/geocoder-autocomplete/styles/round-borders.css';
import { GeoapifyGeocoderAutocomplete, GeoapifyContext } from '@geoapify/react-geocoder-autocomplete';

const API_KEY = import.meta.env.VITE_GEOAPIFY_API_KEY;
function HouseInstructions() {
	const { userData, updateProfile, setUserData, loading } = useUserStore();
	const [editHouseInstructions, setEditHouseInstructions] = useState(false);
	const [addressLine, setAddressLine] = useState(null);
  const [coordinates, setCoordinates ] = useState([])
	const [formData, setFormData] = useState(userData);
	const toggleEdit = () => {
		setEditHouseInstructions(!editHouseInstructions);
	};
// console.log("FORM DATA", formData)
	const handleUpdateSubmit = (e) => {
		e.preventDefault();
    setFormData(prevState => ({...prevState, [address.coordinates]: coordinates, "address.addressLine": addressLine}))
		// const formData = new FormData(e.target);
		setEditHouseInstructions(false);
		const payload = formData;
		console.log('payload', payload);
		// updateProfile(payload);
		// userStore.updateProfile(payload);
		// navigate('/');
	};
	useEffect(() => {
		setFormData(userData);
	}, [userData]);

  function sendPlaceDetailsRequest(feature, geocoder) {
    console.log("IN PLACE DETAIL")
    setAddressLine(feature.formatted)
    setCoordinates([feature.lon, feature.lat])
    console.log(feature); // the result of the search
    return geocoder.sendPlaceDetailsRequest(feature);
  }
	return (
		<GeoapifyContext apiKey={API_KEY}>
			<div className={styles.userProfile}>
				<div className={styles.profileHeader}>
					<h3 className={styles.header}>HOUSE INSTRUCTIONS</h3>
					<div className={styles.toggleSwitchContainer}>
						{' '}
						<label className={styles.toggleSwitch}>
							<input
								type='checkbox'
								checked={editHouseInstructions}
								onChange={toggleEdit}
							/>
							<span className={styles.slider}></span>
						</label>
						Edit House Instructions
					</div>
				</div>
				{!loading && (
					<form onSubmit={handleUpdateSubmit}>
						<div
							className={styles.entry}
							style={{ display: !editHouseInstructions ? !userData.address.street && 'none' : 'flex' }}>
							<label
								htmlFor='address'
								className={styles.label}>
								Address
							</label>
							<GeoapifyGeocoderAutocomplete
								// onChange={(e) => handleChange(e)}
								lang='en'
								type='amenity'
								name='address1'
								debounceDelay='1'
								allowNonVerifiedHouseNumber='true'
                addDetails={true}
                sendPlaceDetailsRequestFunc={sendPlaceDetailsRequest}
                // postprocessHook={handlePostProcessHook}
                // placeSelect={handleSendPlaceDetailsRequestFunc}
							/>
						</div>

						{/* <GeoapifyGeocoderAutocomplete 
onChange={(e)=> setFormData(prevState => ({...prevState, "address.street": e.target.value}))}
lang="en"
type="city"
/> */}
						{/* <Input setFormData={setFormData} label="Street" data="address.street"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="City" data="address.city"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="State" data="address.state"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="Country" data="address.country"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="Zip Code" data="address.zip"  editProfile={editHouseInstructions}/>
            <Input setFormData={setFormData} label="House Instructions" data="houseInstructions" editProfile={editHouseInstructions}/> */}
						<Input
							setFormData={setFormData}
							label="Who's Address is this?"
							data='address.typeOfAddress'
							editProfile={editHouseInstructions}
						/>
						<div
							className={styles.entry}
							style={{ display: !editHouseInstructions ? !userData.houseInstructions && 'none' : 'flex' }}>
							<label
								htmlFor='houseInstructions'
								className={styles.label}>
								House Instructions
							</label>
							<textarea
								type='text'
								name='houseInstructions'
								placeholder='Write as many details as you consider important: How to access? Any tricks with any door? When to take out the trash. Does any plant have special needs? '
								className={styles.input}
								style={{ width: '100%' }}></textarea>
						</div>
						{editHouseInstructions && (
							<button
								type='submit'
								className={styles.toggleButton}>
								Update
							</button>
						)}
					</form>
				)}
			</div>
		</GeoapifyContext>
	);
}

export default HouseInstructions;
