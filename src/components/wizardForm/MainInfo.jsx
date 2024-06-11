import React, { useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { motion } from 'framer-motion';
import Input from '../clientDashboard/Input'; // Assuming Input component is correctly imported
import styles from './wizardForm.module.css';

function MainInfo({ setFormData, formData }) {
  const { nextStep } = useWizard();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      picture: file,
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
      <h2 className={styles.header}>Main Information</h2>
      <form>
        <div className={styles.entry}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="typeOfPet" className={styles.label}>Type of Pet</label>
          <input
            type="text"
            name="typeOfPet"
            value={formData.typeOfPet}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="breed" className={styles.label}>Breed</label>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="sex" className={styles.label}>Sex</label>
          <input
            type="text"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="yearOfBirth" className={styles.label}>Year of Birth</label>
          <input
            type="number"
            name="yearOfBirth"
            value={formData.yearOfBirth}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="microchipped" className={styles.label}>
            Microchipped
          </label>
          <input
            type="checkbox"
            name="microchipped"
            checked={formData.microchipped}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="picture" className={styles.label}>Upload Picture</label>
          <input
            type="file"
            name="picture"
            accept="image/*"
            onChange={handleFileChange}
            className={styles.input}
          />
        </div>
        <button type="button" className={styles.nextButton} onClick={nextStep}>
          Next
        </button>
      </form>
    </motion.div>
  );
}

export default MainInfo;