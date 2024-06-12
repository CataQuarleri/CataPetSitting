// PetProfile.jsx
import React, { useState } from 'react';
import styles from './petProfile.module.css';
import WrapperForm from '../wizardForm/WrapperForm';
import { useUserStore } from '../../stores/userStore';
import styles2 from './clientStyles.module.css'

const PetProfile = ({ pet, setSelectedMenuItem }) => {
  const {deletePet} = useUserStore()
    const [editPetProfile, setEditPetProfile] = useState(false)

	const toggleEdit = () => {
        setEditPetProfile(!editPetProfile);
      };

  async function handleDeletePet(){
    let deleteOnePet = confirm("Are you sure you want to delete your pet from our database?")
    if(deleteOnePet){
      await deletePet(pet)
      console.log("DELETED PET SUCCESFULLY")
      setSelectedMenuItem("profile")
    }else {

      console.log("CANCEL")
    }
  }
	return (
    
	<div className={styles.petProfile}>
      <div className={styles.btnContainer}>
	  <div className={styles2.toggleSwitchContainer}> <label className={styles2.toggleSwitch}>
          <input type="checkbox" checked={editPetProfile} onChange={toggleEdit} />
          <span className={styles2.slider}></span>
        </label>Edit Pet Profile
		</div>
      <button className={styles.updatePetBtn} onClick={handleDeletePet}>Delete Pet</button>
      </div>
      {!editPetProfile ?
      <>
			<h2 className={styles.header}>{pet.name}</h2>
			<div className={styles.section}>
				<h3 className={styles.sectionHeader}>Picture</h3>
				{pet.picture && (
					<img
						src={pet.picture}
						alt={`${pet.name}`}
						className={styles.picture}
					/>
				)}
			</div>
			<div className={styles.section}>
				<h3 className={styles.sectionHeader}>Basic Information</h3>
				<p>
					<strong>Type of Pet:</strong> {pet.typeOfPet}
				</p>
				<p>
					<strong>Breed:</strong> {pet.breed}
				</p>
				<p>
					<strong>Sex:</strong> {pet.sex}
				</p>
				<p>
					<strong>Year of Birth:</strong> {pet.yearOfBirth}
				</p>
				<p>
					<strong>Microchipped:</strong> {pet.microchipped ? 'Yes' : 'No'}
				</p>
			</div>

			<div className={styles.section}>
				<h3 className={styles.sectionHeader}>Behavior</h3>
				<p>
					<strong>Special Needs:</strong> {pet.behavior.specialNeeds}
				</p>
				<p>
					<strong>Routine:</strong> {pet.behavior.routine}
				</p>
				<p>
					<strong>Training Routine:</strong> {pet.behavior.trainingRoutine}
				</p>
				<p>
					<strong>Fears:</strong> {pet.behavior.fears}
				</p>
				<p>
					<strong>Notes:</strong> {pet.behavior.notes}
				</p>
			</div>

			<div className={styles.section}>
				<h3 className={styles.sectionHeader}>Health</h3>
				<p>
					<strong>Medicated:</strong> {pet.health.isMedicated ? 'Yes' : 'No'}
				</p>
				{pet.health.medicationInfo &&
					pet.health.medicationInfo.map((med, index) => (
						<div
							key={index}
							className={styles.subSection}>
							<p>
								<strong>Type of Medication:</strong> {med.typeOfMedication}
							</p>
							<p>
								<strong>Amount:</strong> {med.amount}
							</p>
							<p>
								<strong>Time:</strong> {med.time}
							</p>
							<p>
								<strong>Details:</strong> {med.details}
							</p>
						</div>
					))}
			</div>

			<div className={styles.section}>
				<h3 className={styles.sectionHeader}>Allergies</h3>
				<p>
					<strong>Has Allergies:</strong> {pet.allergies.hasAllergies ? 'Yes' : 'No'}
				</p>
				<p>
					<strong>Type of Allergy:</strong> {pet.allergies.typeOfAllergy}
				</p>
				<p>
					<strong>Care Instructions:</strong> {pet.allergies.careInstructions}
				</p>
				<p>
					<strong>Additional Info:</strong> {pet.allergies.additionalInfo}
				</p>
			</div>

			<div className={styles.section}>
				<h3 className={styles.sectionHeader}>Food</h3>
				<p>
					<strong>Frequency:</strong> {pet.food.frequency}
				</p>
				<p>
					<strong>Food Allergies:</strong> {pet.food.foodAllergies}
				</p>
				<p>
					<strong>Restrictions:</strong> {pet.food.restrictions}
				</p>
				<p>
					<strong>Notes:</strong> {pet.food.notes}
				</p>
				{pet.food.meals &&
					pet.food.meals.map((meal, index) => (
						<div
							key={index}
							className={styles.subSection}>
							<p>
								<strong>Time:</strong> {meal.time}
							</p>
							<p>
								<strong>Amount:</strong> {meal.amount}
							</p>
							<p>
								<strong>Type of Food:</strong> {meal.typeOfFood}
							</p>
							<p>
								<strong>Brand:</strong> {meal.brand}
							</p>
						</div>
					))}
			</div>

			<div className={styles.section}>
				<h3 className={styles.sectionHeader}>Treats</h3>
				{pet.treats &&
					pet.treats.map((treat, index) => (
						<div
							key={index}
							className={styles.subSection}>
							<p>
								<strong>Daily:</strong> {treat.daily ? 'Yes' : 'No'}
							</p>
							<p>
								<strong>Brand:</strong> {treat.typeOfTreat.brand}
							</p>
							<p>
								<strong>Style:</strong> {treat.typeOfTreat.style}
							</p>
							<p>
								<strong>Amount:</strong> {treat.typeOfTreat.amount}
							</p>
						</div>
					))}
			</div>
			{pet.walks && (
				<div className={styles.section}>
					<h3 className={styles.sectionHeader}>Walks</h3>
					<p>
						<strong>Needs:</strong> {pet.walks?.needs ? 'Yes' : 'No'}
					</p>
					<p>
						<strong>Amount Daily:</strong> {pet.walks?.amountDaily}
					</p>
					<p>
						<strong>Distance (Miles):</strong> {pet.walks?.distanceInMiles}
					</p>
					<p>
						<strong>Time (Minutes):</strong> {pet.walks?.timeInMinutes}
					</p>
					<p>
						<strong>Route:</strong> {pet.walks?.route}
					</p>
					<p>
						<strong>Preferences:</strong> {pet.walks?.preferences}
					</p>
					<p>
						<strong>Habits:</strong> {pet.walks?.habits}
					</p>
					<p>
						<strong>Details:</strong> {pet.walks?.details}
					</p>
				</div>
			)}

			<div className={styles.section}>
				<h3 className={styles.sectionHeader}>Other Information</h3>
				<p>
					<strong>Toys:</strong> {pet.toys.join(', ')}
				</p>
				<p>
					<strong>Relevant Information:</strong> {pet.relevantInformation}
				</p>
			</div>
      </>
      :
      <WrapperForm pet={pet} />}
		</div>
	);
};

export default PetProfile;
