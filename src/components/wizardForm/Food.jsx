import React, { useEffect, useState } from 'react';
import { useWizard } from 'react-use-wizard';
import { motion } from 'framer-motion';
import styles from './wizardForm.module.css';


function Food({ setFormData, formData }) {
  const { nextStep, previousStep } = useWizard();
    const [meals, setMeals] = useState(formData.food.meals || [])
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
        const newMeals = Array.from({ length: Math.min(value, 5) }, (_, i) => meals[i] || { time: '', amount: '', typeOfFood: '', brand: '' });
        setMeals(newMeals);
    }
  };

  const handleMealChange = (index, e) => {
    const { name, value } = e.target;
    const updatedMeals = meals.map((meal, i) =>
      i === index ? { ...meal, [name]: value } : meal
    );
    setMeals(updatedMeals);
    setFormData((prevData) => ({
      ...prevData,
      food: {
        ...prevData.food,
        meals: updatedMeals,
      },
    }));
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
        {meals.map((meal, i) => (
          <div key={i} className={styles.extraInfoContainer}>
            <h4>Meal {i + 1}</h4>
            <div className={styles.entry}>
              <label htmlFor="time" className={styles.label}>Time of day</label>
              <input
                type="text"
                name="time"
                value={meal.time}
                onChange={(e) => handleMealChange(i, e)}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="amount" className={styles.label}>How much?</label>
              <input
                type="text"
                name="amount"
                value={meal.amount}
                onChange={(e) => handleMealChange(i, e)}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="typeOfFood" className={styles.label}>What type of food is it? (dry, wet, raw?)</label>
              <input
                type="text"
                name="typeOfFood"
                value={meal.typeOfFood}
                onChange={(e) => handleMealChange(i, e)}
                className={styles.input}
              />
            </div>
            <div className={styles.entry}>
              <label htmlFor="brand" className={styles.label}>What brand?</label>
              <input
                type="text"
                name="brand"
                value={meal.brand}
                onChange={(e) => handleMealChange(i, e)}
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

export default Food