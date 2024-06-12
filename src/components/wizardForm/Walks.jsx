import React from 'react';
import { useWizard } from 'react-use-wizard';
import { motion } from 'framer-motion';
import styles from './wizardForm.module.css';

function Walks({ setFormData, formData }) {
  const { nextStep, previousStep } = useWizard();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      walks: {
        ...prevData.walks,
        [name]: type === 'checkbox' ? checked : value,
      },
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
      <h2 className={styles.header}>Walks Information</h2>
      <form>
        <div className={styles.entry}>
          <label htmlFor="needs" className={styles.label}>Does your pet need walks?</label>
          <input
            type="checkbox"
            name="needs"
            checked={formData.walks.needs}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        {formData.walks.needs && (
          <>
            <div className={styles.entry}>
              <label htmlFor="amountDaily" className={styles.label}>How many walks per day?</label>
              <input
                type="number"
                name="amountDaily"
                value={formData.walks.amountDaily}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="distanceInMiles" className={styles.label}>Total distance (in miles)</label>
              <input
                type="number"
                name="distanceInMiles"
                value={formData.walks.distanceInMiles}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="timeInMinutes" className={styles.label}>Total time (in minutes)</label>
              <input
                type="number"
                name="timeInMinutes"
                value={formData.walks.timeInMinutes}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="route" className={styles.label}>Preferred route</label>
              <input
                type="text"
                name="route"
                value={formData.walks.route}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="preferences" className={styles.label}>Preferences</label>
              <textarea
                name="preferences"
                value={formData.walks.preferences}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="habits" className={styles.label}>Habits</label>
              <textarea
                name="habits"
                value={formData.walks.habits}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="details" className={styles.label}>Additional details</label>
              <textarea
                name="details"
                value={formData.walks.details}
                onChange={handleInputChange}
                className={styles.input}
              />
            </div>
          </>
        )}
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
  );
}

export default Walks;