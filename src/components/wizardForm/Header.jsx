import React from 'react'
import { useWizard } from 'react-use-wizard';
import styles from './wizardForm.module.css'
const steps = [
    'Main Info',
    'Food',
    'Behavior',
    'Health',
    'Walks',
    'More Info'
  ];
function Header() {
    const { activeStep, goToStep } = useWizard();

  return (
    <div className={styles.stepsHeader}>
      {steps.map((step, index) => (
        <div
          key={index}
          className={`${styles.step} ${index <= activeStep ? styles.activeStep : ''}`}
          onClick={() => goToStep(index)}
        >
          {step}
        </div>
      ))}
    </div>
  );
}

export default Header