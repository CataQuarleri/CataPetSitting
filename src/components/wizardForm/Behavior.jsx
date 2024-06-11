import React from 'react';
import { useWizard } from 'react-use-wizard';
import { motion } from 'framer-motion';
import styles from './wizardForm.module.css';

function Behavior({ setFormData, formData }) {
  const { nextStep, previousStep } = useWizard();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      behavior: {
        ...prevData.behavior,
        [name]: value,
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
      <h2 className={styles.header}>Behavior Information</h2>
      <form>
        <div className={styles.entry}>
          <label htmlFor="specialNeeds" className={styles.label}>Special Needs</label>
          <textarea
            name="specialNeeds"
            value={formData?.behavior?.specialNeeds}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="routine" className={styles.label}>Routine</label>
          <textarea
            name="routine"
            value={formData?.behavior?.routine}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="trainingRoutine" className={styles.label}>Training Routine</label>
          <textarea
            name="trainingRoutine"
            value={formData?.behavior?.trainingRoutine}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="fears" className={styles.label}>Fears</label>
          <textarea
            name="fears"
            value={formData?.behavior?.fears}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="notes" className={styles.label}>Additional Notes</label>
          <textarea
            name="notes"
            value={formData?.behavior?.notes}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
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

export default Behavior;
