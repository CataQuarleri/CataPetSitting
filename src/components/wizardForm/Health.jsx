import React, { useState } from 'react'
import { useWizard } from 'react-use-wizard';
import { motion } from 'framer-motion';
import { TiPlus } from "react-icons/ti";
import styles from './wizardForm.module.css';


function Health({formData, setFormData}) {
    const { nextStep, previousStep } = useWizard();
    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        setFormData((prevData) => ({
          ...prevData,
          health: {
            ...prevData.health,
            [name]: checked,
          },
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          health: {
            ...prevData.health,
            [name]: value,
          },
        }));
      }
    };
  
    const handleMedicationChange = (index, e) => {
      const { name, value } = e.target;
      const updatedMedicationInfo = formData.health?.medicationInfo?.map((medication, i) =>
        i === index ? { ...medication, [name]: value } : medication
      );
      setFormData((prevData) => ({
        ...prevData,
        health: {
          ...prevData.health,
          medicationInfo: updatedMedicationInfo,
        },
      }));
    };
  
    const handleVaccineChange = (index, e) => {
      const { name, value } = e.target;
      const updatedVaccines = formData.health?.vaccines?.map((vaccine, i) =>
        i === index ? { ...vaccine, [name]: value } : vaccine
      );
      setFormData((prevData) => ({
        ...prevData,
        health: {
          ...prevData.health,
          vaccines: updatedVaccines,
        },
      }));
    };
  
    const handleAllergiesChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        setFormData((prevData) => ({
          ...prevData,
          allergies: {
            ...prevData.allergies,
            [name]: checked,
          },
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          allergies: {
            ...prevData.allergies,
            [name]: value,
          },
        }));
      }
    };

    function handleAddMedication(e){
        e.preventDefault();
            setFormData((prevData) => ({
                ...prevData,
                health: {
                  ...prevData.health,
                  medicationInfo: [
                    ...prevData.health.medicationInfo,
                    { typeOfMedication: "", amount: "", time: "", details: "" }
                  ]
                }
              }));
    }
    function deleteMedicationInfo(index, e){
        e.preventDefault();
        setFormData((prevData) => ({
          ...prevData,
          health: {
            ...prevData.health,
            medicationInfo: prevData.health.medicationInfo.filter((_, i) => i !== index)
          }
        }));
      };

    return (
        <motion.div
        className={styles.formStep}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
             <h2 className={styles.header}>Health Information</h2>
      <form>
        <div className={styles.entry}>
          <label htmlFor="isMedicated" className={styles.label}>Is your pet medicated?</label>
          <input
            type="checkbox"
            name="isMedicated"
            checked={formData.health.isMedicated}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        {formData.health.isMedicated && formData.health?.medicationInfo.map((medication, index) => (
          <div key={index} className={styles.extraInfoContainer}>
            <button name="delete" onClick={(e)=>deleteMedicationInfo(index, e)}>X</button>
            <h4>Medication {index + 1}</h4>
            <div className={styles.entry}>
              <label htmlFor={`typeOfMedication-${index}`} className={styles.label}>Type of Medication</label>
              <input
                type="text"
                name="typeOfMedication"
                value={medication.typeOfMedication}
                onChange={(e) => handleMedicationChange(index, e)}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor={`amount-${index}`} className={styles.label}>Amount</label>
              <input
                type="text"
                name="amount"
                value={medication.amount}
                onChange={(e) => handleMedicationChange(index, e)}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor={`time-${index}`} className={styles.label}>Time</label>
              <input
                type="text"
                name="time"
                value={medication.time}
                onChange={(e) => handleMedicationChange(index, e)}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor={`details-${index}`} className={styles.label}>Details</label>
              <textarea
                name="details"
                value={medication.details}
                onChange={(e) => handleMedicationChange(index, e)}
                className={styles.input}
              />
            </div>
          </div>
        ))}
        <button onClick={handleAddMedication} name="addMedication" className={styles.addButton}><TiPlus /> Add Another Medication Info</button>
 <div className={styles.entry}>
          <label htmlFor="hasAllergies" className={styles.label}>Does your pet have any allergies?</label>
          <input
            type="checkbox"
            name="hasAllergies"
            checked={formData.allergies.hasAllergies}
            onChange={handleAllergiesChange}
            className={styles.input}
          />
        </div>
        {formData.allergies?.hasAllergies && (
          <div className={styles.extraInfoContainer}>
            <div className={styles.entry}>
              <label htmlFor="typeOfAllergy" className={styles.label}>Type of Allergy</label>
              <input
                type="text"
                name="typeOfAllergy"
                value={formData.allergies.typeOfAllergy}
                onChange={handleAllergiesChange}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="careInstructions" className={styles.label}>Care Instructions</label>
              <textarea
                name="careInstructions"
                value={formData.allergies.careInstructions}
                onChange={handleAllergiesChange}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="additionalInfo" className={styles.label}>Additional Information</label>
              <textarea
                name="additionalInfo"
                value={formData.allergies.additionalInfo}
                onChange={handleAllergiesChange}
                className={styles.input}
              />
            </div>
          </div>
        )}
        <div className={styles.entry}>
          <label htmlFor="weightInPounds" className={styles.label}>Weight (in pounds)</label>
          <input
            type="number"
            name="weightInPounds"
            value={formData.health.weightInPounds}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="size" className={styles.label}>Size</label>
          <input
            type="text"
            name="size"
            value={formData.health.size}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="lastVetVisit" className={styles.label}>Last Vet Visit</label>
          <input
            type="date"
            name="lastVetVisit"
            value={formData.health.lastVetVisit}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        {formData.health?.vaccines?.map((vaccine, index) => (
          <div key={index} className={styles.vaccine}>
            <h4>Vaccine {index + 1}</h4>
            <div className={styles.entry}>
              <label htmlFor={`date-${index}`} className={styles.label}>Date</label>
              <input
                type="date"
                name="date"
                value={vaccine.date}
                onChange={(e) => handleVaccineChange(index, e)}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor={`typeOfVaccine-${index}`} className={styles.label}>Type of Vaccine</label>
              <input
                type="text"
                name="typeOfVaccine"
                value={vaccine.typeOfVaccine}
                onChange={(e) => handleVaccineChange(index, e)}
                className={styles.input}
              />
            </div>
          </div>
        ))}
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.backButton} onClick={previousStep}>
            Back
          </button>
          <button type="button" className={styles.nextButton} onClick={nextStep}>
            Next
          </button>
        </div>
        </form>
        </motion.div>
    )
}

export default Health