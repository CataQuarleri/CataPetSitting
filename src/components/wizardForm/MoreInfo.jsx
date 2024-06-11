import React from 'react';
import { useWizard } from 'react-use-wizard';
import { motion } from 'framer-motion';
import styles from './wizardForm.module.css';

function MoreInfo({ setFormData, formData }) {
  const { nextStep, previousStep } = useWizard();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTreatChange = (index, e) => {
    const updatedTreats = formData.treats.map((treat, i) =>
      i === index ? e.target.value : treat
    );
    setFormData((prevData) => ({
      ...prevData,
      treats: updatedTreats,
    }));
  };

  const handleToyChange = (index, e) => {
    const updatedToys = formData.toys.map((toy, i) =>
      i === index ? e.target.value : toy
    );
    setFormData((prevData) => ({
      ...prevData,
      toys: updatedToys,
    }));
  };

  const addTreat = () => {
    setFormData((prevData) => ({
      ...prevData,
      treats: [...prevData.treats, ''],
    }));
  };

  const addToy = () => {
    setFormData((prevData) => ({
      ...prevData,
      toys: [...prevData.toys, ''],
    }));
  };

  const deleteTreat = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      treats: prevData.treats.filter((_, i) => i !== index),
    }));
  };

  const deleteToy = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      toys: prevData.toys.filter((_, i) => i !== index),
    }));
  };

  function handleSubmit(){
    console.log("FORM DATA TO SubMIT", formData)
  }
  return (
    <motion.div
      className={styles.formStep}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.header}>Additional Information</h2>
      <form>
        <div className={styles.entry}>
          <label htmlFor="relevantInformation" className={styles.label}>Relevant Information</label>
          <textarea
            name="relevantInformation"
            value={formData.relevantInformation}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <h3 className={styles.subHeader}>Treats</h3>
        {formData.treats.map((treat, index) => (
          <div key={index} className={styles.entry}>
            <label htmlFor={`treat-${index}`} className={styles.label}>Treat {index + 1}</label>
            <input
              type="text"
              name={`treat-${index}`}
              value={treat}
              onChange={(e) => handleTreatChange(index, e)}
              className={styles.input}
            />
            <button type="button" onClick={() => deleteTreat(index)} className={styles.deleteButton}>
              Delete Treat
            </button>
          </div>
        ))}
        <button type="button" onClick={addTreat} className={styles.addButton}>
          Add Treat
        </button>
        <h3 className={styles.subHeader}>Toys</h3>
        {formData.toys.map((toy, index) => (
          <div key={index} className={styles.entry}>
            <label htmlFor={`toy-${index}`} className={styles.label}>Toy {index + 1}</label>
            <input
              type="text"
              name={`toy-${index}`}
              value={toy}
              onChange={(e) => handleToyChange(index, e)}
              className={styles.input}
            />
            <button type="button" onClick={() => deleteToy(index)} className={styles.deleteButton}>
              Delete Toy
            </button>
          </div>
        ))}
        <button type="button" onClick={addToy} className={styles.addButton}>
          Add Toy
        </button>
        <div className={styles.buttonContainer}>
          <button type="button" className={styles.backButton} onClick={previousStep}>
            Back
          </button>
          <button type="button" className={styles.nextButton} onClick={handleSubmit}>
            Submit Pet
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default MoreInfo;