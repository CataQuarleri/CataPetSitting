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
	const [coordinates, setCoordinates] = useState([]);
	const [formData, setFormData] = useState(userData);
	const toggleEdit = () => {
		setEditHouseInstructions(!editHouseInstructions);
	};
	let address = userData.address
	// console.log("FORM DATA", formData)
	const handleUpdateSubmit = async (e) => {
		e.preventDefault();
		// console.log(coordinates)
		// console.log(addressLine)
		//  setFormData((prevState) => ({
		// 	...prevState,
		// 	address: {
		// 		coordinates: coordinates,
		// 		addressLine: addressLine,
		// 	}
		// }));
		// const formData = new FormData(e.target);
		setEditHouseInstructions(false);
		const payload = formData;
		console.log('payload', payload);
		updateProfile(formData);
		// userStore.updateProfile(payload);
		// navigate('/');
	};
	useEffect(() => {
		setFormData(userData);
	}, [userData]);

	function sendPlaceDetailsRequest(feature, geocoder) {
		// setAddressLine(feature.properties.formatted);
		// setCoordinates([feature.properties.lon, feature.properties.lat]);
		setFormData((prevState) => ({
			...prevState,
			address: {
				coordinates: [feature.properties.lon, feature.properties.lat],
				addressLine: feature.properties.formatted,
			}
		}));
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
							style={{ display: !editHouseInstructions ? !userData.address.addressLine && 'none' : 'flex' }}>
							<label
								htmlFor='address'
								className={styles.label}>
								Current Address
							</label>
							<input type="text" value={userData.address.addressLine} disabled/>
							</div>
						<div
							className={styles.entry}
							style={{ display: !editHouseInstructions ? !userData.address.street && 'none' : 'flex' }}>
							<label
								htmlFor='address'
								className={styles.label}>
								New Address
							</label>
							<GeoapifyGeocoderAutocomplete
								lang='en'
								type='amenity'
								name='address'
								debounceDelay='1'
								allowNonVerifiedHouseNumber='true'
								addDetails={true}
								sendPlaceDetailsRequestFunc={sendPlaceDetailsRequest}

							/>
						</div>
						
				
						<div
							className={styles.entry}
							style={{ display: !editHouseInstructions ? !userData.houseInstructions && 'none' : 'flex' }}>
							<label
								htmlFor='houseInstructions'
								className={styles.label}>
								House Instructions
							</label>
							<textarea
								value={!editHouseInstructions ? userData.houseInstructions && userData.houseInstructions : null}
								type='text'
								name='houseInstructions'
								placeholder={editHouseInstructions ? 'Write as many details as you consider important: How to access? Any tricks with any door? When to take out the trash. Does any plant have special needs? ' : userData.houseInstructions}
								className={styles.input}
								style={{ width: '100%' }}
								onChange={(e)=> setFormData(prevState => ({...prevState, houseInstructions: e.target.value}))}></textarea>
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
