import React from 'react'
import { useWizard } from 'react-use-wizard';

function Food() {
    const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <div>Food</div>
  )
}

export default Food