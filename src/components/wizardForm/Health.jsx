import React from 'react'
import { useWizard } from 'react-use-wizard';

function Health() {
    const { handleStep, previousStep, nextStep } = useWizard();

  return (
    <div>Health</div>
  )
}

export default Health