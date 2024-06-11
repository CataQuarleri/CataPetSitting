import React, { useEffect, useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { motion } from 'framer-motion';
import styles from './wizardForm.module.css';


function Food({ setFormData, formData }) {
  const { nextStep, previousStep } = useWizard();
    const [meals, setMeals] = useState(null)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      food: {
        ...prevData.food,
        [name]: value,
      },
    }))
    if(name == 'frequency') {
        if(e.target.value <= 5){
            setMeals(e.target.value)
        }else {
            setMeals(5)
        }
    }
  };
  useEffect(() => {
    console.log('something')
  },[meals])

  return (
    <motion.div
      className={styles.formStep}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className={styles.header}>Food Information</h2>
      <form>
        <div className={styles.entry}>
          <label htmlFor="frequency" className={styles.label}>Feeding Frequency</label>
          <input
            type="number"
            name="frequency"
            value={formData.food.frequency}
            onChange={handleInputChange}
            className={styles.input}
            max="5"
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="foodAllergies" className={styles.label}>Food Allergies</label>
          <input
            type="text"
            name="foodAllergies"
            value={formData.food.foodAllergies}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="restrictions" className={styles.label}>Food Restrictions</label>
          <input
            type="text"
            name="restrictions"
            value={formData.food.restrictions}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        <div className={styles.entry}>
          <label htmlFor="notes" className={styles.label}>Additional Notes</label>
          <textarea
            name="notes"
            value={formData.food.notes}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
        {meals && Array.from({length: meals}).map((meal, i)=> {
            return (<div className={styles.meals}> 
            <h4>Meal {i + 1}</h4>
            <div className={styles.entry}>
                <label htmlFor="time" className={styles.label}>Time of day</label>
                <input
                  type="text"
                  name="time"
                  value={formData.food?.meals[i]?.time}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.entry}>
                <label htmlFor="amount" className={styles.label}>How much?</label>
                <input
                  type="text"
                  name="amount"
                  value={formData.food?.meals[i]?.amount}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.entry}>
                <label htmlFor="typeOfFood" className={styles.label}>What type of food is it? (dry, wet, raw?)</label>
                <input
                  type="text"
                  name="typeOfFood"
                  value={formData.food?.meals[i]?.typeOfFood}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div>
              <div className={styles.entry}>
                <label htmlFor="brand" className={styles.label}>What brand?</label>
                <input
                  type="text"
                  name="brand"
                  value={formData.food?.meals[i]?.brand}
                  onChange={handleInputChange}
                  className={styles.input}
                />
              </div></div>)
        })}
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

export default Food